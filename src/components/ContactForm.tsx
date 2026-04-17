import { useState, type FormEvent } from 'react'
import { submitContact } from '../api/contactClient'

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (honeypot) return
    setStatus('loading')
    setErrorMsg('')
    const result = await submitContact({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      website: honeypot,
    })
    if (result.ok) {
      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } else {
      setStatus('error')
      setErrorMsg(result.error)
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="contact-name">
          お名前
        </label>
        <input
          id="contact-name"
          className="contact-form__input"
          type="text"
          name="name"
          autoComplete="name"
          required
          maxLength={120}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="山田 太郎"
        />
      </div>
      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="contact-email">
          メールアドレス
        </label>
        <input
          id="contact-email"
          className="contact-form__input"
          type="email"
          name="email"
          autoComplete="email"
          required
          inputMode="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@email.com"
        />
      </div>
      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="contact-message">
          お問い合わせ内容
        </label>
        <textarea
          id="contact-message"
          className="contact-form__textarea"
          name="message"
          required
          rows={6}
          minLength={10}
          maxLength={8000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="内容をご記入ください（10文字以上）"
        />
      </div>
      {/* honeypot */}
      <div className="contact-form__hp" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>
      {status === 'error' && (
        <p className="contact-form__feedback contact-form__feedback--error" role="alert">
          {errorMsg}
        </p>
      )}
      {status === 'success' && (
        <p className="contact-form__feedback contact-form__feedback--success" role="status">
          送信しました。ご連絡ありがとうございます。
        </p>
      )}
      <button type="submit" className="contact-form__submit" disabled={status === 'loading'}>
        {status === 'loading' ? '送信中…' : '送信する'}
      </button>
    </form>
  )
}
