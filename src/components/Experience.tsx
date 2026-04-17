import { site } from '../content/site'

export function Experience() {
  return (
    <section className="section experience" id="experience" aria-labelledby="exp-title">
      <div className="section-head">
        <h2 id="exp-title" className="section__title">
          {site.experienceTitle}
        </h2>
        <p className="section__subtitle">{site.experienceSubtitle}</p>
      </div>
      <ol className="timeline">
        {site.experience.map((item) => (
          <li key={item.id} className="timeline__item">
            <div className="timeline__card">
              <div className="timeline__period">{item.period}</div>
              <div className="timeline__org">{item.org}</div>
              <div className="timeline__role">{item.role}</div>
              <p className="timeline__summary">{item.summary}</p>
              <ul className="timeline__highlights">
                {item.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
