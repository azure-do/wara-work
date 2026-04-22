import { useState } from 'react'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <a className="logo" href="#top">
        笑笑
      </a>
      <button
        type="button"
        className="nav-toggle"
        aria-label="メニューを開閉"
        aria-expanded={menuOpen}
        aria-controls="site-nav"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span className="nav-toggle__bar" />
        <span className="nav-toggle__bar" />
        <span className="nav-toggle__bar" />
      </button>
      <nav
        id="site-nav"
        className={`nav${menuOpen ? ' is-open' : ''}`}
        aria-label="ページ内ナビゲーション"
      >
        <a href="#about" onClick={closeMenu}>
          {siteNav.about}
        </a>
        <a href="#skills" onClick={closeMenu}>
          {siteNav.skills}
        </a>
        <a href="#experience" onClick={closeMenu}>
          {siteNav.experience}
        </a>
        <a href="#works" onClick={closeMenu}>
          {siteNav.works}
        </a>
        <a href="#contact" onClick={closeMenu}>
          {siteNav.contact}
        </a>
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
