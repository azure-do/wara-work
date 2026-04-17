import { site } from '../content/site'
import { ContactForm } from './ContactForm'

export function Contact() {
  return (
    <section className="section section--contact" id="contact" aria-labelledby="contact-title">
      <div className="section-head section-head--center">
        <h2 id="contact-title" className="section__title">
          {site.contactTitle}
        </h2>
        <p className="section__subtitle section__subtitle--center">{site.contactIntro}</p>
      </div>
      <div className="contact-panel">
        <ContactForm />
      </div>
    </section>
  )
}
