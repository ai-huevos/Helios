import React from 'react'
import { motion } from 'framer-motion'

const Team = () => {
    const founders = [
        {
            name: 'Daniel Cardona',
            role: 'CEO & Co-founder',
            credentials: '3 años en Finkargo',
            details: 'Growth & Revenue Systems',
            aiCreds: 'AI Native desde 2023 • 110+ procesos automatizados'
        },
        {
            name: 'Daniel Restrepo',
            role: 'COO & Co-founder',
            credentials: '3 años en Finkargo',
            details: 'Ops que manejó $650M mercancía',
            aiCreds: 'Arquitecto de Procesos • Trade Finance'
        }
    ]

    const advisors = [
        {
            name: 'Tomás Shuk',
            background: 'Serial Entrepreneur',
            value: 'Logistics • Conf íe, Huevos Kike, OPL Carga'
        },
        {
            name: 'Bambos Kaisharis',
            background: 'Ex-Google',
            value: '$1Bn+ raised • GTM Architecture'
        }
    ]

    return (
        <section id="equipo" style={{
            padding: '120px 48px',
            background: 'var(--bg-primary)',
            color: 'var(--white)'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '64px' }}
                >
                    <h2 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '24px' }}>
                        El equipo
                    </h2>
                    <p style={{ fontSize: '20px', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
                        No somos consultores que estudian problemas. No somos engineers que solo codean.{' '}
                        <span style={{ color: 'var(--yellow)', fontWeight: 600 }}>Construimos empresas.</span>
                    </p>
                </motion.div>

                {/* Founders */}
                <div style={{ marginBottom: '80px' }}>
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        style={{
                            fontSize: '14px',
                            fontWeight: 600,
                            color: 'var(--yellow)',
                            marginBottom: '32px',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase'
                        }}
                    >
                        ⚡ Founders
                    </motion.h3>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
                        {founders.map((founder, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{
                                    padding: '40px',
                                    background: 'var(--bg-secondary)',
                                    borderRadius: '12px',
                                    border: '1px solid var(--border-color)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                {/* Accent line */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: '4px',
                                    background: 'var(--yellow)'
                                }} />

                                <h4 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>
                                    {founder.name}
                                </h4>
                                <p style={{ fontSize: '16px', color: 'var(--yellow)', marginBottom: '24px' }}>
                                    {founder.role}
                                </p>

                                <div style={{ marginBottom: '16px' }}>
                                    <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                                        {founder.credentials}
                                    </p>
                                    <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                                        {founder.details}
                                    </p>
                                </div>

                                <div style={{
                                    padding: '12px 16px',
                                    background: 'var(--bg-primary)',
                                    borderRadius: '8px',
                                    fontSize: '14px',
                                    color: 'var(--text-secondary)',
                                    borderLeft: '3px solid var(--yellow)'
                                }}>
                                    {founder.aiCreds}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Advisors */}
                <div>
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        style={{
                            fontSize: '14px',
                            fontWeight: 600,
                            color: 'var(--blue)',
                            marginBottom: '32px',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase'
                        }}
                    >
                        🎯 Advisors
                    </motion.h3>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
                        {advisors.map((advisor, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{
                                    padding: '32px',
                                    background: 'var(--bg-secondary)',
                                    borderRadius: '12px',
                                    border: '1px solid var(--border-color)'
                                }}
                            >
                                <h4 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>
                                    {advisor.name}
                                </h4>
                                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '12px' }}>
                                    {advisor.background}
                                </p>
                                <p style={{ fontSize: '14px', color: 'var(--blue)' }}>
                                    {advisor.value}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team
