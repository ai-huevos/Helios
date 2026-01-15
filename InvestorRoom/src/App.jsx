import React from 'react'
import Hero from './components/Hero'
import PitchDeck from './components/PitchDeck'
import OpportunityExplorer from './components/OpportunityExplorer'
import CaseStudies from './components/CaseStudies'

function App() {
    return (
        <div className="investor-room">
            {/* Navigation */}
            <nav style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '80px',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                zIndex: 1000,
                borderBottom: '1px solid #eee'
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
                    <div style={{ fontWeight: 800, fontSize: '24px' }}>🥚 AI Huevos</div>
                    <div style={{ display: 'flex', gap: '32px' }} className="font-mono">
                        <a href="#pitch">pitch</a>
                        <a href="#opportunity">oportunidad</a>
                        <a href="#cases">casos</a>
                        <button style={{
                            backgroundColor: 'var(--black)',
                            color: 'var(--white)',
                            border: 'none',
                            padding: '8px 24px',
                            borderRadius: '50px',
                            cursor: 'pointer'
                        }}>contactar</button>
                    </div>
                </div>
            </nav>

            <main>
                <Hero />
                <PitchDeck />
                <OpportunityExplorer />
                <CaseStudies />
            </main>

            <footer style={{ backgroundColor: 'var(--black)', color: 'white', padding: '80px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
                        <div>
                            <h2 style={{ fontSize: '48px', marginBottom: '24px' }}>Ready to hatch the future?</h2>
                            <p style={{ opacity: 0.6, fontSize: '18px', marginBottom: '40px' }}>
                                Join us in building the operating system for LatAm's complex enterprises.
                            </p>
                            <div style={{ display: 'flex', gap: '16px' }}>
                                <a href="mailto:daniel@aihuevos.com" className="font-mono" style={{ textDecoration: 'underline' }}>daniel@aihuevos.com</a>
                            </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '80px', marginBottom: '20px' }}>🥚</div>
                            <div className="font-mono" style={{ opacity: 0.4 }}>© 2026 AI Huevos LatAm. Built with eggs.</div>
                        </div>
                    </div>
                </div>
            </footer>

            <style>{`
        html { scroll-behavior: smooth; }
        a:hover { color: var(--blue); }
      `}</style>
        </div>
    )
}

export default App
