import React, { useState, useEffect } from 'react'
import { Moon, Sun, Globe, ArrowRight, TrendingUp, Users, ShieldCheck } from 'lucide-react'
import { useLanguage } from './context/LanguageContext'
import './styles/polish.css'

// Option A: The "Polish" Layout
// Refined, Safe, Production-Ready

const AppPolish = () => {
    const [theme, setTheme] = useState('light')
    const { language, toggleLanguage, t } = useLanguage()
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }

    return (
        <div className="polish-wrapper">
            <nav className={`polish-header ${scrolled ? 'scrolled' : ''}`}>
                <div className="polish-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <div style={{ fontWeight: 800, fontSize: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span>🥚</span> AI Huevos
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
                        <div style={{ display: 'flex', gap: '32px' }}>
                            <a href="#pitch" className="polish-nav-link active">Pitch</a>
                            <a href="#opportunity" className="polish-nav-link">Opportunity</a>
                            <a href="#cases" className="polish-nav-link">Cases</a>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <button onClick={toggleLanguage} style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '14px', color: 'var(--text-primary)' }}>
                                {language === 'en' ? 'ES' : 'EN'}
                            </button>
                            <button onClick={toggleTheme} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)' }}>
                                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                            </button>
                            <button className="polish-btn-primary">
                                Contact
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main style={{ marginTop: '80px' }}>
                {/* Refined Hero */}
                <section className="polish-section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
                    <div className="polish-container">
                        <div style={{ maxWidth: '800px' }}>
                            <span style={{ color: 'var(--blue)', fontWeight: 600, marginBottom: '16px', display: 'block' }}>INVESTOR ROOM 2026</span>
                            <h1 className="polish-h1">
                                Automating the logic of <br />
                                LatAm's physical industries.
                            </h1>
                            <p style={{ fontSize: '20px', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '600px', marginBottom: '40px' }}>
                                We replace operational chaos with AI-native workflows.
                                Trusted by Metro, Kikes, and 50+ family offices.
                            </p>
                            <div style={{ display: 'flex', gap: '16px' }}>
                                <button className="polish-btn-primary" style={{ padding: '16px 32px', fontSize: '16px' }}>
                                    View Pitch Deck
                                </button>
                                <button style={{ padding: '16px 32px', fontSize: '16px', border: '1px solid var(--border-color)', borderRadius: '50px', background: 'transparent', color: 'var(--text-primary)', cursor: 'pointer', fontWeight: 600 }}>
                                    Explore Data
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Refined Metrics */}
                <section className="polish-section" style={{ background: 'var(--bg-secondary)' }}>
                    <div className="polish-container">
                        <h2 className="polish-h2" style={{ textAlign: 'center', marginBottom: '60px' }}>By The Numbers</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div className="polish-kpi-value">$15.2B</div>
                                <div className="polish-kpi-label">Serviceable Market</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div className="polish-kpi-value">55%</div>
                                <div className="polish-kpi-label">Gross Margin</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div className="polish-kpi-value">12mo</div>
                                <div className="polish-kpi-label">Payback Period</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div className="polish-kpi-value">8-15</div>
                                <div className="polish-kpi-label">Anchor Clients</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Refined Cards */}
                <section className="polish-section">
                    <div className="polish-container">
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
                            <div className="polish-card">
                                <TrendingUp size={32} color="var(--blue)" style={{ marginBottom: '24px' }} />
                                <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>Market Opportunity</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>Deep dive into the TAM/SAM for AI services in Latin America.</p>
                                <div style={{ marginTop: '24px', fontWeight: 600, color: 'var(--blue)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    Learn more <ArrowRight size={16} />
                                </div>
                            </div>
                            <div className="polish-card">
                                <Users size={32} color="var(--purple)" style={{ marginBottom: '24px' }} />
                                <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>Team Structure</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>Meet the engineers and operators behind the automation.</p>
                                <div style={{ marginTop: '24px', fontWeight: 600, color: 'var(--blue)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    Meet us <ArrowRight size={16} />
                                </div>
                            </div>
                            <div className="polish-card">
                                <ShieldCheck size={32} color="var(--green)" style={{ marginBottom: '24px' }} />
                                <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>Case Studies</h3>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>Real results from live implementations in Hotel & Agro.</p>
                                <div style={{ marginTop: '24px', fontWeight: 600, color: 'var(--blue)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    Read cases <ArrowRight size={16} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default AppPolish
