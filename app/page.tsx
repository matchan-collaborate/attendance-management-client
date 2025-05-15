import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function Home() {
  // const cookieStore = await cookies()
  // const session = cookieStore.get("laravel_session")?.value

  // if (!session) redirect("/login")
  redirect("login")
  // redirect("/mypage")
}
