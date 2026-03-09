import { Link } from 'react-router-dom'
import './Footer.css'

const LINKS = {
    Company: [
        { label: 'About Us', to: '/about' },
        { label: 'Why EquipEASE', to: '/why-us' },
        { label: 'Blog', to: '/blog' },
    ],
    Services: [
        { label: 'Industries', to: '/industries' },
        { label: 'Apply Now', to: '/apply' },
        { label: 'Extra Coverages', to: '/apply' },
    ],
    Contact: [
        { label: '1-844-250-EASE', href: 'tel:18442503273' },
        { label: 'info@equipease.ca', href: 'mailto:info@equipease.ca' },
        { label: 'Mon–Fri 9am–5pm MST', href: null },
    ],
}

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <span>Equip</span><span className="orange">EASE</span>
                            <span className="footer__logo-sub"> Lease Co.</span>
                        </div>
                        <p>Equipment leasing &amp; financing for Canadian businesses. You find it. We finance it.</p>
                        <div className="footer__socials">
                            <a href="https://facebook.com/equipease" target="_blank" rel="noreferrer" aria-label="Facebook">
                                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                            </a>
                            <a href="https://instagram.com/equipease" target="_blank" rel="noreferrer" aria-label="Instagram">
                                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
                            </a>
                        </div>
                    </div>

                    {Object.entries(LINKS).map(([title, items]) => (
                        <div key={title} className="footer__col">
                            <h4>{title}</h4>
                            <ul>
                                {items.map(item => (
                                    <li key={item.label}>
                                        {item.to ? (
                                            <Link to={item.to}>{item.label}</Link>
                                        ) : item.href ? (
                                            <a href={item.href}>{item.label}</a>
                                        ) : (
                                            <span>{item.label}</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="footer__bottom">
                    <p>© {new Date().getFullYear()} EquipEASE Lease Co. All rights reserved. Canadian-owned &amp; operated.</p>
                    <div className="footer__bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
