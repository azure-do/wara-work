import { site } from '../content/site'

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__visual">
        <img
          className="hero__avatar"
          src="/avatar.png"
          width={160}
          height={160}
          alt="笑笑のプロフィール画像"
        />
        <div className="hero__blob" aria-hidden />
      </div>
      <div className="hero__text">
        <p className="hero__eyebrow">{site.role}</p>
        <h1 id="hero-title">{site.name}</h1>
        <p className="hero__lead">{site.heroLead}</p>
      </div>
    </section>
  )
}
