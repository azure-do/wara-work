# お問い合わせ API（Gmail SMTP）

フロントからは `/api/contact` に POST します。開発中は Vite がこのサーバーへプロキシします。

## セットアップ

1. Google アカウントで **2 段階認証** を有効にする  
2. **アプリ パスワード** を発行（通常の Gmail ログインパスワードでは動きません）  
3. このフォルダで:

```bash
cd contact-server
npm install
copy .env.example .env
# .env を編集
npm start
```

別ターミナルで `npm run dev`（プロジェクトルート）を実行すると、フォームから送信できます。

## 本番

静的ホスティングだけでは SMTP を使えないため、この API を **Railway / Render / Fly.io** 等にデプロイし、フロントのビルド時に `VITE_CONTACT_API_URL` にそのベース URL + `/api/contact` を指定してください。
