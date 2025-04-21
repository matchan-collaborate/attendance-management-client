//クッキー認証実装前に一旦localStorageに保存
// 後でミドルウェアで
"use client"

import { useEffect, useState } from "react"

const userUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user`

export default function useAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      setUser(null)
      setLoading(false)
    }

    fetch(userUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((jsonData) => setUser(jsonData))
      .catch(() => setUser(null))
      .finally(() => setLoading(false))
  }, [])

  return { user, loading }
}
