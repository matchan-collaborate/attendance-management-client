import { LoginFormData } from "@/schema/userSchema"
import { apiClient } from "./axiosInstance"




const csrfUrl = "/sanctum/csrf-cookie"
const loginUrl = "/login"
const mypageUrl = "/user"

/**
 * ログインする時に実行される関数
 */
export const login = async (data: LoginFormData) => {
  // まずCSRFトークンを取得
  await apiClient.get(csrfUrl)

  try {
    // email、passwordをサーバー側に送信
    const res = await apiClient.post(loginUrl, data)
    //認証チェックして、成功時に別ページへ遷移できるよう200返す
    return res.status === 200
  } catch {
    return false
  }
}

/**
 * ユーザー情報を取得する関数
 */
export const getUser = async () => {
  // Cookieを付与して送る必要があるのか？ → withCredentials: trueをつけてるからOK
  const res = await apiClient.get(mypageUrl)
  return res.data
}
