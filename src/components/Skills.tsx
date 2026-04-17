import { site } from '../content/site'

export function Skills() {
  return (
    <section className="section section--muted skills-section" id="skills" aria-labelledby="skills-title">
      <div className="section-head">
        <h2 id="skills-title" className="section__title">
          {site.skillsTitle}
        </h2>
      </div>
      <ul className="skill-grid">
        {site.skillGroups.map((g) => (
          <li key={g.label} className="skill-card">
            <h3 className="skill-card__label">{g.label}</h3>
            <ul className="skill-card__list">
              {g.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div className="skill-tags" aria-label="ツール・計測">
        {site.skillTags.map((t) => (
          <span key={t} className="skill-tag">
            {t}
          </span>
        ))}
      </div>
    </section>
  )
}
