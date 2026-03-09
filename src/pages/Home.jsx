import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const TRUST_STATS = [
    { value: '24 hrs', label: 'to get approved' },
    { value: '8+', label: 'industries financed' },
    { value: '$50M+', label: 'funded for Canadians' },
    { value: '0', label: 'obligation to apply' },
]

const INDUSTRIES = [
    { icon: '🚛', name: 'Transportation', desc: 'Trucks, trailers, and commercial vehicle fleets.' },
    { icon: '🏗️', name: 'Construction', desc: 'Excavators, cranes, and heavy site equipment.' },
    { icon: '⚙️', name: 'Manufacturing', desc: 'CNC machines, industrial tooling, production lines.' },
    { icon: '🦷', name: 'Medical & Dental', desc: 'Chairs, imaging systems, and diagnostic equipment.' },
    { icon: '🛢️', name: 'Oil & Gas', desc: 'Drilling rigs, pumps, and oilfield machinery.' },
    { icon: '🌲', name: 'Logging', desc: 'Harvesters, skidders, and forestry equipment.' },
    { icon: '🚜', name: 'Agriculture', desc: 'Combines, tractors, and precision ag technology.' },
    { icon: '🚤', name: 'Personal Use', desc: 'RVs, boats, and recreational vehicles.' },
]

const STEPS = [
    { num: '01', title: 'Find your equipment', desc: 'Work with any vendor — new or used, anywhere in Canada. You choose exactly what you need.' },
    { num: '02', title: 'Apply in minutes', desc: 'Complete our simple online application. No lengthy bank paperwork, no endless forms.' },
    { num: '03', title: 'Get funded fast', desc: 'Receive a decision within 24 hours. Flexible terms, competitive rates, money in hand.' },
]

const TESTIMONIALS = [
    {
        text: 'EquipEASE made it incredibly easy to finance my dental practice\'s new imaging system. The process was seamless and the team was responsive throughout.',
        name: 'Dr. R. Patel',
        role: 'Dental Practice Owner · Ontario',
        equipment: 'Digital X-Ray Imaging System',
        initial: 'R',
    },
    {
        text: 'I\'ve worked with banks and other lenders — nobody compares. EquipEASE approved my excavator financing in less than a day. Back to work fast.',
        name: 'Mike T.',
        role: 'Owner Operator · British Columbia',
        equipment: 'CAT 320 Excavator',
        initial: 'M',
    },
    {
        text: 'As a trucking company, cash flow is everything. EquipEASE structured our lease to match our business cycles. They actually understand our industry.',
        name: 'Sandra L.',
        role: 'Fleet Owner · Alberta',
        equipment: '3× Kenworth T680 Trucks',
        initial: 'S',
    },
]

const WHY_US = [
    {
        title: 'Any equipment, any vendor.',
        desc: 'We finance new and used equipment from any vendor across Canada — no preferred dealer lists or restrictions.',
    },
    {
        title: 'Fast funding.',
        desc: 'Get funded in as little as 24 hours and benefit from flexible payment structures tailored to your cash flow.',
    },
    {
        title: 'All credit profiles welcome.',
        desc: 'We work with all credit backgrounds. There is no obligation to continue and applying will not affect your score.',
    },
]

function AnimatedCounter({ target, prefix = '', suffix = '' }) {
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

    return <span ref={ref}>{prefix}{count}{suffix}</span>
}

