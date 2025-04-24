import path from "path"
import React from "react"
import fs from "fs"

const page = () => {
  // 今の作業ディレクトリの絶対パスを作成
  // path.join()で環境差やバグを解消
  const imagePath = path.join(process.cwd(), "public", "tomic.jpg")

  // publicの画像データをbase64に変換する
  const base64Data = fs.readFileSync(imagePath, { encoding: "base64" })

  console.log(base64Data)
  return <div>page</div>
}

export default page
