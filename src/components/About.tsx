import { site } from '../content/site'

export function About() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <div className="section-head">
        <h2 id="about-title" className="section__title">
          {site.aboutTitle}
        </h2>
      </div>
      <div className="prose">
        {site.aboutBody.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  )
}
