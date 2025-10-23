import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define protected routes that require authentication
const PROTECTED_ROUTES = [
    "/",
    "/patient", 
    "/complaints", 
    "/discharged-patients", 
    "/create-pdf", 
    "/messages", 
    "/nursing-assessment", 
    "/plan-of-care", 
    "/patient-emergency", 
    "/field-supervision", 
    "/follow-up-field-supervision", 
    "/fax-to-doctor", 
    "/home-health-quality-measure", 
    "/discharge-transfer", 
    "/patient-contract-form", 
    "/my-dashboard",
];

// Define public routes that don't require authentication
const PUBLIC_ROUTES = [
    "/login",
    "/recovery",
    "/change-password",
    "/reset-password",
    "/2fa",
    "/logout",
    "/forgot-password",
    "/public"
];

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Allow static assets and API routes
    if (pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        pathname.startsWith("/favicon.ico")) {
        return NextResponse.next();
    }

    // Check if the current path is a protected route
    const isProtectedRoute = PROTECTED_ROUTES.some(route =>
        pathname === route || pathname.startsWith(route + "/")
    );

    // Check if the current path is a public route
    const isPublicRoute = PUBLIC_ROUTES.some(route =>
        pathname === route || pathname.startsWith(route + "/")
    );

    // If it's a public route, allow access
    if (isPublicRoute) {
        return NextResponse.next();
    }

    // If it's a protected route, check authentication
    if (isProtectedRoute) {
        const demoUser = request.cookies.get("demoUser");
        const is2faComplete = request.cookies.get("is2faComplete");

        // Redirect to login if not authenticated
        // Fix: Properly check if the 2FA cookie value is "true"
        if (!demoUser || !is2faComplete || is2faComplete.value !== "true") {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }

    // Allow access to any other routes (fallback)
    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};