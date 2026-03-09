import { Link } from 'react-router-dom'
import './Blog.css'

const POSTS = [
    {
        slug: 'equipment-leasing-vs-financing',
        category: 'Finance 101',
        title: 'Equipment Leasing vs. Financing: Which is Right for Your Business?',
        excerpt: 'Both leasing and financing let you get the equipment you need without paying the full cost upfront. But the right choice depends on your cash flow, tax strategy, and how long you plan to keep the equipment.',
        date: 'February 14, 2025',
        readTime: '6 min read',
        icon: '📊',
    },
    {
        slug: 'construction-equipment-financing-canada',
        category: 'Construction',
        title: 'How to Finance Construction Equipment in Canada: A Complete Guide',
        excerpt: 'Construction projects move fast. Your equipment financing should too. Here\'s everything you need to know about securing the heavy equipment your business needs — from excavators to cranes.',
        date: 'January 28, 2025',
        readTime: '8 min read',
        icon: '🏗️',
    },
    {
        slug: 'truck-financing-owner-operator',
        category: 'Transportation',
        title: 'Semi-Truck Financing for Owner-Operators: What No One Tells You',
        excerpt: 'Getting your first truck — or adding to your fleet — is one of the biggest decisions you\'ll make. We break down the real costs, terms, and options that lenders won\'t always spell out upfront.',
        date: 'January 10, 2025',
        readTime: '7 min read',
        icon: '🚛',
    },
    {
        slug: 'improve-approval-chances-equipment-loan',
        category: 'Tips & Advice',
        title: '5 Ways to Improve Your Chances of Equipment Loan Approval',
        excerpt: 'Not all lenders are the same — but these five steps will strengthen any application and help you secure better rates, longer terms, and a smoother approval process.',
        date: 'December 5, 2024',
        readTime: '5 min read',
        icon: '✅',
    },
    {
        slug: 'medical-equipment-financing-dental',
        category: 'Medical & Dental',
        title: 'Financing Medical & Dental Equipment: A Practitioner\'s Guide',
        excerpt: 'Modern medical practices run on modern technology. Here\'s how to structure an equipment lease that fits your practice revenue cycle without straining your cash flow.',
        date: 'November 20, 2024',
        readTime: '6 min read',
        icon: '🦷',
    },
    {
        slug: 'agriculture-equipment-lease-seasonal',
        category: 'Agriculture',
        title: 'Seasonal Lease Structures for Agricultural Equipment',
        excerpt: 'Farming cash flow is seasonal — your lease payments should be too. We explain how seasonal payment structures work and why they\'re ideal for combines, tractors, and precision ag equipment.',
        date: 'October 15, 2024',
        readTime: '5 min read',
        icon: '🚜',
    },
]

export default function Blog() {
    return (
        <div className="page blog-page">
            <section className="page-hero-blog section">
                <div className="container">
                    <div className="badge">Resources</div>
                    <h1 className="section-title" style={{ marginTop: '16px', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                        Equipment Financing<br /><span style={{ color: 'var(--orange)' }}>Knowledge Hub</span>
                    </h1>
                    <p className="section-subtitle" style={{ maxWidth: '580px' }}>
                        Practical guides for Canadian business owners on leasing, financing, and growing with the right equipment.
                    </p>
                </div>
            </section>

            <section className="section" style={{ paddingTop: '56px' }}>
                <div className="container">
                    <div className="blog-grid">
                        {POSTS.map(post => (
                            <article key={post.slug} className="card blog-card">
                                <div className="blog-card__icon">{post.icon}</div>
                                <div className="badge blog-card__cat">{post.category}</div>
                                <h2 className="blog-card__title">{post.title}</h2>
                                <p className="blog-card__excerpt">{post.excerpt}</p>
                                <div className="blog-card__footer">
                                    <span className="blog-card__meta">{post.date} · {post.readTime}</span>
                                    <span className="btn-ghost">Read article →</span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="section-sm blog-newsletter">
                <div className="container blog-newsletter__inner">
                    <div>
                        <h2 className="section-title" style={{ fontSize: '1.8rem' }}>Stay Informed</h2>
                        <p style={{ color: 'var(--text-muted)', marginTop: '8px', fontSize: '0.95rem' }}>Equipment news, financing tips, and industry guides — delivered monthly.</p>
                    </div>
                    <div className="blog-newsletter__form">
                        <input type="email" placeholder="your@email.ca" className="blog-newsletter__input" />
                        <button className="btn-primary">Subscribe</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
