# 笑笑 — ポートフォリオ（React + Vite）

## 起動

```bash
cd portfolio-web
npm install
npm run dev
```

起動後、表示 URL はコンソールに出ます。

## VPN（stealth / proxy）利用時の注意

VPN のモードによっては `localhost` へのアクセスが **プロキシ経由**になり、`ERR_CONNECTION_REFUSED` になることがあります。

- まずは `http://127.0.0.1:5173/`（またはコンソールに出たポート）で開いてください  
- それでもダメな場合は OS/ブラウザの proxy 設定で **localhost / 127.0.0.1 を除外（bypass）**してください

このプロジェクトは `vite --host 127.0.0.1` で起動するよう設定済みです。

## スプレッドシート連携（GAS）

- `gas/Code.gs` を Apps Script に貼り付けて Web アプリとしてデプロイします
- 発行された `/exec` URL を `.env` に設定します

```bash
cp .env.example .env
# VITE_GAS_WEBAPP_URL=.../exec
```

未設定または取得失敗時は `public/data/works.json` を表示します。
