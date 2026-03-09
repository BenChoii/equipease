import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const STATS = [
    { value: 50, suffix: 'M+', label: 'Financed for Canadians', prefix: '$' },
    { value: 8, suffix: '+', label: 'Industries Served', prefix: '' },
    { value: 24, suffix: 'hr', label: 'Average Approval Time', prefix: '' },
    { value: 98, suffix: '%', label: 'Client Satisfaction', prefix: '' },
]

const INDUSTRIES = [
    { icon: '🚛', name: 'Transportation', desc: 'Trucks, trailers, and commercial vehicle fleets.' },
    { icon: '🏗️', name: 'Construction', desc: 'Excavators, cranes, and heavy site equipment.' },
    { icon: '⚙️', name: 'Manufacturing', desc: 'CNC machines, industrial tooling, and production lines.' },
    { icon: '🦷', name: 'Medical & Dental', desc: 'Chairs, imaging systems, and diagnostic equipment.' },
    { icon: '🛢️', name: 'Oil & Gas', desc: 'Drilling rigs, pumps, and oilfield machinery.' },
    { icon: '🌲', name: 'Logging', desc: 'Harvesters, skidders, and forestry equipment.' },
    { icon: '🚜', name: 'Agriculture', desc: 'Combines, tractors, and precision ag technology.' },
    { icon: '🚤', name: 'Personal Use', desc: 'RVs, boats, and recreational vehicles.' },
]

const STEPS = [
    { num: '01', title: 'Find Your Equipment', desc: 'Work with any vendor — new or used, anywhere in Canada. You choose what you need.' },
    { num: '02', title: 'Apply in Minutes', desc: 'Complete our simple application. No lengthy bank paperwork or endless forms.' },
    { num: '03', title: 'Get Approved Fast', desc: 'Receive a decision within 24 hours. Flexible terms, competitive rates.' },
]

const TESTIMONIALS = [
    {
        text: 'EquipEASE made it incredibly easy to finance my dental practice\'s new imaging system. The process was seamless and the team was responsive throughout.',
        name: 'Dr. R. Patel',
        role: 'Dental Practice Owner, Ontario',
        equipment: 'Digital X-Ray Imaging System',
    },
    {
        text: 'I\'ve worked with banks and other lenders — nobody compares. EquipEASE approved my excavator financing in less than a day. Back to work fast.',
        name: 'Mike T.',
        role: 'Owner Operator, British Columbia',
        equipment: 'CAT 320 Excavator',
    },
    {
        text: 'As a trucking company, cash flow is everything. EquipEASE structured our lease to match our business cycles. They actually understand our industry.',
        name: 'Sandra L.',
        role: 'Fleet Owner, Alberta',
        equipment: '3× Kenworth T680 Trucks',
    },
]

function AnimatedCounter({ target, prefix, suffix }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const started = useRef(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true
                    let start = 0
                    const duration = 1800
                    const steps = 60
                    const increment = target / steps
                    const interval = duration / steps
                    const timer = setInterval(() => {
                        start += increment
                        if (start >= target) {
                            setCount(target)
                            clearInterval(timer)
                        } else {
                            setCount(Math.floor(start))
                        }
                    }, interval)
                }
            },
            { threshold: 0.5 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [target])

    return (
        <span ref={ref}>
            {prefix}{count}{suffix}
        </span>
    )
}

