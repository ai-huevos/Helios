import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--bg-primary)',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '80px'
        }}>
            {/* Gradient Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 50% 50%, rgba(255, 216, 38, 0.1) 0%, transparent 50%)',
                pointerEvents: 'none'
            }} />

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{
                        fontSize: '72px',
                        fontWeight: 700,
                        lineHeight: 1.1,
                        marginBottom: '24px',
                        letterSpacing: '-0.02em'
                    }}
                >
                    El mundo cambió.<br />
                    <span style={{ color: 'var(--yellow)' }}>Tu empresa no.</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        fontSize: '24px',
                        color: 'var(--text-secondary)',
                        maxWidth: '800px',
                        margin: '0 auto 48px',
                        lineHeight: 1.5
                    }}
                >
                    Entrevistamos a tu gente, encontramos qué está roto,{' '}
                    lo arreglamos con tecnología, y nos quedamos para seguir mejorando.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '64px' }}
                >
                    <a
                        href="#contacto"
                        style={{
                            background: 'var(--orange)',
                            color: 'var(--white)',
                            padding: '16px 32px',
                            borderRadius: '12px',
                            textDecoration: 'none',
                            fontSize: '16px',
                            fontWeight: 600,
                            transition: 'transform 0.2s, box-shadow 0.2s',
                            boxShadow: '0 4px 12px rgba(255, 107, 53, 0.3)'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'translateY(-2px)'
                            e.target.style.boxShadow = '0 8px 20px rgba(255, 107, 53, 0.4)'
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'translateY(0)'
                            e.target.style.boxShadow = '0 4px 12px rgba(255, 107, 53, 0.3)'
                        }}
                    >
                        Agenda una llamada
                    </a>
                    <a
                        href="#solucion"
                        style={{
                            background: 'transparent',
                            color: 'var(--white)',
                            padding: '16px 32px',
                            borderRadius: '12px',
                            textDecoration: 'none',
                            fontSize: '16px',
                            fontWeight: 600,
                            border: '2px solid var(--border-color)',
                            transition: 'border-color 0.2s, background 0.2s'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.borderColor = 'var(--yellow)'
                            e.target.style.background = 'rgba(255, 216, 38, 0.05)'
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.borderColor = 'var(--border-color)'
                            e.target.style.background = 'transparent'
                        }}
                    >
                        Ver cómo funciona
                    </a>
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    style={{
                        display: 'flex',
                        gap: '32px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '14px',
                        color: 'var(--text-secondary)',
                        flexWrap: 'wrap'
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ color: 'var(--yellow)' }}>✓</span>
                        Finkargo alumni
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ color: 'var(--yellow)' }}>✓</span>
                        $650M mercancía
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ color: 'var(--yellow)' }}>✓</span>
                        114 procesos automatizados
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
