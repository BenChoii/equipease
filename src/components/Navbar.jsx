import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const close = () => setMenuOpen(false)

    return (
        <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="container navbar__inner">
                <Link to="/" className="navbar__logo" onClick={close}>
                    <span className="navbar__logo-equip">Equip</span>
                    <span className="navbar__logo-ease">EASE</span>
                    <span className="navbar__logo-badge">Lease Co.</span>
                </Link>

                <nav className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
                    <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={close}>Home</NavLink>
                    <NavLink to="/why-us" className={({ isActive }) => isActive ? 'active' : ''} onClick={close}>Why Us</NavLink>
                    <NavLink to="/industries" className={({ isActive }) => isActive ? 'active' : ''} onClick={close}>Industries</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={close}>About</NavLink>
                    <NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''} onClick={close}>Blog</NavLink>
                    <a href="tel:18442503273" className="navbar__phone" onClick={close}>1-844-250-EASE</a>
                    <Link to="/apply" className="btn-primary navbar__cta" onClick={close}>Apply Now →</Link>
                </nav>

                <button
                    className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
                    onClick={() => setMenuOpen(o => !o)}
                    aria-label="Toggle menu"
                >
                    <span /><span /><span />
                </button>
            </div>
        </header>
    )
}
