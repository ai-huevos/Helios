import React from 'react'
import { motion } from 'framer-motion'

const Solution = () => {
    const pillars = [
        {
            icon: '🔍',
            title: 'FIND',
            color: 'var(--blue)',
            features: [
                'Entrevistamos a tu equipo vía WhatsApp y en persona',
                'Mapeamos todos los procesos',
                'Encontramos dónde se pierde dinero, tiempo, o clientes'
            ],
            deliverables: [
                'Diagnóstico completo',
                'Mapa de la empresa real',
                'Oportunidades priorizadas'
            ]
        },
        {
            icon: '🔧',
            title: 'FIX',
            color: 'var(--yellow)',
            features: [
                'Construimos automatizaciones que hacen el trabajo aburrido',
                'En semanas, no meses'
            ],
            deliverables: [
                'De conversaciones a procesos',
                'De procesos a desarrollo',
                'De desarrollo a MVP'
            ]
        },
        {
            icon: '📈',
            title: 'IMPROVE',
            color: 'var(--violet)',
            features: [
                'Tu gente da feedback',
                'Nosotros mejoramos',
                'El sistema se vuelve más inteligente cada día'
            ],
            deliverables: [
                'Human-in-the-Loop',
                'Mejora continua',
                'AI Director'
            ]
        }
    ]

    return (
        <section id="solucion" style={{
            padding: '120px 48px',
            background: 'var(--bg-primary)',
            color: 'var(--white)'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                {/* Section Label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        fontSize: '14px',
                        fontWeight: 600,
                        color: 'var(--yellow)',
                        marginBottom: '16px',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase'
                    }}
                >
                    La Solución
                </motion.div>

                {/* Headline */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    style={{
                        fontSize: '48px',
                        fontWeight: 700,
                        marginBottom: '24px',
                        lineHeight: 1.2
                    }}
                >
                    Construimos los rieles para que<br />
                    fluya la información
                </motion.h2>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    style={{
                        fontSize: '20px',
                        color: 'var(--text-secondary)',
                        marginBottom: '64px',
                        maxWidth: '800px'
                    }}
                >
                    Piensa en nosotros como un director de operaciones que habla con todos,{' '}
                    encuentra los problemas reales, y los arregla. No con más reuniones.{' '}
                    <span style={{ color: 'var(--yellow)' }}>Con tecnología que funciona.</span>
                </motion.p>

                {/* The 3 Pillars */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + index * 0.15 }}
                            style={{
                                padding: '40px',
                                background: 'var(--bg-secondary)',
                                borderRadius: '16px',
                                border: `2px solid ${pillar.color}`,
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            {/* Gradient overlay */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '4px',
                                background: pillar.color
                            }} />

                            {/* Icon */}
                            <div style={{ fontSize: '40px', marginBottom: '16px' }}>{pillar.icon}</div>

                            {/* Title */}
                            <h3 style={{
                                fontSize: '24px',
                                fontWeight: 700,
                                marginBottom: '24px',
                                color: pillar.color
                            }}>
                                {pillar.title}
                            </h3>

                            {/* Features */}
                            <div style={{ marginBottom: '32px' }}>
                                {pillar.features.map((feature, i) => (
                                    <p key={i} style={{
                                        fontSize: '15px',
                                        color: 'var(--text-secondary)',
                                        marginBottom: '12px',
                                        lineHeight: 1.6
                                    }}>
                                        {feature}
                                    </p>
                                ))}
                            </div>

                            {/* Deliverables */}
                            <div style={{
                                borderTop: '1px solid var(--border-color)',
                                paddingTop: '24px'
                            }}>
                                {pillar.deliverables.map((item, i) => (
                                    <div key={i} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        marginBottom: '8px',
                                        fontSize: '14px',
                                        color: 'var(--text-secondary)'
                                    }}>
                                        <span style={{ color: pillar.color }}>→</span>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Solution
