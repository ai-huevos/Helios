import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Hero = () => {
    const { t } = useLanguage()

    return (
        <section style={{
            minHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingTop: '80px',
            position: 'relative',
            overflow: 'hidden'
        }}>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 style={{
                        fontSize: 'clamp(48px, 6vw, 96px)',
                        letterSpacing: '-0.04em',
                        lineHeight: 0.95,
                        marginBottom: '32px',
                        maxWidth: '1200px',
                        color: 'var(--text-primary)'
                    }}>
                        {t.hero.title}
                    </h1>

                    <p style={{
                        fontSize: 'clamp(18px, 2vw, 24px)',
                        maxWidth: '600px',
                        marginBottom: '48px',
                        opacity: 0.7,
                        color: 'var(--text-primary)'
                    }}>
                        {t.hero.subtitle}
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                            backgroundColor: 'var(--text-primary)',
                            color: 'var(--bg-primary)',
                            border: 'none',
                            padding: '16px 32px',
                            borderRadius: '50px',
                            fontSize: '16px',
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}
                    >
                        {t.hero.cta} <ArrowRight size={20} />
                    </motion.button>
                </motion.div>
            </div>

            {/* Decorative Egg */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    right: '-5%',
                    top: '20%',
                    fontSize: '400px',
                    opacity: 0.05,
                    zIndex: 1,
                    pointerEvents: 'none'
                }}
            >
                🥚
            </motion.div>

        </section>
    )
}

export default Hero
