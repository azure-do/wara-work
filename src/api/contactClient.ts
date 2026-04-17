export type ContactPayload = {
  name: string
  email: string
  message: string
  /** スパム対策（空のまま） */
  website?: string
}

export type ContactResult =
  | { ok: true }
  | { ok: false; error: string }

function getEndpoint(): string {
  const base = import.meta.env.VITE_CONTACT_API_URL?.trim()
  if (base) return base.replace(/\/$/, '')
  return '/api/contact'
}

export async function submitContact(payload: ContactPayload): Promise<ContactResult> {
  const url = getEndpoint()
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  let data: { ok?: boolean; error?: string } = {}
  try {
    data = await res.json()
  } catch {
    /* ignore */
  }

  if (!res.ok || !data.ok) {
    return { ok: false, error: data.error ?? '送信に失敗しました。' }
  }
  return { ok: true }
}
