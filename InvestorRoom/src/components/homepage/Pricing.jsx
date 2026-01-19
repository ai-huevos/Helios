import React from 'react'
import { motion } from 'framer-motion'

const Pricing = () => {
    const tiers = [
        {
            name: 'El Checkup',
            price: '$5-15K',
            subtitle: 'Entry point',
            features: [
                'Entrevistas con tu equipo',
                'Mapa de procesos',
                'Lista de sistemas y % de uso',
                'Oportunidades priorizadas'
            ],
            cta: 'Empezar aquí',
            highlighted: false,
            color: 'var(--blue)'
        },
        {
            name: 'El Fix',
            price: '$15-50K',
            subtitle: 'Por proceso',
            features: [
                'Automatizaciones funcionando en 2-3 semanas',
                'Cada una mejora sola',
                'Feedback loop con tu equipo',
                '2-8 semanas de implementación'
            ],
            cta: 'Cotizar',
            highlighted: true,
            color: 'var(--yellow)'
        },
        {
            name: 'Director AI',
            price: '$10-20',
            subtitle: 'Por usuario/mes',
            features: [
                'Conocimiento centralizado',
                'Preguntas = Respuestas instantáneas',
                'Onboarding 10x más rápido',
                'Sistema que aprende continuamente'
            ],
            cta: 'Saber más',
            highlighted: false,
            color: 'var(--violet)'
        }
    ]

    return (
        <section id="precios" style={{
            padding: '120px 48px',
            background: 'var(--white)',
            color: 'var(--black)'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '64px' }}
                >
                    <h2 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '16px' }}>
                        Precios claros
                    </h2>
                    <p style={{ fontSize: '20px', color: '#666' }}>
                        Sin sorpresas. Sabes exactamente qué obtienes.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                padding: '40px',
                                background: tier.highlighted ? 'var(--bg-primary)' : '#f5f5f5',
                                borderRadius: '16px',
                                border: tier.highlighted ? `3px solid ${tier.color}` : '1px solid #e0e0e0',
                                position: 'relative',
                                transform: tier.highlighted ? 'scale(1.05)' : 'scale(1)',
                                color: tier.highlighted ? 'var(--white)' : 'var(--black)'
                            }}
                        >
                            {/* Popular badge */}
                            {tier.highlighted && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-12px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: tier.color,
                                    color: 'var(--black)',
                                    padding: '6px 16px',
                                    borderRadius: '20px',
                                    fontSize: '12px',
                                    fontWeight: 700,
                                    letterSpacing: '0.05em'
                                }}>
                                    MÁS POPULAR
                                </div>
                            )}

                            {/* Tier name */}
                            <h3 style={{
                                fontSize: '24px',
                                fontWeight: 700,
                                marginBottom: '8px',
                                color: tier.highlighted ? tier.color : tier.color
                            }}>
                                {tier.name}
                            </h3>

                            {/* Price */}
                            <div style={{
                                fontSize: '48px',
                                fontWeight: 700,
                                marginBottom: '8px',
                                color: tier.highlighted ? 'var(--white)' : 'var(--black)'
                            }}>
                                {tier.price}
                            </div>

                            {/* Subtitle */}
                            <p style={{
                                fontSize: '14px',
                                color: tier.highlighted ? 'rgba(255,255,255,0.7)' : '#666',
                                marginBottom: '32px',
                                paddingBottom: '24px',
                                borderBottom: `1px solid ${tier.highlighted ? 'rgba(255,255,255,0.1)' : '#e0e0e0'}`
                            }}>
                                {tier.subtitle}
                            </p>

                            {/* Features */}
                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px' }}>
                                {tier.features.map((feature, i) => (
                                    <li key={i} style={{
                                        marginBottom: '12px',
                                        fontSize: '15px',
                                        lineHeight: 1.6,
                                        color: tier.highlighted ? 'rgba(255,255,255,0.9)' : '#333',
                                        display: 'flex',
                                        gap: '8px'
                                    }}>
                                        <span style={{ color: tier.color, fontWeight: 700 }}>✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <a
                                href="#contacto"
                                style={{
                                    display: 'block',
                                    textAlign: 'center',
                                    padding: '14px',
                                    background: tier.highlighted ? tier.color : 'var(--black)',
                                    color: tier.highlighted ? 'var(--black)' : 'var(--white)',
                                    borderRadius: '8px',
                                    textDecoration: 'none',
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    transition: 'transform 0.2s, box-shadow 0.2s'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = 'translateY(-2px)'
                                    e.target.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)'
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = 'translateY(0)'
                                    e.target.style.boxShadow = 'none'
                                }}
                            >
                                {tier.cta}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing
