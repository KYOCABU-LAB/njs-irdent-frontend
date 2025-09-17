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
    } & DefaultSession["user"];
  }

  interface User {
    access_token?: string;
    refresh_token?: string;
    id?: string;
    email?: string;
    name?: string;
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

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken,
      accessTokenExpires: decoded.exp * 1000,
      error: undefined,
    };
  } catch (error) {
    console.error("Error al refrescar el token:", error);
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
          const response = await HttpClient.post<User>("/auth/login", {
            email: credentials?.email,
            password: credentials?.password,
          });

          if (response.data) {
            return response.data;
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
        } else {
          session.user = {
            id: token.id as string,
            email: token.email as string,
            name: token.name as string,
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
