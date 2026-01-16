import React, { useState, useEffect } from 'react'
import { Moon, Sun, Globe } from 'lucide-react'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import Hero from './components/Hero'
import PitchSection from './components/PitchSection'
import OpportunityExplorer from './components/OpportunityExplorer'
import SuccessCases from './components/SuccessCases'

const AppContent = () => {
    const [theme, setTheme] = useState('light')
    const { language, toggleLanguage, t } = useLanguage()

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }

    return (
        <div className="investor-room" style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', transition: 'background-color 0.2s ease' }}>

            {/* Navigation */}
            <nav style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '80px',
                backgroundColor: theme === 'light' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.8)',
                backdropFilter: 'blur(10px)',
                zIndex: 1000,
                borderBottom: '1px solid var(--border-color)',
                transition: 'background-color 0.2s ease, border-color 0.2s ease'
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
                    <div style={{ fontWeight: 800, fontSize: '24px', color: 'var(--text-primary)' }}>🥚 AI Huevos</div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                        <div style={{ display: 'flex', gap: '24px' }} className="font-mono">
                            <NavLink href="#pitch">{t.nav.pitch}</NavLink>
                            <NavLink href="#opportunity">{t.nav.opportunity}</NavLink>
                            <NavLink href="#cases">{t.nav.cases}</NavLink>
                        </div>

                        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                            {/* Language Toggle */}
                            <button
                                onClick={toggleLanguage}
                                className="font-mono"
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: 'var(--text-primary)',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    opacity: 0.8,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '4px'
                                }}
                            >
                                <Globe size={16} />
                                {language === 'en' ? 'ES' : 'EN'}
                            </button>

                            <div style={{ width: '1px', height: '14px', backgroundColor: 'var(--border-color)' }}></div>

                            <button
                                onClick={toggleTheme}
                                aria-label="Toggle theme"
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: 'var(--text-primary)',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                            </button>

                            <button style={{
                                backgroundColor: 'var(--text-primary)',
                                color: 'var(--bg-primary)',
                                border: 'none',
                                padding: '10px 24px',
                                borderRadius: '50px',
                                cursor: 'pointer',
                                fontWeight: 600,
                                fontSize: '14px'
                            }}>
                                {t.nav.contact}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main>
                <Hero />
                <PitchSection />
                <OpportunityExplorer />
                <SuccessCases />
            </main>

            <footer style={{ backgroundColor: '#000000', color: '#FFFFFF', padding: '100px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
                        <div>
                            <h2 style={{ fontSize: '48px', marginBottom: '24px', lineHeight: 1.1 }}>{t.footer.ready}</h2>
                            <p style={{ opacity: 0.6, fontSize: '18px', marginBottom: '40px', maxWidth: '400px' }}>
                                {t.footer.join}
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <a href="mailto:daniel@aihuevos.com" className="font-mono" style={{ textDecoration: 'underline', fontSize: '18px' }}>daniel@aihuevos.com</a>
                                <span className="font-mono" style={{ opacity: 0.5, fontSize: '14px' }}>Bogotá • Mexico City • Miami</span>
                            </div>
                        </div>

                        <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '80px', marginBottom: '20px' }}>🥚</div>
                            <div className="font-mono" style={{ opacity: 0.4, marginBottom: '8px' }}>{t.footer.rights}</div>
                            <div className="font-mono" style={{ opacity: 0.3, fontSize: '12px', whiteSpace: 'pre-line' }}>
                                {t.footer.version}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

function App() {
    return (
        <LanguageProvider>
            <AppContent />
        </LanguageProvider>
    )
}

const NavLink = ({ href, children }) => (
    <a
        href={href}
        style={{
            color: 'var(--text-primary)',
            fontSize: '14px',
            fontWeight: 500,
            opacity: 0.8,
            transition: 'opacity 0.2s'
        }}
        onMouseEnter={(e) => e.target.style.opacity = '1'}
        onMouseLeave={(e) => e.target.style.opacity = '0.8'}
    >
        {children}
    </a>
)

export default App
