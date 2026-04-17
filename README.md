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

## お問い合わせフォーム（Gmail SMTP）

ブラウザから Gmail に直接 SMTP 接続はできないため、小さな API サーバー（`contact-server/`）がメール送信を行います。

1. `contact-server/.env.example` を `contact-server/.env` にコピーし、`GMAIL_USER` と **アプリ パスワード**（通常パスワードでは不可）、必要なら `CONTACT_TO_EMAIL` を設定する  
2. 別ターミナルで:

```bash
cd contact-server
npm install
npm start
```

3. プロジェクトルートで `npm run dev` を実行すると、Vite が `http://127.0.0.1:8787` の API へ `/api/contact` をプロキシします。

本番では `contact-server` を Railway / Render 等にデプロイし、ビルド時に `VITE_CONTACT_API_URL` に `https://（デプロイ先）/api/contact` を指定してください。詳細は `contact-server/README.md` を参照。
