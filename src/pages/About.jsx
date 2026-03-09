import { Link } from 'react-router-dom'
import './About.css'

const VALUES = [
    { icon: '🤝', title: 'Client-First', desc: 'Every decision we make is filtered through one question: is this good for the client?' },
    { icon: '⚡', title: 'Speed Matters', desc: 'We built fast approvals into our process because we know time costs money.' },
    { icon: '🇨🇦', title: 'Canadian-Built', desc: 'EquipEASE was built for Canadian business cycles, regulations, and realities.' },
    { icon: '🔓', title: 'Accessible Financing', desc: 'We believe all credit profiles deserve a fair shot at getting the equipment they need.' },
]

const TEAM = [
    {
        initials: 'BL',
        name: 'Brian L.',
        title: 'Founder & Principal Broker',
        bio: 'With 15+ years in commercial lending and equipment finance, Brian founded EquipEASE with a simple belief: Canadian owner-operators deserve better than what the banks offer.',
        gradient: 'linear-gradient(135deg, #FF6600, #FF8C42)',
    },
    {
        initials: 'SR',
        name: 'Sarah R.',
        title: 'Senior Financing Advisor',
        bio: 'Sarah specializes in construction and agriculture financing, bringing deep industry knowledge and a track record of creative deal structures for complex files.',
        gradient: 'linear-gradient(135deg, #7c3aed, #a855f7)',
    },
    {
        initials: 'MK',
        name: 'Mike K.',
        title: 'Transportation Specialist',
        bio: 'A former owner-operator himself, Mike understands the trucking industry from the driver\'s seat. He helps fleets of every size find the right financing structure.',
        gradient: 'linear-gradient(135deg, #0ea5e9, #38bdf8)',
    },
]

export default function About() {
    return (
        <div className="page about-page">
            {/* ── Hero ── */}
            <section className="page-hero-about section">
                <div className="container">
                    <div className="badge">Our Story</div>
                    <h1 className="section-title" style={{ marginTop: '16px', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                        We Started EquipEASE<br /><span style={{ color: 'var(--orange)' }}>Because Banks Failed Us.</span>
                    </h1>
                    <p className="section-subtitle" style={{ maxWidth: '620px', marginTop: '20px' }}>
                        Too many Canadian owner-operators were being turned away by banks that didn't understand their business.
                        We built EquipEASE to be the partner that actually shows up — fast, flexible, and on your side.
                    </p>
                </div>
            </section>

            {/* ── Mission ── */}
            <section className="section about-mission">
                <div className="container about-mission__inner">
                    <div>
                        <div className="eyebrow">Our Mission</div>
                        <h2 className="section-title">Help Canadian Operators<br />Achieve Their Dreams</h2>
                        <div className="orange-bar" />
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.75', fontSize: '1rem', maxWidth: '480px', marginTop: '8px' }}>
                            The right piece of equipment can transform a business. A dump truck can launch a landscaping company.
                            A dental chair can open a practice. A combine can double a farm's yield.
                        </p>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.75', fontSize: '1rem', maxWidth: '480px', marginTop: '16px' }}>
                            We exist to make that possible — with fast approvals, flexible terms, and a team that picks up the phone.
                        </p>
                        <div style={{ marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                            <Link to="/apply" className="btn-primary">Apply Now →</Link>
                            <a href="tel:18442503273" className="btn-outline">📞 Call Us</a>
                        </div>
                    </div>
                    <div className="about-mission__stats">
                        <div className="about-stat">
                            <div className="about-stat__value">$50M+</div>
                            <div className="about-stat__label">Financed for Canadians</div>
                        </div>
                        <div className="about-stat">
                            <div className="about-stat__value">8+</div>
                            <div className="about-stat__label">Industries Served</div>
                        </div>
                        <div className="about-stat">
                            <div className="about-stat__value">24 hrs</div>
                            <div className="about-stat__label">Avg. Approval Time</div>
                        </div>
                        <div className="about-stat">
                            <div className="about-stat__value">100%</div>
                            <div className="about-stat__label">Canadian-Owned</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Values ── */}
            <section className="section about-values">
                <div className="container">
                    <div className="section-header">
                        <div className="eyebrow">What We Stand For</div>
                        <h2 className="section-title">Our Core Values</h2>
                    </div>
                    <div className="values-grid">
                        {VALUES.map(v => (
                            <div key={v.title} className="card value-card">
                                <div className="value-card__icon">{v.icon}</div>
                                <h3 className="value-card__title">{v.title}</h3>
                                <p className="value-card__desc">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Team ── */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <div className="eyebrow">The Team</div>
                        <h2 className="section-title">Real People. Real Expertise.</h2>
                        <p className="section-subtitle">No call centres. No ticket systems. You get a dedicated advisor who knows your industry.</p>
                    </div>
                    <div className="team-grid">
                        {TEAM.map(m => (
                            <div key={m.name} className="card team-card">
                                <div className="team-card__avatar" style={{ background: m.gradient }}>{m.initials}</div>
                                <h3 className="team-card__name">{m.name}</h3>
                                <div className="team-card__title">{m.title}</div>
                                <p className="team-card__bio">{m.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="section-sm" style={{ textAlign: 'center', padding: '80px 0', background: 'var(--navy-mid)', borderTop: '1px solid var(--navy-border)' }}>
                <div className="container">
                    <h2 className="section-title">Let's Work Together</h2>
                    <p className="section-subtitle" style={{ margin: '16px auto 32px', maxWidth: '420px' }}>Join thousands of Canadian businesses that trust EquipEASE to fuel their growth.</p>
                    <Link to="/apply" className="btn-primary" style={{ fontSize: '1.05rem', padding: '16px 40px' }}>Apply Now →</Link>
                </div>
            </section>
        </div>
    )
}
