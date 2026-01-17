import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import '../styles/design-system.css'

const SynthesisHero = () => {
    return (
        <section style={{
            position: 'relative',
            minHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            textAlign: 'center',
            padding: '20px'
        }}>
            {/* Background Glows (Visionary) */}
            <div style={{
                position: 'absolute',
                top: '-300px',
                right: '-200px',
                width: '600px',
                height: '700px',
                background: 'radial-gradient(ellipse, rgba(255,216,38,0.15) 0%, transparent 70%)',
                zIndex: 0
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '-200px',
                left: '-100px',
                width: '400px',
                height: '500px',
                background: 'radial-gradient(ellipse, rgba(57,136,255,0.1) 0%, transparent 70%)',
                zIndex: 0
            }}></div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ zIndex: 1, maxWidth: '900px' }}
            >
                <h1 style={{
                    fontSize: 'clamp(48px, 6vw, 84px)',
                    fontWeight: 700,
                    lineHeight: 1.1,
                    margin: '0 0 24px 0',
                    letterSpacing: '-0.02em',
                    color: 'var(--text-primary)'
                }}>
                    Pa' emprender se necesitan <span className="text-yellow" style={{ position: 'relative' }}>huevos</span>.
                </h1>

                <p style={{
                    fontSize: 'clamp(18px, 2vw, 24px)',
                    color: 'var(--text-secondary)',
                    maxWidth: '650px',
                    margin: '0 auto 48px auto',
                    lineHeight: 1.5
                }}>
                    Transformamos equipos comerciales con agentes de IA que automatizan <span className="text-white">prospección, investigación y análisis</span>.
                </p>

                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            background: 'var(--yellow)',
                            color: 'var(--bg-primary)',
                            padding: '16px 48px',
                            fontSize: '18px',
                            fontWeight: 700,
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}
                    >
                        Agenda una demo <ArrowUpRight size={20} />
                    </motion.button>
                    <motion.button
                        whileHover={{ borderColor: 'var(--blue)', color: 'var(--blue)' }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            background: 'transparent',
                            color: 'var(--white)',
                            padding: '16px 48px',
                            fontSize: '18px',
                            fontWeight: 700,
                            border: '2px solid rgba(255,255,255,0.2)',
                            borderRadius: '8px',
                            cursor: 'pointer'
                        }}
                    >
                        Ver casos de éxito
                    </motion.button>
                </div>
            </motion.div>
        </section>
    )
}

export default SynthesisHero
