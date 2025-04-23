import { NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"

// 今の作業ディレクトリの絶対パスを作成
// path.join()で環境差やバグを解消
const imagePath = path.join(process.cwd(), "public", "tomic.jpg")

// publicの画像データをbase64に変換する
const base64Data = fs.readFileSync(imagePath, { encoding: "base64" })

const mockUserData = {
  id: 12345,
  name: "トミック",
  name_kana: "とみっく",
  email: "tomicishandsome@example.com",
  profile_picture: base64Data,
  created_at: "2024-10-12T10:15:00Z",
  updated_at: "2025-04-22T14:30:00Z",
}

const tokenMock = "its_mocked_token123"

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("Authorization")
  const token = authHeader?.split(" ")[1]

  if (!authHeader || token !== tokenMock) {
    return NextResponse.json({ message: "認証エラー" }, { status: 401 })
  }

  return NextResponse.json(mockUserData)
}
