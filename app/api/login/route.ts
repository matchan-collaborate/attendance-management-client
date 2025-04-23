import { NextRequest, NextResponse } from "next/server"

const tokenMock = "its_mocked_token123"

export async function POST(req: NextRequest) {
  return NextResponse.json({ token: tokenMock }, { status: 200 })
}