export default function Home() {
    return (
        <div className="page home">
            {/* ── Hero ─────────────────────────────────────────────── */}
            <section className="hero">
                <div className="hero__bg" aria-hidden="true">
                    <div className="hero__orb hero__orb--1" />
                    <div className="hero__orb hero__orb--2" />
                    <div className="hero__grid" />
                </div>
                <div className="container hero__inner">
                    <div className="badge" style={{ marginBottom: '28px' }}>🇨🇦 Canadian-Owned &amp; Operated</div>
                    <h1 className="hero__headline">
                        You Find It.<br />
                        <span className="hero__headline--orange">We Finance It.</span>
                    </h1>
                    <p className="hero__sub">
                        Equipment leasing &amp; financing for Canadian businesses across every industry.
                        Fast approvals, flexible terms — no bank bureaucracy.
                    </p>
                    <div className="hero__ctas">
                        <Link to="/apply" className="btn-primary hero__btn-main">Get Approved Today →</Link>
                        <a href="tel:18442503273" className="btn-outline">📞 1-844-250-EASE</a>
                    </div>
                    <div className="hero__trust">
                        <span>✓ Decision in 24 hours</span>
                        <span>✓ All credit profiles welcome</span>
                        <span>✓ No obligation to apply</span>
                    </div>
                </div>
            </section>

            {/* ── Stats ─────────────────────────────────────────────── */}
            <section className="stats-bar">
                <div className="container stats-bar__inner">
                    {STATS.map(s => (
                        <div key={s.label} className="stats-bar__item">
                            <div className="stats-bar__value">
                                <AnimatedCounter target={s.value} prefix={s.prefix} suffix={s.suffix} />
                            </div>
                            <div className="stats-bar__label">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── How It Works ──────────────────────────────────────── */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <div className="eyebrow">Simple Process</div>
                        <h2 className="section-title">From Application to Approval<br />in 3 Easy Steps</h2>
                        <p className="section-subtitle">No complex bank forms. No waiting weeks. Just fast, flexible financing from people who understand equipment.</p>
                    </div>
                    <div className="steps">
                        {STEPS.map((s, i) => (
                            <div key={i} className="step-card">
                                <div className="step-card__num">{s.num}</div>
                                <h3 className="step-card__title">{s.title}</h3>
                                <p className="step-card__desc">{s.desc}</p>
                                {i < STEPS.length - 1 && <div className="step-card__arrow">→</div>}
                            </div>
                        ))}
                    </div>
                    <div className="steps__cta">
                        <Link to="/apply" className="btn-primary">Start Your Application →</Link>
                    </div>
                </div>
            </section>

            {/* ── Industries ────────────────────────────────────────── */}
            <section className="section industries-section">
                <div className="container">
                    <div className="section-header">
                        <div className="eyebrow">Industries We Serve</div>
                        <h2 className="section-title">Built for Canadian<br />Owner Operators</h2>
                        <p className="section-subtitle">We specialize in the industries that keep Canada running. Whatever you need, we can finance it.</p>
                    </div>
                    <div className="industries-grid">
                        {INDUSTRIES.map(ind => (
                            <div key={ind.name} className="card industry-card">
                                <div className="industry-card__icon">{ind.icon}</div>
                                <h3 className="industry-card__name">{ind.name}</h3>
                                <p className="industry-card__desc">{ind.desc}</p>
                                <Link to="/industries" className="btn-ghost">Learn more →</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Trust Bar ─────────────────────────────────────────── */}
            <section className="trust-bar section-sm">
                <div className="container trust-bar__inner">
                    <div className="trust-bar__item">
                        <div className="trust-bar__icon">🇨🇦</div>
                        <div>
                            <div className="trust-bar__title">Canadian-Owned</div>
                            <div className="trust-bar__sub">Proudly serving from coast to coast</div>
                        </div>
                    </div>
                    <div className="trust-bar__divider" />
                    <div className="trust-bar__item">
                        <div className="trust-bar__icon">⚡</div>
                        <div>
                            <div className="trust-bar__title">24-Hour Approvals</div>
                            <div className="trust-bar__sub">Get back to work fast</div>
                        </div>
                    </div>
                    <div className="trust-bar__divider" />
                    <div className="trust-bar__item">
                        <div className="trust-bar__icon">🛡️</div>
                        <div>
                            <div className="trust-bar__title">All Credit Profiles</div>
                            <div className="trust-bar__sub">We find a solution for everyone</div>
                        </div>
                    </div>
                    <div className="trust-bar__divider" />
                    <div className="trust-bar__item">
                        <div className="trust-bar__icon">📋</div>
                        <div>
                            <div className="trust-bar__title">Any Vendor, Anywhere</div>
                            <div className="trust-bar__sub">New or used — you choose the equipment</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Testimonials ──────────────────────────────────────── */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <div className="eyebrow">Client Stories</div>
                        <h2 className="section-title">Trusted by Canadian<br />Business Owners</h2>
                    </div>
                    <div className="testimonials-grid">
                        {TESTIMONIALS.map((t, i) => (
                            <div key={i} className="card testimonial-card">
                                <div className="testimonial-card__stars">★★★★★</div>
                                <p className="testimonial-card__text">"{t.text}"</p>
                                <div className="testimonial-card__footer">
                                    <div className="testimonial-card__avatar">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="testimonial-card__name">{t.name}</div>
                                        <div className="testimonial-card__role">{t.role}</div>
                                        <div className="testimonial-card__equip">🔧 {t.equipment}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Final CTA ─────────────────────────────────────────── */}
            <section className="final-cta section-sm">
                <div className="container final-cta__inner">
                    <div className="final-cta__orb" aria-hidden="true" />
                    <div className="eyebrow">Ready to Grow?</div>
                    <h2 className="section-title">Apply in Minutes.<br />Approved in 24 Hours.</h2>
                    <p className="section-subtitle" style={{ maxWidth: '480px', margin: '16px auto 32px' }}>
                        No obligation. No hassle. Just fast equipment financing from a team that understands your business.
                    </p>
                    <div className="hero__ctas" style={{ justifyContent: 'center' }}>
                        <Link to="/apply" className="btn-primary">Get Your Free Quote →</Link>
                        <a href="tel:18442503273" className="btn-outline">Call 1-844-250-EASE</a>
                    </div>
                </div>
            </section>
        </div>
    )
}
