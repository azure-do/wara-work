import { site } from '../content/site'

export function Contact() {
  return (
    <section className="section section--accent" id="contact" aria-labelledby="contact-title">
      <h2 id="contact-title" className="section__title">
        {site.contactTitle}
      </h2>
      <p className="prose prose--center">{site.contactBody}</p>
    </section>
  )
}
