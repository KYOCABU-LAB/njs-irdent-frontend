import NextAuth, { DefaultSession, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { HttpClient } from "@/shared/lib/useHttpClient";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    refreshToken?: string;
    user: {
      id: string;
      email: string;
      name: string;
      roles?: string[];
    } & DefaultSession["user"];
  }

  interface User {
    access_token?: string;
    refresh_token?: string;
    id?: string;
    email?: string;
    name?: string;
    roles?: string[];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    refreshToken?: string;
    accessTokenExpires?: number;
    id?: string;
    email?: string;
    name?: string;
    roles?: string[];
    error?: string;
  }
}

/**
 * Refresca el token de acceso y devuelve un objeto con el token de acceso actualizado, el token de refresco actualizado y la fecha de expiración del token de acceso.
 * Si ocurre un error, devuelve un objeto con el error.
 * @param token objeto con el token de acceso y el token de refresco
 * @returns objeto con el token de acceso actualizado, el token de refresco actualizado y la fecha de expiración del token de acceso
 */
async function refreshAccessToken(token: any) {
  try {
    console.log(" Intentando refrescar token de acceso...");

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
      {
        refresh_token: token.refreshToken,
      }
    );

    const refreshedTokens = response.data;

    if (response.status !== 200) {
      throw refreshedTokens;
    }

    const decoded: any = jwtDecode(refreshedTokens.access_token);

    console.log(" Token refrescado exitosamente");

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken,
      accessTokenExpires: decoded.exp * 1000,
      error: undefined,
    };
  } catch (error) {
    console.error(" Error al refrescar el token:", error);

    if (axios.isAxiosError(error)) {
      console.error("Detalles del error:", {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message,
      });
    }

    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          console.log("Intentando autenticar usuario:", credentials?.email);

          const response = await HttpClient.post<any>("/auth/login", {
            email: credentials?.email,
            password: credentials?.password,
          });

          if (response.data) {
            return {
              access_token: response.data.access_token,
              refresh_token: response.data.refresh_token,
              id: response.data.user.id.toString(),
              email: response.data.user.email,
              name: response.data.user.name,
              roles: response.data.user.roles,
            };
          }

          return null;
        } catch (error: any) {
          console.error("Error al iniciar sesión:", error);
          if (axios.isAxiosError(error) && error.response) {
            throw new Error(JSON.stringify(error.response.data));
          }
          throw new Error("Error desconocido al iniciar sesión");
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  callbacks: {
    async jwt({ token, user }) {
      // Si tenemos un usuario
      if (user) {
        const decoded: any = jwtDecode(user.access_token!);
        token.accessToken = user.access_token;
        token.refreshToken = user.refresh_token;
        token.accessTokenExpires = decoded.exp * 1000;
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.roles = user.roles;
      }

      // validacion de token de acceso , si el token de acceso no ha expirado
      if (Date.now() < (token.accessTokenExpires ?? 0)) {
        return token;
      }

      // Si el token ha expirado, intentamos refrescarlo
      return await refreshAccessToken(token);
    },
    async session({ session, token }) {
      if (token) {
        // actualizacion de la sesion con el token
        session.accessToken = token.accessToken;
        session.refreshToken = token.refreshToken;

        if (session.user) {
          session.user.id = token.id as string;
          session.user.email = token.email as string;
          session.user.name = token.name as string;
          session.user.roles = token.roles as string[];
        } else {
          session.user = {
            id: token.id as string,
            email: token.email as string,
            name: token.name as string,
            roles: token.roles as string[],
          };
        }

        // Si hay un error
        if (token.error) {
          (session as any).error = token.error;
        }
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
