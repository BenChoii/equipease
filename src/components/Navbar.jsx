import { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BC_CITIES } from '../data/bcLocations'
import './Navbar.css'

const FEATURED_CITIES = BC_CITIES.slice(0, 8)

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [locationsOpen, setLocationsOpen] = useState(false)
    const dropdownRef = useRef(null)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        const handler = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setLocationsOpen(false)
            }
        }
        document.addEventListener('mousedown', handler)
        return () => document.removeEventListener('mousedown', handler)
    }, [])

    const close = () => { setMenuOpen(false); setLocationsOpen(false) }

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

                    {/* Locations Dropdown */}
                    <div className="navbar__dropdown" ref={dropdownRef}>
                        <button
                            className={`navbar__dropdown-trigger ${locationsOpen ? 'active' : ''}`}
                            onClick={() => setLocationsOpen(o => !o)}
                        >
                            Locations <span className="navbar__chevron">{locationsOpen ? '▲' : '▾'}</span>
                        </button>
                        {locationsOpen && (
                            <div className="navbar__dropdown-menu">
                                <div className="navbar__dropdown-header">
                                    <div className="navbar__dropdown-title">British Columbia</div>
                                    <Link to="/locations" className="navbar__dropdown-all" onClick={close}>View All →</Link>
                                </div>
                                <div className="navbar__dropdown-cities">
                                    {FEATURED_CITIES.map(city => (
                                        <Link
                                            key={city.slug}
                                            to={`/bc/${city.slug}`}
                                            className="navbar__dropdown-city"
                                            onClick={close}
                                        >
                                            <span className="navbar__dropdown-city-dot">📍</span>
                                            <span>{city.name}</span>
                                            <span className="navbar__dropdown-city-region">{city.region}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={close}>About</NavLink>
                    <NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''} onClick={close}>Blog</NavLink>
                    <NavLink to="/calculator" className={({ isActive }) => isActive ? 'active navbar__free-tool' : 'navbar__free-tool'} onClick={close}>🧮 Free Tool</NavLink>
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
