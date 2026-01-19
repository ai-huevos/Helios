import React from 'react'
import { motion } from 'framer-motion'

const HowItWorks = () => {
    const steps = [
        {
            number: '1',
            title: 'HABLAMOS',
            description: 'Entrevistamos a tu equipo. WhatsApp, Slack, en persona. Escuchamos lo que la organización tiene que decir.',
            timeline: '2-4 semanas',
            color: 'var(--blue)'
        },
        {
            number: '2',
            title: 'ENCONTRAMOS',
            description: 'Mapeamos procesos, sistemas, y personas. Te damos la radiografía completa de tu empresa.',
            timeline: 'Incluido en diagnóstico',
            color: 'var(--yellow)'
        },
        {
            number: '3',
            title: 'ARREGLAMOS',
            description: 'Construimos automatizaciones que funcionan. Cada una se vuelve más inteligente con el tiempo.',
            timeline: '2-8 semanas por proceso',
            color: 'var(--violet)'
        },
        {
            number: '4',
            title: 'NOS QUEDAMOS',
            description: 'Director AI mantiene todo conectado. Acceso conversacional para toda tu gente.',
            timeline: 'Ongoing',
            color: 'var(--orange)'
        }
    ]

    return (
        <section id="como-funciona" style={{
            padding: '120px 48px',
            background: 'var(--white)',
            color: 'var(--black)'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        fontSize: '48px',
                        fontWeight: 700,
                        marginBottom: '64px',
                        textAlign: 'center'
                    }}
                >
                    Cómo funciona
                </motion.h2>

                <div style={{ position: 'relative' }}>
                    {/* Connecting line */}
                    <div style={{
                        position: 'absolute',
                        left: '40px',
                        top: '40px',
                        bottom: '40px',
                        width: '2px',
                        background: 'linear-gradient(to bottom, var(--blue), var(--yellow), var(--violet), var(--orange))',
                        opacity: 0.3
                    }} />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            style={{
                                display: 'flex',
                                gap: '32px',
                                marginBottom: index < steps.length - 1 ? '48px' : 0,
                                position: 'relative'
                            }}
                        >
                            {/* Number Circle */}
                            <div style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                background: step.color,
                                color: index === 1 ? 'var(--black)' : 'var(--white)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '32px',
                                fontWeight: 700,
                                flexShrink: 0,
                                position: 'relative',
                                zIndex: 1,
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                            }}>
                                {step.number}
                            </div>

                            {/* Content */}
                            <div style={{
                                flex: 1,
                                padding: '32px',
                                background: '#f5f5f5',
                                borderRadius: '12px',
                                borderLeft: `4px solid ${step.color}`
                            }}>
                                <h3 style={{
                                    fontSize: '24px',
                                    fontWeight: 700,
                                    marginBottom: '12px',
                                    color: step.color
                                }}>
                                    PASO {step.number}: {step.title}
                                </h3>
                                <p style={{
                                    fontSize: '16px',
                                    color: '#666',
                                    marginBottom: '16px',
                                    lineHeight: 1.6
                                }}>
                                    {step.description}
                                </p>
                                <div style={{
                                    display: 'inline-block',
                                    padding: '6px 12px',
                                    background: 'var(--white)',
                                    borderRadius: '6px',
                                    fontSize: '14px',
                                    color: '#333',
                                    fontWeight: 600
                                }}>
                                    ⏱️ {step.timeline}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Loop Diagram */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        marginTop: '80px',
                        padding: '48px',
                        background: 'var(--bg-primary)',
                        borderRadius: '16px',
                        textAlign: 'center',
                        color: 'var(--white)'
                    }}
                >
                    <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '24px', color: 'var(--yellow)' }}>
                        El Loop de Mejora Continua
                    </h3>
                    <p style={{ fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '32px' }}>
                        Talk → Define → Build → Measure → (repeat)
                    </p>
                    <div style={{
                        display: 'inline-block',
                        padding: '12px 24px',
                        background: 'var(--yellow)',
                        color: 'var(--black)',
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontWeight: 700
                    }}>
                        &lt;48 horas por ciclo de mejora
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default HowItWorks
