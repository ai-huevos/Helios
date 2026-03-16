import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SynthesisHero from './components/SynthesisHero'
import SynthesisGrid from './components/SynthesisGrid'
import './styles/design-system.css'

const App = () => {
    const { scrollY } = useScroll()
    const [scrolled, setScrolled] = useState(false)
    const headerBorder = useTransform(scrollY, [0, 50], ["rgba(255,255,255,0)", "rgba(255,255,255,0.1)"])

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', color: 'var(--text-primary)' }}>

            {/* Sticky, Blurred Header */}
            <motion.header
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    padding: '24px 48px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    zIndex: 100,
                    background: scrolled ? 'rgba(3,1,2,0.8)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(12px)' : 'none',
                    borderBottom: '1px solid',
                    borderColor: headerBorder
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '20px', fontWeight: 700 }}>
                    <div style={{ width: '32px', height: '40px', background: 'var(--yellow)', borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}></div>
                    AI Huevos
                </div>

                <nav style={{ display: 'flex', gap: '32px' }}>
                    {['Soluciones', 'Casos', 'Nosotros'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            style={{
                                color: 'var(--white)',
                                textDecoration: 'none',
                                fontSize: '14px',
                                fontWeight: 500,
                                opacity: 0.8,
                                transition: 'opacity 0.2s'
                            }}
                        >
                            {item}
                        </a>
                    ))}
                    <a
                        href="#contacto"
                        style={{
                            color: 'var(--yellow)',
                            textDecoration: 'none',
                            fontSize: '14px',
                            fontWeight: 600
                        }}
                    >
                        Contacto
                    </a>
                </nav>
            </motion.header>

            <main>
                <SynthesisHero />
                <SynthesisGrid />

                {/* Footer (Simple) */}
                <footer style={{
                    borderTop: '1px solid var(--border-color)',
                    padding: '48px',
                    textAlign: 'center',
                    marginTop: '80px',
                    color: 'var(--text-secondary)',
                    fontSize: '14px'
                }}>
                    <p>© 2025 AI Huevos | Hecho con coraje 🥚</p>
                </footer>
            </main>
        </div>
    )
}

export default App
