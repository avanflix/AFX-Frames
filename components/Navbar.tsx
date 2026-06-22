import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [showNav, setShowNav] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const navbar = document.querySelector(`.${styles.nav}`) as HTMLElement

    const handleScroll = () => {
      if (!navbar) return

      const navbarTop = navbar.offsetTop

      if (window.scrollY >= navbarTop) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={`
    ${styles.nav}
    ${scrolled ? styles.scrolled : ''}
    ${showNav ? styles.show : styles.hide}
  `}
    >
      <div className={styles.inner}>
        <div className={styles.logo} onClick={() => router.push("/")}>
          <img
            src="/afxframes.png"
            width={220}
            height={100}
            alt="HOP"
          />
        </div>

        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={menuOpen ? styles.open : ''}></span>
          <span className={menuOpen ? styles.open : ''}></span>
          <span className={menuOpen ? styles.open : ''}></span>
        </button>

        <ul className={`${styles.links} ${menuOpen ? styles.mobileOpen : ''}`}>
          <li>
            <Link href="/" className={router.pathname === '/' ? styles.active : ''} onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/gallery" className={router.pathname === '/gallery' ? styles.active : ''} onClick={() => setMenuOpen(false)}>
              Gallery
            </Link>
          </li>
          {/* <li>
            <Link href="/join" className={styles.cta} onClick={() => setMenuOpen(false)}>
              Join Now
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  )
}
