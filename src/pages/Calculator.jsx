import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Calculator.css'

const TERMS = [24, 36, 48, 60, 72, 84]
const RATE = 0.0699 // 6.99% — representative rate shown as estimate

function calcMonthly(principal, annualRate, months) {
    if (principal <= 0 || months <= 0) return 0
    const r = annualRate / 12
    return (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1)
}

function fmt(n) {
    return n.toLocaleString('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 })
}

function fmtDecimal(n) {
    return n.toLocaleString('en-CA', { style: 'currency', currency: 'CAD', minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

export default function Calculator() {
    // Inputs
    const [equipCost, setEquipCost] = useState(75000)
    const [downPct, setDownPct] = useState(10)
    const [term, setTerm] = useState(60)

    // Lead capture state
    const [showLead, setShowLead] = useState(false)
    const [leadSent, setLeadSent] = useState(false)
    const [form, setForm] = useState({ name: '', email: '', phone: '', business: '' })

    // Derived math
    const down = equipCost * (downPct / 100)
    const principal = equipCost - down
    const monthly = calcMonthly(principal, RATE, term)
    const totalPaid = monthly * term + down
    const totalInterest = totalPaid - equipCost

    function handleSubmit(e) {
        e.preventDefault()
        // In production this would POST to a backend / CRM
        setLeadSent(true)
    }

    return (
        <div className="page calc-page">
            {/* ── SEO Hero ── */}
            <section className="calc-hero section">
                <div className="container">
                    <div className="badge">🆓 Free Tool</div>
                    <h1 className="calc-hero__title">
                        Equipment Payment<br />
                        <span style={{ color: 'var(--orange)' }}>Calculator</span>
                    </h1>
                    <p className="calc-hero__sub">
                        Estimate your monthly payment in seconds. No credit pull. No commitment.
                        Enter your numbers below and see what equipment financing actually costs.
                    </p>
                </div>
            </section>

            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container calc-layout">

                    {/* ── Left: Inputs ── */}
                    <div className="calc-inputs">
                        <div className="calc-card">
                            <h2 className="calc-card__title">Your Equipment Details</h2>

                            {/* Equipment Cost */}
                            <div className="calc-field">
                                <div className="calc-field__header">
                                    <label className="calc-field__label">Equipment Cost</label>
                                    <span className="calc-field__value">{fmt(equipCost)}</span>
                                </div>
                                <input
                                    type="range"
                                    className="calc-slider"
                                    min={5000} max={2000000} step={5000}
                                    value={equipCost}
                                    onChange={e => setEquipCost(+e.target.value)}
                                />
                                <div className="calc-slider__labels">
                                    <span>$5K</span><span>$2M</span>
                                </div>
                                <div className="calc-presets">
                                    {[25000, 75000, 150000, 300000, 500000].map(v => (
                                        <button
                                            key={v}
                                            className={`calc-preset ${equipCost === v ? 'active' : ''}`}
                                            onClick={() => setEquipCost(v)}
                                        >
                                            {v >= 1000000 ? `$${v / 1000000}M` : `$${v / 1000}K`}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Down Payment */}
                            <div className="calc-field">
                                <div className="calc-field__header">
                                    <label className="calc-field__label">Down Payment</label>
                                    <span className="calc-field__value">{downPct}% &nbsp;·&nbsp; {fmt(down)}</span>
                                </div>
                                <input
                                    type="range"
                                    className="calc-slider"
                                    min={0} max={40} step={5}
                                    value={downPct}
                                    onChange={e => setDownPct(+e.target.value)}
                                />
                                <div className="calc-slider__labels">
                                    <span>0%</span><span>40%</span>
                                </div>
                            </div>

                            {/* Term */}
                            <div className="calc-field">
                                <label className="calc-field__label" style={{ marginBottom: '14px', display: 'block' }}>
                                    Financing Term
                                </label>
                                <div className="calc-terms">
                                    {TERMS.map(t => (
                                        <button
                                            key={t}
                                            className={`calc-term-btn ${term === t ? 'active' : ''}`}
                                            onClick={() => setTerm(t)}
                                        >
                                            {t} mo
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="calc-disclaimer">
                                * Estimate based on representative rate of {(RATE * 100).toFixed(2)}% OAC.
                                Actual rate depends on credit profile, equipment type, and term.
                            </div>
                        </div>
                    </div>

                    {/* ── Right: Results ── */}
                    <div className="calc-results">
                        <div className="calc-result-card">
                            <div className="calc-monthly-label">Estimated Monthly Payment</div>
                            <div className="calc-monthly-value">{fmtDecimal(monthly)}<span>/mo</span></div>

                            <div className="calc-breakdown">
                                <div className="calc-breakdown__row">
                                    <span>Equipment Cost</span>
                                    <strong>{fmt(equipCost)}</strong>
                                </div>
                                <div className="calc-breakdown__row">
                                    <span>Down Payment ({downPct}%)</span>
                                    <strong>−{fmt(down)}</strong>
                                </div>
                                <div className="calc-breakdown__row">
                                    <span>Amount Financed</span>
                                    <strong>{fmt(principal)}</strong>
                                </div>
                                <div className="calc-breakdown__row">
                                    <span>Term</span>
                                    <strong>{term} months</strong>
                                </div>
                                <div className="calc-breakdown__row">
                                    <span>Est. Total Interest</span>
                                    <strong>{fmt(totalInterest)}</strong>
                                </div>
                                <div className="calc-breakdown__row calc-breakdown__row--total">
                                    <span>Total Cost of Financing</span>
                                    <strong>{fmt(totalPaid)}</strong>
                                </div>
                            </div>

                            {!showLead && !leadSent && (
                                <button
                                    className="btn-primary calc-cta"
                                    onClick={() => setShowLead(true)}
                                >
                                    Get My Real Rate →
                                </button>
                            )}

                            {showLead && !leadSent && (
                                <form className="calc-lead-form" onSubmit={handleSubmit}>
                                    <p className="calc-lead-form__headline">
                                        Enter your details and we'll send your personalized rate within 2 hours.
                                    </p>
                                    <div className="calc-lead-form__grid">
                                        <input
                                            required
                                            placeholder="Full Name"
                                            value={form.name}
                                            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                                            className="calc-input"
                                        />
                                        <input
                                            required type="email"
                                            placeholder="Work Email"
                                            value={form.email}
                                            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                                            className="calc-input"
                                        />
                                        <input
                                            placeholder="Phone (optional)"
                                            value={form.phone}
                                            onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                                            className="calc-input"
                                        />
                                        <input
                                            placeholder="Business Name"
                                            value={form.business}
                                            onChange={e => setForm(f => ({ ...f, business: e.target.value }))}
                                            className="calc-input"
                                        />
                                    </div>
                                    <button type="submit" className="btn-primary calc-cta">
                                        Send Me My Rate
                                    </button>
                                    <p className="calc-lead-privacy">🔒 No spam. No credit check. Just your number.</p>
                                </form>
                            )}

                            {leadSent && (
                                <div className="calc-success">
                                    <div className="calc-success__icon">✅</div>
                                    <p className="calc-success__title">You're on the list!</p>
                                    <p className="calc-success__sub">
                                        We'll reach out within 2 hours with your personalized rate for a {fmt(principal)} equipment loan.
                                    </p>
                                    <Link to="/apply" className="btn-primary calc-cta">
                                        Submit Full Application →
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Trust signals */}
                        <div className="calc-trust">
                            <div className="calc-trust__item">⚡ 24-hr approval decision</div>
                            <div className="calc-trust__item">🔒 No hard credit check to start</div>
                            <div className="calc-trust__item">🇨🇦 100% Canadian company</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="section calc-faq-section" style={{ background: 'var(--cream-alt)', borderTop: '1px solid var(--rule)' }}>
                <div className="container">
                    <div className="section-header">
                        <div className="eyebrow">Common Questions</div>
                        <h2 className="section-title">About Equipment Financing</h2>
                    </div>
                    <div className="calc-faq-grid">
                        {FAQS.map(faq => (
                            <div key={faq.q} className="calc-faq-item">
                                <h3>{faq.q}</h3>
                                <p>{faq.a}</p>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '48px' }}>
                        <Link to="/apply" className="btn-primary" style={{ fontSize: '1.05rem', padding: '16px 48px' }}>
                            Apply Now — Free &amp; No Obligation →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

const FAQS = [
    {
        q: 'How accurate is this calculator?',
        a: 'The estimate is based on a 6.99% representative rate. Your actual rate will depend on your credit profile, equipment type, vendor, and term. Most qualified borrowers receive rates between 5.9% and 14.9%.',
    },
    {
        q: 'Do I need a down payment?',
        a: 'Not always. Many clients are approved with $0 down, especially for equipment under $100K. A down payment reduces your monthly payment and total interest cost.',
    },
    {
        q: 'What credit score do I need?',
        a: 'We work with all credit profiles, including business owners who have been declined by banks. There is no minimum score requirement to apply.',
    },
    {
        q: 'How long does approval take?',
        a: 'Most files receive a decision within 24 hours. Larger or more complex deals may take 48–72 hours. We\'ll keep you updated throughout.',
    },
    {
        q: 'Can I finance used equipment?',
        a: 'Yes — we finance both new and used equipment from private sellers, auctions, and dealers across Canada.',
    },
    {
        q: 'Is there a prepayment penalty?',
        a: 'This varies by lender and structure. We\'ll always disclose prepayment terms upfront. Many of our deals allow early payoff with minimal or no penalty.',
    },
]
