/**
 * Gmail SMTP でお問い合わせメールを送信する小さな API。
 * 起動: cd contact-server && npm install && npm start
 * 環境変数: .env を参照（.env.example）
 */
import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import nodemailer from 'nodemailer'

const PORT = Number(process.env.PORT) || 8787
const HOST = process.env.HOST || '127.0.0.1'

const app = express()
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
)
app.use(express.json({ limit: '48kb' }))

function isNonEmptyString(v, max) {
  return typeof v === 'string' && v.trim().length > 0 && v.length <= max
}

function isEmail(v) {
  if (typeof v !== 'string' || v.length > 254) return false
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

app.post('/api/contact', async (req, res) => {
  try {
    if (req.body?.website) {
      return res.status(400).json({ ok: false, error: '送信に失敗しました。' })
    }

    const name = typeof req.body?.name === 'string' ? req.body.name.trim() : ''
    const email = typeof req.body?.email === 'string' ? req.body.email.trim() : ''
    const message = typeof req.body?.message === 'string' ? req.body.message.trim() : ''

    if (!isNonEmptyString(name, 120)) {
      return res.status(400).json({ ok: false, error: 'お名前を正しく入力してください。' })
    }
    if (!isEmail(email)) {
      return res.status(400).json({ ok: false, error: 'メールアドレスの形式が正しくありません。' })
    }
    if (!isNonEmptyString(message, 8000) || message.length < 10) {
      return res.status(400).json({
        ok: false,
        error: 'お問い合わせ内容は10文字以上で入力してください。',
      })
    }

    const user = process.env.GMAIL_USER
    const pass = process.env.GMAIL_APP_PASSWORD
    const to = process.env.CONTACT_TO_EMAIL || user

    if (!user || !pass || !to) {
      console.error('Missing GMAIL_USER, GMAIL_APP_PASSWORD, or CONTACT_TO_EMAIL')
      return res.status(500).json({ ok: false, error: 'サーバー設定が完了していません。' })
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: { user, pass },
    })

    const subject = `[Portfolio] ${name} さんよりお問い合わせ`
    const text = `お名前: ${name}\nメール: ${email}\n\n---\n${message}\n`
    const html = `<p><strong>お名前:</strong> ${escapeHtml(name)}</p>
<p><strong>メール:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
<hr />
<pre style="white-space:pre-wrap;font-family:inherit;">${escapeHtml(message)}</pre>`

    await transporter.sendMail({
      from: `"Portfolio" <${user}>`,
      to,
      replyTo: email,
      subject,
      text,
      html,
    })

    return res.json({ ok: true })
  } catch (e) {
    console.error(e)
    return res.status(500).json({ ok: false, error: '送信に失敗しました。時間をおいて再度お試しください。' })
  }
})

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

app.listen(PORT, HOST, () => {
  console.log(`Contact API: http://${HOST}:${PORT}`)
})
