import { Link } from 'react-router-dom'
import { BC_CITIES, BC_SERVICES } from '../data/bcLocations'
import './Locations.css'

export default function Locations() {
    return (
        <div className="page locations-page">
            {/* ── Hero ─────────────────────────────────────────────── */}
            <section className="locations-hero section">
                <div className="container">
                    <div className="badge">🇨🇦 British Columbia</div>
                    <h1 className="section-title" style={{ marginTop: '16px', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                        Equipment Financing<br /><span style={{ color: 'var(--orange)' }}>Across All of BC</span>
                    </h1>
                    <p className="section-subtitle" style={{ maxWidth: '580px' }}>
                        From Vancouver Island to the Peace Region, EquipEASE serves every corner of British Columbia
                        with fast approvals and competitive equipment financing rates.
                    </p>
                </div>
            </section>

            {/* ── Cities Grid ──────────────────────────────────────── */}
            <section className="section" style={{ paddingTop: '0' }}>
                <div className="container">
                    <div className="section-header">
                        <div className="eyebrow">Cities We Serve</div>
                        <h2 className="section-title">Find Your City</h2>
                        <p className="section-subtitle">Select your location to see local equipment financing options and rates.</p>
                    </div>

                    {/* Group by region */}
                    {groupByRegion(BC_CITIES).map(([region, cities]) => (
                        <div key={region} className="locations-region">
                            <div className="locations-region__header">
                                <h3 className="locations-region__name">{region}</h3>
                                <div className="locations-region__line" />
                            </div>
                            <div className="locations-cities-grid">
                                {cities.map(city => (
                                    <Link key={city.slug} to={`/bc/${city.slug}`} className="location-card">
                                        <div className="location-card__icon">📍</div>
                                        <div>
                                            <div className="location-card__name">{city.name}</div>
                                            <div className="location-card__desc">{city.description}</div>
                                            <div className="location-card__industries">
                                                {city.majorIndustries.slice(0, 3).map(i => (
                                                    <span key={i}>{i}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="location-card__arrow">→</div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Services Available Province-Wide ──────────────────── */}
            <section className="section" style={{ background: 'var(--cream-alt)', borderTop: '1px solid var(--rule)' }}>
                <div className="container">
                    <div className="section-header">
                        <div className="eyebrow">Province-Wide</div>
                        <h2 className="section-title">BC Equipment Financing<br />by Service Type</h2>
                        <p className="section-subtitle">Every financing service available across British Columbia.</p>
                    </div>
                    <div className="locations-services-grid">
                        {BC_SERVICES.map(svc => (
                            <div key={svc.slug} className="card svc-card">
                                <div className="svc-card__icon">{svc.icon}</div>
                                <h3 className="svc-card__name">{svc.name}</h3>
                                <p className="svc-card__sub">Available in all BC cities</p>
                                <div className="svc-card__cities">
                                    {BC_CITIES.slice(0, 5).map(c => (
                                        <Link key={c.slug} to={`/bc/${c.slug}/${svc.slug}`} className="svc-card__city-link">
                                            {c.name}
                                        </Link>
                                    ))}
                                    <span className="svc-card__more">+{BC_CITIES.length - 5} more cities</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ──────────────────────────────────────────────── */}
            <section className="section-sm" style={{ textAlign: 'center', padding: '80px 0' }}>
                <div className="container">
                    <h2 className="section-title">Don't See Your City?</h2>
                    <p className="section-subtitle" style={{ margin: '16px auto 32px', maxWidth: '480px' }}>
                        We serve all of BC. Call us or apply online and we'll get to work on your financing right away.
                    </p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/apply" className="btn-primary" style={{ fontSize: '1.05rem', padding: '16px 40px' }}>Apply Now →</Link>
                        <a href="tel:18442503273" className="btn-outline">📞 1-844-250-EASE</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

function groupByRegion(cities) {
    const grouped = {}
    cities.forEach(city => {
        if (!grouped[city.region]) grouped[city.region] = []
        grouped[city.region].push(city)
    })
    return Object.entries(grouped)
}
