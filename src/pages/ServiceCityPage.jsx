import { useParams, Link } from 'react-router-dom'
import { BC_CITIES, BC_SERVICES } from '../data/bcLocations'
import './CityPage.css'
import './ServiceCityPage.css'

export default function ServiceCityPage() {
    const { city, service } = useParams()
    const cityData = BC_CITIES.find(c => c.slug === city)
    const serviceData = BC_SERVICES.find(s => s.slug === service)

    if (!cityData || !serviceData) {
        return (
            <div className="page" style={{ paddingTop: '160px', textAlign: 'center' }}>
                <div className="container">
                    <h1>Page Not Found</h1>
                    <Link to="/locations" className="btn-primary" style={{ display: 'inline-flex', marginTop: '32px' }}>Browse All Locations →</Link>
                </div>
            </div>
        )
    }

    const serviceShort = serviceData.name.replace(' Financing', '').replace(' Leasing', '')

    return (
        <div className="page service-city-page">
            {/* ── Hero ─────────────────────────────────────────────── */}
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
                        <Link to="/locations">BC Locations</Link>
                        <span>/</span>
                        <Link to={`/bc/${cityData.slug}`}>{cityData.name}</Link>
                        <span>/</span>
                        <span>{serviceData.name}</span>
                    </div>
                    <div className="badge">{serviceData.icon} {cityData.name}, BC</div>
                    <h1 className="city-hero__headline" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                        {serviceData.name} in {cityData.name}, BC
                    </h1>
                    <p className="city-hero__sub">
                        Fast, flexible {serviceShort.toLowerCase()} financing for {cityData.name} businesses.
                        Apply online today — approval decision within 24 hours, no bank bureaucracy.
                    </p>
                    <div className="city-hero__ctas">
                        <Link to="/apply" className="btn-primary">Apply Now →</Link>
                        <a href="tel:18442503273" className="btn-outline">📞 1-844-250-EASE</a>
                    </div>
                </div>
            </section>

            {/* ── Service Detail ────────────────────────────────────── */}
            <section className="section">
                <div className="container scp-body">
                    <div className="scp-main">
                        <h2 className="section-title" style={{ fontSize: '2rem' }}>
                            {serviceData.icon} {serviceData.name}<br />
                            <span style={{ color: 'var(--orange)' }}>in {cityData.name}, {cityData.region}</span>
                        </h2>
                        <div className="orange-bar" />
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.75', marginTop: '16px' }}>
                            EquipEASE provides {serviceShort.toLowerCase()} financing to businesses throughout {cityData.name} and
                            the broader {cityData.region} region. Whether you need new equipment from a local vendor or are
                            sourcing used machinery from elsewhere in Canada, we can structure a competitive lease or loan
                            that fits your {cityData.name} business.
                        </p>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.75', marginTop: '16px' }}>
                            Our application takes 5 minutes. Our team reviews your file the same day and delivers a decision
                            within 24 hours — keeping your {cityData.name} operation moving without delay.
                        </p>

                        <h3 style={{ fontWeight: '700', marginTop: '40px', marginBottom: '20px' }}>
                            What We Finance in {cityData.name}
                        </h3>
                        <ul className="scp-features">
                            {getServiceItems(service).map(item => (
                                <li key={item}><span className="check">✓</span>{item}</li>
                            ))}
                        </ul>

                        <div style={{ marginTop: '40px' }}>
                            <Link to="/apply" className="btn-primary" style={{ fontSize: '1.05rem' }}>
                                Apply for {serviceShort} Financing in {cityData.name} →
                            </Link>
                        </div>
                    </div>

                    <aside className="scp-aside">
                        <div className="card scp-aside__card">
                            <h3>📊 Quick Facts</h3>
                            <div className="scp-facts">
                                <div className="scp-fact"><span>City</span><strong>{cityData.name}</strong></div>
                                <div className="scp-fact"><span>Region</span><strong>{cityData.region}</strong></div>
                                <div className="scp-fact"><span>Approval</span><strong>Within 24 hrs</strong></div>
                                <div className="scp-fact"><span>Credit</span><strong>All profiles</strong></div>
                            </div>
                        </div>
                        <div className="card scp-aside__card">
                            <h3>📞 Speak to an Advisor</h3>
                            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '8px', lineHeight: '1.6' }}>
                                Get a same-day quote from a real equipment financing expert.
                            </p>
                            <a href="tel:18442503273" className="btn-primary" style={{ display: 'block', textAlign: 'center', marginTop: '16px' }}>
                                Call 1-844-250-EASE
                            </a>
                        </div>
                        <div className="card scp-aside__card">
                            <h3>🗺️ Other Services in {cityData.name}</h3>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px' }}>
                                {BC_SERVICES.filter(s => s.slug !== service).map(s => (
                                    <li key={s.slug}>
                                        <Link to={`/bc/${cityData.slug}/${s.slug}`} style={{ fontSize: '0.85rem', color: 'var(--text-muted)', transition: 'color 0.2s' }}
                                            onMouseOver={e => e.target.style.color = 'var(--orange)'}
                                            onMouseOut={e => e.target.style.color = 'var(--text-muted)'}
                                        >
                                            {s.icon} {s.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </section>

            {/* ── Other BC Cities ───────────────────────────────────── */}
            <section className="section" style={{ background: 'var(--cream-alt)', borderTop: '1px solid var(--rule)' }}>
                <div className="container">
                    <div className="eyebrow">{serviceData.name} Across BC</div>
                    <h2 className="section-title" style={{ marginTop: '12px', marginBottom: '32px' }}>
                        Serving All of British Columbia
                    </h2>
                    <div className="nearby-cities">
                        {BC_CITIES.filter(c => c.slug !== cityData.slug).map(c => (
                            <Link key={c.slug} to={`/bc/${c.slug}/${service}`} className="nearby-city-chip">
                                📍 {c.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

function getServiceItems(serviceSlug) {
    const items = {
        'construction-equipment-financing': [
            'Excavators, dozers & graders', 'Cranes, lifts & hoists',
            'Concrete pumps & mixers', 'Skid steers & compact loaders',
            'Paving & compaction equipment', 'Site trailers & temporary structures',
        ],
        'truck-financing': [
            'Semi-trucks (day cab & sleeper)', 'Flatbed & dry van trailers',
            'Refrigerated & temperature-controlled units', 'Dump trucks & vocational vehicles',
            'Tanker trucks & liquid haulers', 'Pickup trucks & service vans',
        ],
        'agriculture-equipment-financing': [
            'Combines & harvesters', 'Tractors (all sizes)',
            'Sprayers & fertilizer applicators', 'Grain handling & storage equipment',
            'Irrigation systems', 'Precision agriculture technology',
        ],
        'medical-dental-equipment-financing': [
            'Dental chairs & delivery systems', 'Panoramic X-ray & imaging',
            'Intraoral scanners & CAD/CAM', 'Sterilization & autoclave equipment',
            'Physiotherapy machines', 'Surgical & diagnostic instruments',
        ],
        'logging-forestry-equipment-financing': [
            'Harvesters & feller bunchers', 'Forwarders & skidders',
            'Log loaders & processors', 'Chippers & grinders',
            'Forestry transport trailers', 'Fire suppression equipment',
        ],
        'oil-gas-equipment-financing': [
            'Drilling rigs & mast systems', 'Pump jacks & rod pumps',
            'Vacuum & hydrovac trucks', 'Compressors & generators',
            'Oilfield storage tanks', 'Pipeline inspection equipment',
        ],
        'manufacturing-equipment-financing': [
            'CNC machining centres & lathes', 'Welding & plasma cutting systems',
            'Industrial presses & stamping', 'Packaging & labelling machinery',
            'Conveyor & material handling', 'Quality control & testing equipment',
        ],
    }
    return items[serviceSlug] || ['All types of equipment for your industry']
}