export default function Home() {
    return (
        <div className="page home">

            {/* ── HERO ──────────────────────────────────────────────── */}
            <section className="hero">
                <div className="container hero__inner">
                    {/* Left */}
                    <div className="hero__content">
                        <div className="badge">🇨🇦 BC's Equipment Financing Experts</div>
                        <h1 className="hero__headline">
                            You find it.<br />
                            <span className="hero__headline--accent">We finance it.</span>
                        </h1>
                        <hr className="hero__rule" />
                        <p className="hero__sub">
                            Equipment leasing &amp; financing for BC businesses across every industry.
                            Fast 24-hour approvals, flexible terms — no bank bureaucracy.
                        </p>
                        <div className="hero__ctas">
                            <Link to="/apply" className="btn-primary">Get Started ↗</Link>
                            <a href="tel:18442503273" className="btn-outline">Chat with an advisor</a>
                        </div>
                    </div>

                    {/* Right — full-bleed diagonal image panel */}
                    <div className="hero__visual">
                        <div className="hero__img-frame">
                            <img
                                src="/hero-equipment.png"
                                alt="Heavy equipment financed in British Columbia — excavator and trucks"
                                className="hero__img"
                                loading="eager"
                            />
                        </div>
                    </div>
                </div>

                {/* ── Trust stats strip ── */}
                <div className="hero__stats-strip">
                    <div className="container hero__stats-inner">
                        {TRUST_STATS.map((s, i) => (
                            <div key={i} className="hero__stat">
                                <span className="hero__stat-value">{s.value}</span>
                                <span className="hero__stat-label">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHY US ────────────────────────────────────────────── */}
            <section className="section why-section">
                <div className="container">
                    <hr className="rule" />
                    <div className="why__layout">
                        <div className="why__left">
                            <div className="eyebrow">Why EquipEASE</div>
                            <h2 className="section-title">
                                See why BC businesses choose to go the distance with us.
                            </h2>
                        </div>
                        <div className="why__right">
                            {WHY_US.map((item, i) => (
                                <div key={i} className="why__item">
                                    <div className="why__item-arrow">↗</div>
                                    <div>
                                        <h3 className="why__item-title">{item.title}</h3>
                                        <p className="why__item-desc">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                            <Link to="/apply" className="btn-primary">Apply now ↗</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── HOW IT WORKS ──────────────────────────────────────── */}
            <section className="section steps-section">
                <div className="container">
                    <hr className="rule" />
                    <div className="steps-header">
                        <div className="eyebrow">Simple Process</div>
                        <h2 className="section-title">The path forward is clear and simple.</h2>
                        <p className="section-subtitle">
                            If this sounds like your business, our application process will have you funded in no time.
                        </p>
                    </div>
                    <div className="steps-grid">
                        {STEPS.map((s, i) => (
                            <div key={i} className="step-card">
                                <div className="step-card__num">{s.num}</div>
                                <hr className="step-card__rule" />
                                <h3 className="step-card__title">{s.title}</h3>
                                <p className="step-card__desc">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="steps-footer">
                        <Link to="/apply" className="btn-primary">Start your application ↗</Link>
                        <span className="steps-footer__note">Takes less than 5 minutes</span>
                    </div>
                </div>
            </section>

            {/* ── INDUSTRIES ────────────────────────────────────────── */}
            <section className="section industries-section">
                <div className="container">
                    <hr className="rule" />
                    <div className="industries-header">
                        <div className="eyebrow">Industries We Serve</div>
                        <h2 className="section-title">Built for Canadian<br />owner operators.</h2>
                        <p className="section-subtitle">
                            We specialize in the industries that keep Canada running. Whatever you need, we can finance it.
                        </p>
                    </div>
                    <div className="industries-grid">
                        {INDUSTRIES.map(ind => (
                            <div key={ind.name} className="industry-card">
                                <div className="industry-card__icon">{ind.icon}</div>
                                <h3 className="industry-card__name">{ind.name}</h3>
                                <p className="industry-card__desc">{ind.desc}</p>
                                <Link to="/industries" className="btn-ghost">Learn more →</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── TESTIMONIALS ──────────────────────────────────────── */}
            <section className="section testimonials-section">
                <div className="container">
                    <hr className="rule" />
                    <div className="testimonials-header">
                        <div className="eyebrow">Client Stories</div>
                        <h2 className="section-title">Real businesses. Real results.</h2>
                    </div>
                    <div className="testimonials-grid">
                        {TESTIMONIALS.map((t, i) => (
                            <div key={i} className="testimonial-card">
                                <div className="testimonial-card__stars">★★★★★</div>
                                <p className="testimonial-card__text">"{t.text}"</p>
                                <hr className="testimonial-card__rule" />
                                <div className="testimonial-card__footer">
                                    <div className="testimonial-card__avatar">{t.initial}</div>
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

            {/* ── FINAL CTA — dark section ───────────────────────────── */}
            <section className="final-cta">
                <div className="container final-cta__inner">
                    <div className="eyebrow" style={{ color: 'rgba(245,241,235,0.5)' }}>Ready to Grow?</div>
                    <h2 className="final-cta__heading">
                        Apply in minutes.<br />Approved in 24 hours.
                    </h2>
                    <p className="final-cta__sub">
                        No obligation. No hassle. Just fast equipment financing from a team that understands your business.
                    </p>
                    <div className="final-cta__btns">
                        <Link to="/apply" className="btn-primary-dark">Get your free quote ↗</Link>
                        <a href="tel:18442503273" className="final-cta__link">Call 1-844-250-EASE</a>
                    </div>
                </div>
            </section>

        </div>
    )
}
