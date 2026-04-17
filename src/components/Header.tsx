export function Header() {
  return (
    <header className="site-header">
      <a className="logo" href="#top">
        笑笑
      </a>
      <nav className="nav" aria-label="ページ内ナビゲーション">
        <a href="#about">{siteNav.about}</a>
        <a href="#skills">{siteNav.skills}</a>
        <a href="#experience">{siteNav.experience}</a>
        <a href="#works">{siteNav.works}</a>
        <a href="#contact">{siteNav.contact}</a>
      </nav>
    </header>
  )
}

const siteNav = {
  about: '自己紹介',
  skills: 'スキル',
  experience: '職歴',
  works: '実績',
  contact: '連絡',
} as const
