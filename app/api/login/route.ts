import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const { email, password } = await req.json()

  // ここは自由にバリデーションしてOK（任意）
  if (email !== "qcomekukumi@gmail.com" || password !== "8888") {
    return NextResponse.json({ message: "invalid credentials" }, { status: 401 })
  }

  return NextResponse.json({ message: "ログイン成功" }, { status: 200 })
}
