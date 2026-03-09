import { Link } from 'react-router-dom'
import './WhyUs.css'

const COMPARISON = [
    { feature: 'Approval Speed', equipease: '24 hours', bank: '2–4 weeks' },
    { feature: 'Application Length', equipease: '5 minutes online', bank: 'Lengthy paperwork' },
    { feature: 'Credit Flexibility', equipease: 'All profiles welcome', bank: 'Strict requirements' },
    { feature: 'Equipment Types', equipease: 'Any equipment, any vendor', bank: 'Limited categories' },
    { feature: 'Collateral Required', equipease: 'Equipment itself', bank: 'Additional collateral often needed' },
    { feature: 'Vendor Choice', equipease: 'Your choice — new or used', bank: 'Often restricted' },
    { feature: 'Personalized Service', equipease: 'Dedicated advisor', bank: 'Assigned to a branch' },
    { feature: 'Canadian-Focused', equipease: '100% Canadian-owned', bank: 'Often multinational' },
]

const BENEFITS = [
    {
        icon: '⚡',
        title: 'Fast Approvals',
        desc: 'We understand that time is money. Our streamlined process delivers decisions within 24 hours so you can get back to doing what you do best.',
    },
    {
        icon: '🔓',
        title: 'Credit Flexible',
        desc: 'Traditional banks can slam the door on growing businesses. We work with all credit profiles — including startups and owner-operators building their history.',
    },
    {
        icon: '📋',
        title: 'Any Equipment',
        desc: 'Construction, medical, agriculture, transportation — if there\'s equipment you need to run your business, we can structure a deal around it.',
    },
    {
        icon: '🤝',
        title: 'Dedicated Advisor',
        desc: 'You get a real person who knows your file. No call centres. No starting over every time. Just consistent, expert service from application to funding.',
    },
    {
        icon: '💼',
        title: 'Preserve Capital',
        desc: 'Keep your working capital intact. Leasing preserves your cash flow for operations, payroll, and growth — not tied up in depreciating equipment.',
    },
    {
        icon: '📈',
        title: 'Build Business Credit',
        desc: 'A financed lease with EquipEASE can help establish and strengthen your business credit profile over time, opening more doors as you grow.',
    },
]

export default function WhyUs() {
    return (
        <div className="page why-us">
            {/* ── Page Hero ── */}
            <section className="page-hero section">
                <div className="container">
                    <div className="badge">Why EquipEASE</div>
                    <h1 className="section-title" style={{ marginTop: '16px', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                        The Smarter Way to<br /><span style={{ color: 'var(--orange)' }}>Finance Equipment</span>
                    </h1>
                    <p className="section-subtitle" style={{ maxWidth: '580px' }}>
                        Forget the bank bureaucracy. We built EquipEASE to be the partner that Canadian
                        business owners actually deserve — fast, flexible, and on your side.
                    </p>
                </div>
            </section>

            {/* ── Benefits ── */}
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="benefits-grid">
                        {BENEFITS.map(b => (
                            <div key={b.title} className="card benefit-card">
                                <div className="benefit-card__icon">{b.icon}</div>
                                <h3 className="benefit-card__title">{b.title}</h3>
                                <p className="benefit-card__desc">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Comparison Table ── */}
            <section className="section comparison-section">
                <div className="container">
                    <div className="section-header">
                        <div className="eyebrow">Side by Side</div>
                        <h2 className="section-title">EquipEASE vs. Traditional Bank</h2>
                    </div>
                    <div className="comparison-table">
                        <div className="comparison-table__header">
                            <div />
                            <div className="comparison-table__col-head equipease">EquipEASE ✓</div>
                            <div className="comparison-table__col-head bank">Traditional Bank</div>
                        </div>
                        {COMPARISON.map((row, i) => (
                            <div key={i} className="comparison-table__row">
                                <div className="comparison-table__feature">{row.feature}</div>
                                <div className="comparison-table__good">{row.equipease}</div>
                                <div className="comparison-table__bad">{row.bank}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="section-sm" style={{ textAlign: 'center', padding: '80px 0' }}>
                <div className="container">
                    <h2 className="section-title">Ready to See the Difference?</h2>
                    <p className="section-subtitle" style={{ margin: '16px auto 32px', maxWidth: '480px' }}>Apply in minutes. No obligation. A decision in your inbox by tomorrow.</p>
                    <Link to="/apply" className="btn-primary" style={{ fontSize: '1.05rem', padding: '16px 40px' }}>Apply Now →</Link>
                </div>
            </section>
        </div>
    )
}
