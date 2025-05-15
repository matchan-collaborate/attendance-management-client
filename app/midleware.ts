// import { NextRequest, NextResponse } from "next/server"

// export function middleware(req: NextRequest) {
//   // Laravelにlaravel_sessionというCookieを返してもらい、取得
//   const session = req.cookies.get("laravel_session")?.value

//   if (!session) {
//     req.nextUrl.pathname = "/login"
//     return NextResponse.redirect(req.nextUrl)
//   }

//   return NextResponse.next()
// }

// // (authenticated)配下のページは全て認証が必要とする
// export const config = {
//   matcher: ["/(authenticated)/:path*"],
// }
