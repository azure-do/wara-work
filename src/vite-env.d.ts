/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GAS_WEBAPP_URL?: string
  /** お問い合わせ API の URL（省略時は開発では /api/contact → Vite プロキシ） */
  readonly VITE_CONTACT_API_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
