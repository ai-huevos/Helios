import React, { useEffect } from 'react'
import { ArrowUpRight, MessageSquare } from 'lucide-react'
import './styles/visionary.css'

// Option C: The "Visionary" Layout
// Big Type, Dark Mode, Minimalist

const AppVisionary = () => {

    useEffect(() => {
        // Force dark mode logic just in case
        document.documentElement.setAttribute('data-theme', 'dark')
    }, [])

    return (
        <div className="vis-wrapper">
            <header className="vis-header">
                <div className="vis-logo">AI HUEVOS.</div>
                <nav>
                    <a href="#vision" className="vis-nav-link">Vision</a>
                    <a href="#numbers" className="vis-nav-link">Numbers</a>
                    <a href="#invest" className="vis-nav-link">Invest</a>
                </nav>
            </header>

            <main>
                <section className="vis-hero-section">
                    <h1 className="vis-h1">
                        THE ERA OF <br />
                        AGENTS.
                    </h1>
                    <p className="vis-lead">
                        We build the operating systems that run Latin America's family offices. Autonomous. Intelligent. Inevitable.
                    </p>
                </section>

                <section className="vis-metrics-row">
                    <div className="vis-metric-item">
                        <div className="vis-metric-val">$1B</div>
                        <div className="vis-metric-label">Addressable</div>
                    </div>
                    <div className="vis-metric-item">
                        <div className="vis-metric-val">50x</div>
                        <div className="vis-metric-label">Efficiency</div>
                    </div>
                    <div className="vis-metric-item">
                        <div className="vis-metric-val">100%</div>
                        <div className="vis-metric-label">Operational</div>
                    </div>
                </section>

                <section className="vis-card-section">
                    <div className="vis-card">
                        <h2 className="vis-card-title">01 / The Opportunity</h2>
                        <p style={{ color: '#666', fontSize: '18px' }}>Markets are shifting. LatAm is ready.</p>
                        <div style={{ marginTop: '40px' }}><ArrowUpRight size={32} /></div>
                    </div>
                    <div className="vis-card">
                        <h2 className="vis-card-title">02 / The Product</h2>
                        <p style={{ color: '#666', fontSize: '18px' }}>See the agents in action.</p>
                        <div style={{ marginTop: '40px' }}><ArrowUpRight size={32} /></div>
                    </div>
                </section>
            </main>

            <div className="vis-btn-floating">
                <MessageSquare size={24} />
            </div>
        </div>
    )
}

export default AppVisionary
