import { Link } from 'react-router-dom'
import './Industries.css'

const INDUSTRIES = [
    {
        icon: '🚛',
        name: 'Transportation & Trucking',
        headline: 'Keep Your Fleet Moving',
        desc: 'Whether you\'re expanding a fleet or getting your first rig on the road, we finance commercial trucks, trailers, and transport equipment across Canada.',
        items: ['Semi-trucks & sleepers', 'Flatbed & dry van trailers', 'Refrigerated units', 'Tanker trucks', 'Dump trucks & vocational vehicles'],
    },
    {
        icon: '🏗️',
        name: 'Construction',
        headline: 'Build More. Borrow Less.',
        desc: 'From excavators to concrete pumps, we structure deals around the project cycle — so your payments match your cash flow, not a bank\'s schedule.',
        items: ['Excavators & dozers', 'Cranes & lifts', 'Concrete & paving equipment', 'Compactors & graders', 'Trailers & heavy haulers'],
    },
    {
        icon: '⚙️',
        name: 'Manufacturing',
        headline: 'Modernize Your Operation',
        desc: 'Upgrade your production floor without draining your capital. We finance new and used industrial equipment for manufacturers across every sector.',
        items: ['CNC machines & lathes', 'Welding & fabrication equipment', 'Industrial presses', 'Packaging machinery', 'Quality control systems'],
    },
    {
        icon: '🦷',
        name: 'Medical & Dental',
        headline: 'Equip Your Practice',
        desc: 'From new dental chairs to full diagnostic suites, we help healthcare professionals acquire the technology their patients deserve — without the capital strain.',
        items: ['Dental chairs & units', 'Imaging & X-ray systems', 'Surgical equipment', 'Diagnostic technology', 'Physiotherapy equipment'],
    },
    {
        icon: '🛢️',
        name: 'Oil & Gas',
        headline: 'Power Your Operations',
        desc: 'We understand the volatility of commodity markets. Our flexible terms and fast turnarounds are built for the oilfields, not a bank branch.',
        items: ['Drilling rigs & accessories', 'Pump jacks & pressure systems', 'Vacuum trucks', 'Compressors & generators', 'Oilfield trailers & tanks'],
    },
    {
        icon: '🌲',
        name: 'Logging & Forestry',
        headline: 'From Forest to Foundation',
        desc: 'Seasonal cash flow shouldn\'t stop you from getting the equipment you need. We build financing structures that respect the rhythms of the logging industry.',
        items: ['Harvesters & forwarders', 'Skidders & yarders', 'Log loaders & handlers', 'Chippers & grinders', 'Forestry transport trailers'],
    },
    {
        icon: '🚜',
        name: 'Agriculture',
        headline: 'Grow Your Operation',
        desc: 'Planting season waits for no one. Get fast approvals on the agricultural equipment you need to maximize this season\'s yield.',
        items: ['Combines & harvesters', 'Tractors & planters', 'Sprayers & fertilizers', 'Grain handling equipment', 'Precision ag technology'],
    },
    {
        icon: '🚤',
        name: 'Personal Use',
        headline: 'Finance What You Love',
        desc: 'Life\'s milestones deserve to be celebrated. We offer financing for RVs, boats, and recreational vehicles — so you can get out there sooner.',
        items: ['Motorhomes & travel trailers', 'Fifth wheels & park models', 'Boats & personal watercraft', 'ATVs & snowmobiles', 'Cargo trailers'],
    },
]

export default function Industries() {
    return (
        <div className="page industries-page">
            <section className="page-hero-industries section">
                <div className="container">
                    <div className="badge">Industries We Serve</div>
                    <h1 className="section-title" style={{ marginTop: '16px', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                        Every Industry. Every<br /><span style={{ color: 'var(--orange)' }}>Piece of Equipment.</span>
                    </h1>
                    <p className="section-subtitle" style={{ maxWidth: '580px' }}>
                        We don't just do one type of financing. If it's equipment you need to run and grow your business, we can find a way to fund it.
                    </p>
                </div>
            </section>

            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="industries-list">
                        {INDUSTRIES.map((ind, i) => (
                            <div key={ind.name} className={`industry-detail ${i % 2 === 1 ? 'industry-detail--alt' : ''}`}>
                                <div className="industry-detail__header">
                                    <div className="industry-detail__icon">{ind.icon}</div>
                                    <div>
                                        <div className="eyebrow">{ind.name}</div>
                                        <h2 className="industry-detail__headline">{ind.headline}</h2>
                                    </div>
                                </div>
                                <div className="industry-detail__body">
                                    <p className="industry-detail__desc">{ind.desc}</p>
                                    <ul className="industry-detail__items">
                                        {ind.items.map(item => (
                                            <li key={item}><span className="check">✓</span>{item}</li>
                                        ))}
                                    </ul>
                                    <Link to="/apply" className="btn-primary">Apply for {ind.name} Financing →</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-sm" style={{ textAlign: 'center', padding: '80px 0', background: 'var(--cream-alt)', borderTop: '1px solid var(--rule)' }}>
                <div className="container">
                    <h2 className="section-title">Don't See Your Industry?</h2>
                    <p className="section-subtitle" style={{ margin: '16px auto 32px', maxWidth: '480px' }}>We can finance almost anything. Give us a call and let's talk about your specific needs.</p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/apply" className="btn-primary">Apply Now →</Link>
                        <a href="tel:18442503273" className="btn-outline">📞 1-844-250-EASE</a>
                    </div>
                </div>
            </section>
        </div>
    )
}
