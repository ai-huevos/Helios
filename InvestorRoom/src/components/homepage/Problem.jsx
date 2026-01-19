import React from 'react'
import { motion } from 'framer-motion'

const Problem = () => {
    const systems = [
        { icon: '📊', title: 'Excel', description: 'Donde vive la data real' },
        { icon: '💬', title: 'WhatsApp', description: 'Donde pasan las decisiones' },
        { icon: '🧠', title: 'Cabezas', description: 'Conocimiento no documentado' }
    ]

    const stats = [
        { number: '100+', label: 'sistemas por empresa' },
        { number: '10-20%', label: 'uso real del software' },
        { number: '5%', label: 'usando AI en sus procesos' }
    ]

    return (
        <section id="problema" style={{
            padding: '120px 48px',
            background: 'var(--white)',
            color: 'var(--black)'
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
                        color: 'var(--orange)',
                        marginBottom: '16px',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase'
                    }}
                >
                    El Problema
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
                    Te enseñaron a trabajar para un mundo<br />
                    que ya no existe
                </motion.h2>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    style={{
                        fontSize: '20px',
                        color: '#666',
                        marginBottom: '64px'
                    }}
                >
                    Cada empresa grande en Latam opera con 3 sistemas invisibles:
                </motion.p>

                {/* The 3 Systems */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', marginBottom: '64px' }}>
                    {systems.map((system, index) => (
                        <motion.div
                            key={system.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            style={{
                                padding: '40px',
                                background: 'var(--bg-primary)',
                                borderRadius: '16px',
                                textAlign: 'center',
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: 'var(--white)'
                            }}
                        >
                            <div style={{ fontSize: '48px', marginBottom: '16px' }}>{system.icon}</div>
                            <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px' }}>{system.title}</h3>
                            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
                                {system.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', marginBottom: '48px' }}
                >
                    {stats.map((stat, index) => (
                        <div key={index} style={{ textAlign: 'center', padding: '32px', background: '#f5f5f5', borderRadius: '12px' }}>
                            <div style={{ fontSize: '40px', fontWeight: 700, color: 'var(--orange)', marginBottom: '8px' }}>
                                {stat.number}
                            </div>
                            <div style={{ fontSize: '14px', color: '#666' }}>{stat.label}</div>
                        </div>
                    ))}
                </motion.div>

                {/* Bottom Line */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    style={{
                        fontSize: '20px',
                        textAlign: 'center',
                        fontWeight: 500,
                        color: '#333',
                        maxWidth: '900px',
                        margin: '0 auto',
                        lineHeight: 1.6
                    }}
                >
                    Gastaste millones en SAP, Oracle, software caro. Tu gente usa 20% de eso.{' '}
                    <span style={{ color: 'var(--orange)', fontWeight: 700 }}>
                        Mientras tanto, la competencia te pasa con productos 2 semanas más rápido.
                    </span>
                </motion.div>
            </div>
        </section>
    )
}

export default Problem
