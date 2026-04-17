import type { WorksResponse } from '../types/works'

const LOCAL_FALLBACK = '/data/works.json'

function loadJsonp(url: string): Promise<WorksResponse> {
  return new Promise((resolve, reject) => {
    const cb = `__pf_cb_${Date.now()}_${Math.random().toString(36).slice(2)}`
    const script = document.createElement('script')
    const timer = window.setTimeout(() => {
      cleanup()
      reject(new Error('JSONP タイムアウト'))
    }, 20000)

    const cleanup = () => {
      window.clearTimeout(timer)
      delete (window as unknown as Record<string, unknown>)[cb]
      script.remove()
    }

    ;(window as unknown as Record<string, unknown>)[cb] = (data: WorksResponse) => {
      cleanup()
      resolve(data)
    }

    script.onerror = () => {
      cleanup()
      reject(new Error('JSONP 読み込み失敗'))
    }

    const sep = url.includes('?') ? '&' : '?'
    script.src = `${url}${sep}callback=${encodeURIComponent(cb)}`
    document.body.appendChild(script)
  })
}

async function loadLocal(): Promise<WorksResponse> {
  const res = await fetch(LOCAL_FALLBACK)
  if (!res.ok) throw new Error('ローカルデータを読み込めませんでした')
  return res.json() as Promise<WorksResponse>
}

/**
 * 優先: VITE_GAS_WEBAPP_URL（Google Apps Script の Web アプリ /exec URL）
 * JSONP で取得（CORS 回避）。未設定または失敗時は public/data/works.json。
 */
export async function fetchWorks(): Promise<WorksResponse> {
  const gasUrl = import.meta.env.VITE_GAS_WEBAPP_URL?.trim()
  if (gasUrl) {
    try {
      return await loadJsonp(gasUrl)
    } catch {
      /* fall through */
    }
  }
  return loadLocal()
}
