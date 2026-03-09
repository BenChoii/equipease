import { useState } from 'react'
import './Apply.css'

const STEPS_INFO = ['Contact Info', 'Equipment Details', 'Business Info', 'Review']

const INITIAL = {
    // Step 1
    firstName: '', lastName: '', email: '', phone: '', province: '',
    // Step 2
    equipmentType: '', equipmentDesc: '', estimatedValue: '', newOrUsed: '', vendorName: '',
    // Step 3
    businessName: '', businessType: '', yearsInBusiness: '', annualRevenue: '', message: '',
}

const PROVINCES = ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Nova Scotia', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Northwest Territories', 'Nunavut', 'Yukon']

export default function Apply() {
    const [step, setStep] = useState(0)
    const [form, setForm] = useState(INITIAL)
    const [submitted, setSubmitted] = useState(false)

    const update = (field, value) => setForm(f => ({ ...f, [field]: value }))

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    if (submitted) {
        return (
            <div className="page apply-page submitted">
                <div className="container submitted__inner">
                    <div className="submitted__icon">✅</div>
                    <h1 className="submitted__title">Application Received!</h1>
                    <p className="submitted__desc">
                        Thank you, <strong>{form.firstName}</strong>. Our team will review your application and
                        reach out within <strong>24 hours</strong> with next steps.
                    </p>
                    <div className="submitted__contact">
                        <p>Questions? Call us at <a href="tel:18442503273">1-844-250-EASE</a></p>
                        <p>or email <a href="mailto:info@equipease.ca">info@equipease.ca</a></p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="page apply-page">
            <div className="apply-page__hero">
                <div className="container">
                    <div className="badge">No Obligation</div>
                    <h1 className="section-title" style={{ marginTop: '16px' }}>
                        Apply for Equipment<br /><span style={{ color: 'var(--orange)' }}>Financing Today</span>
                    </h1>
                    <p className="section-subtitle">5-minute application. Decision in 24 hours. No impact on your credit to apply.</p>
                </div>
            </div>

            <div className="container apply-page__body">
                {/* Progress */}
                <div className="progress-bar">
                    {STEPS_INFO.map((label, i) => (
                        <div key={i} className={`progress-bar__step ${i <= step ? 'progress-bar__step--active' : ''} ${i < step ? 'progress-bar__step--done' : ''}`}>
                            <div className="progress-bar__circle">{i < step ? '✓' : i + 1}</div>
                            <span className="progress-bar__label">{label}</span>
                            {i < STEPS_INFO.length - 1 && <div className="progress-bar__line" />}
                        </div>
                    ))}
                </div>

                <form onSubmit={handleSubmit} className="apply-form">
                    {step === 0 && (
                        <div className="apply-form__section">
                            <h2 className="apply-form__title">Your Contact Information</h2>
                            <div className="apply-form__grid">
                                <div className="form-group">
                                    <label>First Name *</label>
                                    <input required placeholder="John" value={form.firstName} onChange={e => update('firstName', e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Last Name *</label>
                                    <input required placeholder="Smith" value={form.lastName} onChange={e => update('lastName', e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Email Address *</label>
                                    <input required type="email" placeholder="john@business.ca" value={form.email} onChange={e => update('email', e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number *</label>
                                    <input required placeholder="(555) 555-5555" value={form.phone} onChange={e => update('phone', e.target.value)} />
                                </div>
                                <div className="form-group apply-form__full">
                                    <label>Province *</label>
                                    <select required value={form.province} onChange={e => update('province', e.target.value)}>
                                        <option value="">Select your province or territory…</option>
                                        {PROVINCES.map(p => <option key={p} value={p}>{p}</option>)}
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 1 && (
                        <div className="apply-form__section">
                            <h2 className="apply-form__title">Equipment Details</h2>
                            <div className="apply-form__grid">
                                <div className="form-group">
                                    <label>Equipment Type *</label>
                                    <select required value={form.equipmentType} onChange={e => update('equipmentType', e.target.value)}>
                                        <option value="">Select industry…</option>
                                        {['Transportation', 'Construction', 'Manufacturing', 'Medical/Dental', 'Oil & Gas', 'Logging', 'Agriculture', 'Personal Use/Recreation', 'Other'].map(o => <option key={o}>{o}</option>)}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>New or Used?</label>
                                    <select value={form.newOrUsed} onChange={e => update('newOrUsed', e.target.value)}>
                                        <option value="">Select…</option>
                                        <option>New</option>
                                        <option>Used</option>
                                        <option>Not sure yet</option>
                                    </select>
                                </div>
                                <div className="form-group apply-form__full">
                                    <label>Equipment Description *</label>
                                    <input required placeholder="e.g. 2024 Kenworth T680, CAT 320 Excavator, Dental imaging system…" value={form.equipmentDesc} onChange={e => update('equipmentDesc', e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Estimated Value (CAD) *</label>
                                    <select required value={form.estimatedValue} onChange={e => update('estimatedValue', e.target.value)}>
                                        <option value="">Select range…</option>
                                        {['Under $25,000', '$25,000–$75,000', '$75,000–$150,000', '$150,000–$500,000', '$500,000+'].map(o => <option key={o}>{o}</option>)}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Vendor / Dealer Name (if known)</label>
                                    <input placeholder="Optional" value={form.vendorName} onChange={e => update('vendorName', e.target.value)} />
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="apply-form__section">
                            <h2 className="apply-form__title">About Your Business</h2>
                            <div className="apply-form__grid">
                                <div className="form-group">
                                    <label>Business Name *</label>
                                    <input required placeholder="ABC Trucking Ltd." value={form.businessName} onChange={e => update('businessName', e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label>Business Type</label>
                                    <select value={form.businessType} onChange={e => update('businessType', e.target.value)}>
                                        <option value="">Select…</option>
                                        {['Sole Proprietor', 'Partnership', 'Corporation', 'Owner-Operator', 'Other'].map(o => <option key={o}>{o}</option>)}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Years in Business</label>
                                    <select value={form.yearsInBusiness} onChange={e => update('yearsInBusiness', e.target.value)}>
                                        <option value="">Select…</option>
                                        {['Less than 1 year', '1–2 years', '3–5 years', '5–10 years', '10+ years'].map(o => <option key={o}>{o}</option>)}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Annual Revenue (CAD)</label>
                                    <select value={form.annualRevenue} onChange={e => update('annualRevenue', e.target.value)}>
                                        <option value="">Select range…</option>
                                        {['Under $250,000', '$250,000–$500,000', '$500,000–$1M', '$1M–$5M', '$5M+'].map(o => <option key={o}>{o}</option>)}
                                    </select>
                                </div>
                                <div className="form-group apply-form__full">
                                    <label>Additional Notes</label>
                                    <textarea rows={4} placeholder="Anything else we should know — timeline, credit history, specific requirements…" value={form.message} onChange={e => update('message', e.target.value)} />
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="apply-form__section">
                            <h2 className="apply-form__title">Review & Submit</h2>
                            <div className="review-grid">
                                <ReviewSection title="Contact Info">
                                    <ReviewRow label="Name" value={`${form.firstName} ${form.lastName}`} />
                                    <ReviewRow label="Email" value={form.email} />
                                    <ReviewRow label="Phone" value={form.phone} />
                                    <ReviewRow label="Province" value={form.province} />
                                </ReviewSection>
                                <ReviewSection title="Equipment">
                                    <ReviewRow label="Type" value={form.equipmentType} />
                                    <ReviewRow label="Description" value={form.equipmentDesc} />
                                    <ReviewRow label="Value" value={form.estimatedValue} />
                                    <ReviewRow label="Condition" value={form.newOrUsed} />
                                </ReviewSection>
                                <ReviewSection title="Business">
                                    <ReviewRow label="Name" value={form.businessName} />
                                    <ReviewRow label="Type" value={form.businessType} />
                                    <ReviewRow label="Years" value={form.yearsInBusiness} />
                                    <ReviewRow label="Revenue" value={form.annualRevenue} />
                                </ReviewSection>
                            </div>
                            <p className="apply-form__disclaimer">
                                By submitting, you consent to EquipEASE contacting you regarding your financing request.
                                Submitting this form does not impact your credit score.
                            </p>
                        </div>
                    )}

                    <div className="apply-form__nav">
                        {step > 0 && (
                            <button type="button" className="btn-outline" onClick={() => setStep(s => s - 1)}>← Back</button>
                        )}
                        {step < 3 ? (
                            <button type="button" className="btn-primary" onClick={() => setStep(s => s + 1)}>
                                Continue →
                            </button>
                        ) : (
                            <button type="submit" className="btn-primary apply-form__submit">
                                Submit Application →
                            </button>
                        )}
                    </div>
                </form>

                <div className="apply-sidebar">
                    <div className="card apply-sidebar__card">
                        <h3>📞 Prefer to Talk?</h3>
                        <p>Our advisors are available Mon–Fri, 9am–5pm MST.</p>
                        <a href="tel:18442503273" className="btn-primary" style={{ marginTop: '16px', display: 'block', textAlign: 'center' }}>1-844-250-EASE</a>
                    </div>
                    <div className="card apply-sidebar__card">
                        <h3>✅ What to Expect</h3>
                        <ul className="apply-sidebar__list">
                            <li>📧 Confirmation email immediately</li>
                            <li>📞 Advisor call within 4 business hours</li>
                            <li>⚡ Decision within 24 hours</li>
                            <li>💰 Funding once approved</li>
                        </ul>
                    </div>
                    <div className="card apply-sidebar__card">
                        <h3>🛡️ Your Privacy</h3>
                        <p>Your information is encrypted and never sold. We only use it to process your financing request.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ReviewSection({ title, children }) {
    return (
        <div className="review-section">
            <h4 className="review-section__title">{title}</h4>
            {children}
        </div>
    )
}

function ReviewRow({ label, value }) {
    return (
        <div className="review-row">
            <span className="review-row__label">{label}</span>
            <span className="review-row__value">{value || '—'}</span>
        </div>
    )
}
