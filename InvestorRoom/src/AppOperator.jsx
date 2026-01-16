import React, { useState, useEffect } from 'react'
import { Moon, Sun, Globe, ArrowUpRight, ChevronRight, BarChart3, Users, Zap, LayoutGrid } from 'lucide-react'
import { useLanguage } from './context/LanguageContext'
import './styles/operator.css'

// Option B: The "Operator" Layout
// Dense, Tool-like, High Contrast

const AppOperator = () => {
    const [theme, setTheme] = useState('light')
    const { language, toggleLanguage, t } = useLanguage()

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }

    return (
        <div className="op-wrapper">
            {/* 1. Header: Sticky, Blurred, Bordered */}
            <nav className="op-header">
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ fontSize: '20px' }}>🥚</div>
                        <span className="op-font-mono" style={{ fontWeight: 600, fontSize: '14px' }}>AI HUEVOS // INVESTOR_ROOM</span>
                        <span className="op-badge" style={{ marginLeft: '12px' }}>
                            <span className="op-dot green"></span>
                            LIVE
                        </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                        <a href="#market" className="op-nav-link active">01_Market</a>
                        <a href="#traction" className="op-nav-link">02_Traction</a>
                        <a href="#roadmap" className="op-nav-link">03_Roadmap</a>

                        <div style={{ width: '1px', height: '16px', background: 'var(--border-color)' }}></div>

                        <button onClick={toggleLanguage} className="op-nav-link" style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                            {language === 'en' ? 'ES' : 'EN'}
                        </button>
                        <button onClick={toggleTheme} className="op-icon-box" style={{ cursor: 'pointer' }}>
                            {theme === 'light' ? <Moon size={14} /> : <Sun size={14} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* 2. Main Grid Layout */}
            <main className="op-main">

                {/* Hero Grid */}
                <div className="op-grid-hero">
                    <div className="op-hero-content">
                        <div className="op-label">Investment Memo 2026</div>
                        <h1 className="op-h1">The Operating System for <br />LatAm's Family Offices.</h1>
                        <p style={{ maxWidth: '500px', fontSize: '18px', color: 'var(--text-secondary)', marginTop: '16px' }}>
                            AI Huevos transforms legacy operational chaos into automated revenue engines. Diagnostic-led, AI-native.
                        </p>

                        <div style={{ display: 'flex', gap: '12px', marginTop: '32px' }}>
                            <button className="op-btn">Read Memo <ArrowUpRight size={14} style={{ display: 'inline', marginLeft: '4px' }} /></button>
                            <button className="op-btn-outline" style={{ padding: '10px 20px', borderRadius: '2px' }}>Download Deck</button>
                        </div>
                    </div>

                    {/* Right Side: Data Density */}
                    <div className="op-hero-kpi">
                        <div className="op-kpi-item">
                            <span className="op-label">Addressable Market (SAM)</span>
                            <span className="op-value">$300M - $1B</span>
                            <span style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px' }}>Mid-market LatAm</span>
                        </div>
                        <div className="op-kpi-item">
                            <span className="op-label">Target Margin</span>
                            <span className="op-value">50-60%</span>
                            <span style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px' }}>Service + SaaS mix</span>
                        </div>
                        <div className="op-kpi-item">
                            <span className="op-label">Payback Period</span>
                            <span className="op-value">12-18 Mo</span>
                            <span style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '4px' }}>Proven efficiency</span>
                        </div>
                    </div>
                </div>

                {/* Section: Opportunity */}
                <div style={{ marginBottom: '80px' }}>
                    <div className="op-section-header">
                        <h2 className="op-section-title">01_The_Opportunity</h2>
                        <span className="op-font-mono" style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>UPDATED: JAN 2026</span>
                    </div>

                    <div className="op-grid-cards">
                        <div className="op-card">
                            <div className="op-card-header">
                                <div className="op-icon-box"><BarChart3 size={16} /></div>
                                <ArrowUpRight size={16} color="var(--text-secondary)" />
                            </div>
                            <h3 style={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>Market Sizing</h3>
                            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                                Interactive model of the $15.2B LatAm AI Services market.
                            </p>
                            <div style={{ marginTop: 'auto' }}>
                                <div className="op-label">TAM</div>
                                <div style={{ fontSize: '20px', fontWeight: 600 }}>$15.2B</div>
                            </div>
                        </div>

                        <div className="op-card">
                            <div className="op-card-header">
                                <div className="op-icon-box"><Users size={16} /></div>
                                <ArrowUpRight size={16} color="var(--text-secondary)" />
                            </div>
                            <h3 style={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>Competitors</h3>
                            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                                Analysis of 10+ competitors. Why consultants fail & boutiques can't scale.
                            </p>
                            <div style={{ marginTop: 'auto' }}>
                                <div className="op-label">Threat Level</div>
                                <div style={{ fontSize: '20px', fontWeight: 600, color: 'var(--orange)' }}>LOW/MED</div>
                            </div>
                        </div>

                        <div className="op-card">
                            <div className="op-card-header">
                                <div className="op-icon-box"><Zap size={16} /></div>
                                <ArrowUpRight size={16} color="var(--text-secondary)" />
                            </div>
                            <h3 style={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>Unit Economics</h3>
                            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                                Margin breakdown per diagnostic and implementation loop.
                            </p>
                            <div style={{ marginTop: 'auto' }}>
                                <div className="op-label">Gross Margin</div>
                                <div style={{ fontSize: '20px', fontWeight: 600, color: 'var(--green)' }}>55%</div>
                            </div>
                        </div>
                        <div className="op-card" style={{ borderStyle: 'dashed', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
                            <div style={{ color: 'var(--text-secondary)', fontSize: '13px' }} className="op-font-mono">+ VIEW ALL DATA</div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AppOperator
