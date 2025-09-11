import { NextResponse, NextRequest } from "next/server";
import { cookies } from 'next/headers';
import { decrrypt } from "./app/lib/sessions";

export default async function middleware(req: NextRequest) {
const protectedRoutes = ['/Dashbord/:path*', '/Profile/:path*']
const currentPath = req.nextUrl.pathname
const isProtected = protectedRoutes.includes(currentPath)
if(isProtected){
    const cookie = (await cookies()).get("session")?.value
    const session = await decrrypt(cookie)
     if(!session?.userId){
      return NextResponse.redirect(new URL("/Login",req.nextUrl))
      
     }
}

  return NextResponse.next();
}

export const config = {
  matcher: ['/Dashbord/:path*', '/Profile/:path*']
};