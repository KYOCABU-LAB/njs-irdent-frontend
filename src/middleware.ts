import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server"; // Importar NextResponse

export default withAuth(
  async function middleware(req) {
    console.log("🔒 Middleware ejecutado para:", req.nextUrl.pathname);

    const token = req.nextauth.token;

    if (req.nextUrl.pathname.startsWith("/auth") && token) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl;

        if (pathname.startsWith("/auth")) {
          return true;
        }

        if (pathname === "/") {
          return true;
        }

        return !!token;
      },
    },
  }
);

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (authentication API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!api/auth|_next/static|_next/image|favicon.ico|public).*)",
  ],
};
