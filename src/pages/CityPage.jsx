import { useParams, Link } from 'react-router-dom'
import { BC_CITIES, BC_SERVICES } from '../data/bcLocations'
import './CityPage.css'

const TRUST_POINTS = [
    '✓ 24-hour approval decisions',
    '✓ All credit profiles welcome',
    '✓ No obligation to apply',
    '✓ Competitive BC rates',
    '✓ Local advisor assigned to you',
]

const PROCESS_STEPS = [
    { num: '01', title: 'Apply Online', desc: 'Complete our 5-minute application from anywhere in BC — no faxing, no branch visits.' },
    { num: '02', title: 'Get Approved', desc: 'An EquipEASE advisor reviews your file and delivers a decision within 24 hours.' },
    { num: '03', title: 'Receive Funding', desc: 'Once approved, your vendor gets paid and you get your equipment. Simple.' },
]

export default function CityPage() {
    const { city } = useParams()
    const cityData = BC_CITIES.find(c => c.slug === city)

    if (!cityData) {
        return (
            <div className="page city-page">
                <div className="container" style={{ paddingTop: '160px', textAlign: 'center' }}>
                    <h1>Location Not Found</h1>
                    <p style={{ color: 'var(--text-muted)', marginTop: '16px' }}>We serve all of British Columbia.</p>
                    <Link to="/locations" className="btn-primary" style={{ display: 'inline-flex', marginTop: '32px' }}>
                        View All Locations →
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="page city-page">
            {/* ── City Hero ─────────────────────────────────────────── */}
            <section className="city-hero">
                <div className="city-hero__bg" aria-hidden="true">
                    <div className="city-hero__orb city-hero__orb--1" />
                    <div className="city-hero__orb city-hero__orb--2" />
                    <div className="city-hero__grid" />
                </div>
                <div className="container city-hero__inner">
                    <div className="city-hero__breadcrumb">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <Link to="/locations">British Columbia</Link>
                        <span>/</span>
                        <span>{cityData.name}</span>
                    </div>
                    <div className="badge city-hero__badge">📍 {cityData.region}, BC</div>
                    <h1 className="city-hero__headline">{cityData.heroLine}</h1>
                    <p className="city-hero__sub">
                        {cityData.bodyText}
                    </p>
                    <div className="city-hero__trust">
                        {TRUST_POINTS.map(p => (
                            <span key={p}>{p}</span>
                        ))}
                    </div>
                    <div className="city-hero__ctas">
                        <Link to="/apply" className="btn-primary city-hero__btn">Apply in {cityData.name} →</Link>
                        <a href="tel:18442503273" className="btn-outline">📞 1-844-250-EASE</a>
                    </div>
                </div>
            </section>

            {/* ── Services in This City ─────────────────────────────── */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <div className="eyebrow">Available in {cityData.name}</div>
                        <h2 className="section-title">Equipment Financing Services<br />Serving {cityData.name} & {cityData.region}</h2>
                        <p className="section-subtitle">We finance every type of equipment for {cityData.name} businesses — fast approvals, flexible terms, no bank bureaucracy.</p>
                    </div>
                    <div className="city-services-grid">
                        {BC_SERVICES.map(service => {
                            const isHighlighted = cityData.majorIndustries.some(ind =>
                                service.name.toLowerCase().includes(ind.toLowerCase().split(' ')[0])
                            )
                            return (
                                <Link
                                    key={service.slug}
                                    to={`/bc/${cityData.slug}/${service.slug}`}
                                    className={`city-service-card ${isHighlighted ? 'city-service-card--featured' : ''}`}
                                >
                                    <div className="city-service-card__icon">{service.icon}</div>
                                    <h3 className="city-service-card__name">{service.name}</h3>
                                    <p className="city-service-card__location">Serving {cityData.name}, {cityData.region}</p>
                                    {isHighlighted && <div className="city-service-card__badge">Popular in {cityData.name}</div>}
                                    <span className="city-service-card__arrow">→</span>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ── Why EquipEASE in This City ────────────────────────── */}
            <section className="section city-why">
                <div className="container city-why__inner">
                    <div>
                        <div className="eyebrow">Why {cityData.name} Businesses Choose Us</div>
                        <h2 className="section-title">Local Knowledge.<br />National Reach.</h2>
                        <div className="orange-bar" />
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.75', marginTop: '8px', maxWidth: '460px' }}>
                            EquipEASE serves {cityData.name} operators with the same speed and dedication we bring to every
                            corner of British Columbia. Our advisors understand the {cityData.region} business landscape —
                            from seasonal cash flows to regional equipment demands.
                        </p>
                        <ul className="city-why__list">
                            <li><span>✅</span> Dedicated advisor — not a call centre</li>
                            <li><span>✅</span> Decisions in 24 hours or less</li>
                            <li><span>✅</span> New and used equipment from any {cityData.name} vendor</li>
                            <li><span>✅</span> Flexible terms for {cityData.region} business cycles</li>
                            <li><span>✅</span> All credit profiles considered</li>
                        </ul>
                        <Link to="/apply" className="btn-primary" style={{ marginTop: '32px', display: 'inline-flex' }}>
                            Apply from {cityData.name} →
                        </Link>
                    </div>
                    <div className="city-why__stats">
                        {[
                            { v: '$50M+', l: 'Financed in BC' },
                            { v: '24hr', l: 'Avg. Approval Time' },
                            { v: '8+', l: 'Industries Served' },
                            { v: '100%', l: 'Canadian-Owned' },
                        ].map(s => (
                            <div key={s.l} className="city-stat">
                                <div className="city-stat__value">{s.v}</div>
                                <div className="city-stat__label">{s.l}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Process ───────────────────────────────────────────── */}
            <section className="section city-process">
                <div className="container">
                    <div className="section-header">
                        <div className="eyebrow">How It Works</div>
                        <h2 className="section-title">From {cityData.name} to Approved<br />in 3 Simple Steps</h2>
                    </div>
                    <div className="city-process__steps">
                        {PROCESS_STEPS.map((s, i) => (
                            <div key={i} className="city-process__step">
                                <div className="city-process__num">{s.num}</div>
                                <h3 className="city-process__title">{s.title}</h3>
                                <p className="city-process__desc">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Nearby Locations ──────────────────────────────────── */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <div className="eyebrow">Also Serving</div>
                        <h2 className="section-title">Nearby BC Communities</h2>
                        <p className="section-subtitle">EquipEASE serves every corner of British Columbia.</p>
                    </div>
                    <div className="nearby-cities">
                        {BC_CITIES
                            .filter(c => c.slug !== cityData.slug)
                            .slice(0, 8)
                            .map(c => (
                                <Link key={c.slug} to={`/bc/${c.slug}`} className="nearby-city-chip">
                                    📍 {c.name}
                                </Link>
                            ))}
                        <Link to="/locations" className="nearby-city-chip nearby-city-chip--all">
                            View All BC Locations →
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── Bottom CTA ────────────────────────────────────────── */}
            <section className="city-cta section-sm">
                <div className="container city-cta__inner">
                    <div className="city-cta__orb" />
                    <h2 className="section-title">Ready to Finance Equipment in {cityData.name}?</h2>
                    <p className="section-subtitle" style={{ margin: '16px auto 32px', maxWidth: '480px' }}>
                        Apply in 5 minutes. Approval decision within 24 hours. No obligation.
                    </p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/apply" className="btn-primary" style={{ fontSize: '1.05rem', padding: '16px 40px' }}>
                            Get Approved Today →
                        </Link>
                        <a href="tel:18442503273" className="btn-outline">📞 1-844-250-EASE</a>
                    </div>
                </div>
            </section>
        </div>
    )
}
