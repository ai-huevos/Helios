import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'

const Layout = ({ children }) => {
    const { scrollY } = useScroll()
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()
    const headerBorder = useTransform(scrollY, [0, 50], ["rgba(255,255,255,0)", "rgba(255,255,255,0.1)"])

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const isHomepage = location.pathname === '/'

    return (
        <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', color: 'var(--text-primary)' }}>
            {/* Sticky Header */}
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
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '20px', fontWeight: 700, textDecoration: 'none', color: 'var(--white)' }}>
                    <div style={{ width: '32px', height: '40px', background: 'var(--yellow)', borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}></div>
                    AI Huevos
                </Link>

                <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
                    {isHomepage && (
                        <>
                            {['Solución', 'Casos', 'Equipo', 'Precios'].map((item) => (
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
                                    onMouseEnter={(e) => e.target.style.opacity = '1'}
                                    onMouseLeave={(e) => e.target.style.opacity = '0.8'}
                                >
                                    {item}
                                </a>
                            ))}
                        </>
                    )}
                    <Link
                        to="/inversionistas"
                        style={{
                            color: 'var(--yellow)',
                            textDecoration: 'none',
                            fontSize: '14px',
                            fontWeight: 600
                        }}
                    >
                        Inversionistas
                    </Link>
                    <a
                        href="#contacto"
                        style={{
                            background: 'var(--orange)',
                            color: 'var(--white)',
                            padding: '10px 24px',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            fontSize: '14px',
                            fontWeight: 600,
                            transition: 'transform 0.2s'
                        }}
                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    >
                        Contacto
                    </a>
                </nav>
            </motion.header>

            {/* Main Content */}
            <main>
                {children}
            </main>

            {/* Footer */}
            <footer style={{
                borderTop: '1px solid var(--border-color)',
                padding: '64px 48px',
                marginTop: '80px',
                background: 'var(--bg-secondary)'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '48px' }}>
                    {/* Logo + Tagline */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                            <div style={{ width: '32px', height: '40px', background: 'var(--yellow)', borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}></div>
                            <span style={{ fontSize: '18px', fontWeight: 700 }}>AI Huevos</span>
                        </div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6 }}>
                            Entrevistamos.<br />
                            Encontramos.<br />
                            Arreglamos.<br />
                            Nos quedamos.
                        </p>
                    </div>

                    {/* Producto */}
                    <div>
                        <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '16px', color: 'var(--yellow)' }}>Producto</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {['El Checkup', 'El Fix', 'Director AI', 'Casos'].map(item => (
                                <li key={item} style={{ marginBottom: '12px' }}>
                                    <a href={`#${item.toLowerCase().replace(/ /g, '-')}`} style={{ color: 'var(--text-secondary)', fontSize: '14px', textDecoration: 'none' }}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Empresa */}
                    <div>
                        <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '16px', color: 'var(--yellow)' }}>Empresa</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {['Sobre nosotros', 'Equipo', 'Blog', 'Contacto'].map(item => (
                                <li key={item} style={{ marginBottom: '12px' }}>
                                    <a href={`#${item.toLowerCase().replace(/ /g, '-')}`} style={{ color: 'var(--text-secondary)', fontSize: '14px', textDecoration: 'none' }}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '16px', color: 'var(--yellow)' }}>Contacto</h4>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.8 }}>
                            Daniel Cardona<br />
                            <a href="mailto:daniel@aihuevos.com" style={{ color: 'var(--yellow)', textDecoration: 'none' }}>
                                daniel@aihuevos.com
                            </a>
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{ maxWidth: '1200px', margin: '48px auto 0', paddingTop: '32px', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                        © 2026 AI Huevos | Pa' emprender se necesitan huevos 🥚
                    </p>
                    <div style={{ display: 'flex', gap: '24px' }}>
                        <a href="#privacidad" style={{ color: 'var(--text-secondary)', fontSize: '14px', textDecoration: 'none' }}>Privacidad</a>
                        <a href="#terminos" style={{ color: 'var(--text-secondary)', fontSize: '14px', textDecoration: 'none' }}>Términos</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Layout
