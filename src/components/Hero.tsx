import { site } from '../content/site'
import lancerProIcon from '../assets/lancer_pro.svg'
import crowdworksProIcon from '../assets/crowdworks_pro.png'

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__visual">
        <img
          className="hero__avatar"
          src="/avatar.png"
          width={180}
          height={180}
          alt="笑笑のプロフィール画像"
        />
        <div className="hero__blob" aria-hidden />
      </div>
      <div className="hero__text">
        <p className="hero__eyebrow">{site.role}</p>
        <div className="hero__title-row">
          <h1 id="hero-title">{site.name}</h1>
          <div className="hero__rank-icons" aria-label="クラウドソーシング認定ステータス">
            <img className="hero__certified-icon" src={lancerProIcon} alt="Lancers認定ランサー" />
            <img className="hero__certified-icon" src={crowdworksProIcon} alt="CrowdWorks PRO認定" />
          </div>
        </div>
        <p className="hero__lead">{site.heroLead}</p>
      </div>
    </section>
  )
}
