// あとでサーバーコンポーネントに戻す

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function Home() {
  const cookieStore = await cookies()
  const session = cookieStore.get("laravel_session")?.value

  console.log(session)

  if (!session) redirect("/login")

  redirect("/mypage")
}
