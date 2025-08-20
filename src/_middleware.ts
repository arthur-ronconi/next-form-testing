import { NextRequest, NextResponse } from "next/server";
import { authenticatedUser } from "./app/utils/amplify-server-utils";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const user = await authenticatedUser({ request, response });

  const pathname = request.nextUrl.pathname;

  const isInside = pathname.startsWith("/in");
  const isOnAdminArea = pathname.startsWith("/in/admin");

  if (isInside) {
    if (!user) {
      return NextResponse.redirect(new URL("/signin", request.nextUrl));
    }
    if (isOnAdminArea && !user.isAdmin) {
      return NextResponse.redirect(new URL("/in", request.nextUrl));
    }
    return response;
  } else if (user) {
    return NextResponse.redirect(new URL("/in", request.nextUrl));
  }
}

export const config = {};
