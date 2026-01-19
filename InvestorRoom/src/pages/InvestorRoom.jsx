import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'

const InvestorRoom = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        // Simple password check (you can change this password)
        if (password === 'aihuevos2026') {
            setIsAuthenticated(true)
            setError(false)
        } else {
            setError(true)
        }
    }

    if (!isAuthenticated) {
        return (
            <div style={{
                minHeight: '100vh',
                background: 'var(--bg-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--white)'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        maxWidth: '400px',
                        padding: '48px',
                        background: 'var(--bg-secondary)',
                        borderRadius: '16px',
                        border: '1px solid var(--border-color)'
                    }}
                >
                    <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                        <div style={{
                            width: '64px',
                            height: '80px',
                            background: 'var(--yellow)',
                            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                            margin: '0 auto 16px'
                        }} />
                        <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>
                            Investor Room
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                            Ingresa la contraseña para acceder
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Contraseña"
                            style={{
                                width: '100%',
                                padding: '14px',
                                background: 'var(--bg-primary)',
                                border: `1px solid ${error ? 'var(--orange)' : 'var(--border-color)'}`,
                                borderRadius: '8px',
                                color: 'var(--white)',
                                fontSize: '16px',
                                marginBottom: '16px',
                                outline: 'none'
                            }}
                        />
                        {error && (
                            <p style={{ color: 'var(--orange)', fontSize: '14px', marginBottom: '16px' }}>
                                Contraseña incorrecta
                            </p>
                        )}
                        <button
                            type="submit"
                            style={{
                                width: '100%',
                                padding: '14px',
                                background: 'var(--yellow)',
                                color: 'var(--black)',
                                border: 'none',
                                borderRadius: '8px',
                                fontSize: '16px',
                                fontWeight: 600,
                                cursor: 'pointer'
                            }}
                        >
                            Ingresar
                        </button>
                    </form>

                    <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                        ¿No tienes acceso?{' '}
                        <a href="mailto:daniel@aihuevos.com" style={{ color: 'var(--yellow)' }}>
                            Solicitar contraseña
                        </a>
                    </p>
                </motion.div>
            </div>
        )
    }

    return (
        <Layout>
            <div style={{ paddingTop: '120px', background: 'var(--bg-primary)', color: 'var(--white)' }}>
                {/* Part 1: The Reality */}
                <section style={{ padding: '80px 48px', borderBottom: '1px solid var(--border-color)' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h1 style={{ fontSize: '64px', fontWeight: 700, lineHeight: 1.1, marginBottom: '32px' }}>
                                El mundo cambió.<br />
                                <span style={{ color: 'var(--yellow)' }}>Tu empresa no.</span>
                            </h1>
                            <p style={{ fontSize: '24px', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: 1.6 }}>
                                Nuestra misión es construir los rieles para que la tecnología fluya en empresas tradicionales.{' '}
                                No con más SAP. Con agentes AI que entienden cómo trabaja realmente la gente.
                            </p>
                        </motion.div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', marginTop: '64px' }}>
                            {[
                                { icon: '📊', title: 'Excel', subtitle: 'Donde vive la data real' },
                                { icon: '💬', title: 'WhatsApp', subtitle: 'Donde pasan las decisiones' },
                                { icon: '🧠', title: 'Cabezas', subtitle: 'Conocimiento no documentado' }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    style={{
                                        padding: '32px',
                                        background: 'var(--bg-secondary)',
                                        borderRadius: '12px',
                                        textAlign: 'center'
                                    }}
                                >
                                    <div style={{ fontSize: '48px', marginBottom: '16px' }}>{item.icon}</div>
                                    <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>{item.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{item.subtitle}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Part 2: The Team */}
                <section id="equipo" style={{ padding: '80px 48px', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '48px' }}>
                            <span style={{ color: 'var(--yellow)' }}>Por qué nosotros:</span> El Leverage
                        </h2>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '48px', marginBottom: '64px' }}>
                            {[
                                {
                                    name: 'Daniel Cardona',
                                    role: 'CEO & Co-founder',
                                    points: ['3 años en Finkargo (0 → $650M)', 'Growth & Revenue Systems', 'AI Native desde 2023', '110+ procesos automatizados']
                                },
                                {
                                    name: 'Daniel Restrepo',
                                    role: 'COO & Co-founder',
                                    points: ['3 años en Finkargo', 'Operaciones que manejó $650M mercancía', 'Arquitecto de Procesos', 'Trade Finance specialist']
                                }
                            ].map((person, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    style={{
                                        padding: '40px',
                                        background: 'var(--bg-primary)',
                                        borderRadius: '12px',
                                        border: '1px solid var(--border-color)'
                                    }}
                                >
                                    <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>{person.name}</h3>
                                    <p style={{ color: 'var(--yellow)', fontSize: '16px', marginBottom: '24px' }}>{person.role}</p>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        {person.points.map((point, j) => (
                                            <li key={j} style={{ marginBottom: '12px', fontSize: '15px', color: 'var(--text-secondary)' }}>
                                                <span style={{ color: 'var(--yellow)' }}>→</span> {point}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>

                        <p style={{ fontSize: '20px', textAlign: 'center', fontWeight: 500, color: 'var(--text-secondary)' }}>
                            No somos consultores que estudian. No somos engineers que solo codean.{' '}
                            <span style={{ color: 'var(--white)', fontWeight: 700 }}>
                                Construimos una empresa de 0 a $650M. Sabemos qué hace que una operación funcione.
                            </span>
                        </p>
                    </div>
                </section>

                {/* Part 3: The Opportunity - Continued in comments due to length */}
                <section style={{ padding: '80px 48px' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '24px' }}>
                            La Oportunidad: El Puzzle
                        </h2>
                        <p style={{ fontSize: '20px', color: 'var(--text-secondary)', marginBottom: '48px' }}>
                            Tres piezas que se conectan para crear una oportunidad única en Latinoamérica
                        </p>
                        {/* Puzzle visualization will go here - simplified for now */}
                        <div style={{
                            padding: '64px',
                            background: 'var(--bg-secondary)',
                            borderRadius: '16px',
                            fontSize: '18px',
                            color: 'var(--text-secondary)'
                        }}>
                            <p style={{ marginBottom: '16px' }}>
                                <span style={{ color: 'var(--blue)', fontWeight: 700 }}>KONFIE</span> (AI Logistics) +{' '}
                                <span style={{ color: 'var(--yellow)', fontWeight: 700 }}>AI HUEVOS</span> (El puente) +{' '}
                                <span style={{ color: 'var(--orange)', fontWeight: 700 }}>HUEVOS KIKE</span> (5M huevos/día, flota nacional)
                            </p>
                            <p style={{ color: 'var(--white)', fontSize: '20px', fontWeight: 600 }}>
                                = Last-mile delivery product ya validado
                            </p>
                        </div>
                    </div>
                </section>

                {/* More sections would continue here - simplified for delivery */}
                <section id="precios" style={{ padding: '80px 48px', background: 'var(--bg-secondary)' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '48px', textAlign: 'center' }}>
                            Modelo de Negocio
                        </h2>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
                            {[
                                { name: 'El Checkup', price: '$5-15K', desc: 'Diagnóstico completo' },
                                { name: 'El Fix', price: '$15-50K', desc: 'Por proceso automatizado' },
                                { name: 'Director AI', price: '$10-20', desc: 'Por usuario/mes' }
                            ].map((tier, i) => (
                                <div key={i} style={{
                                    padding: '40px',
                                    background: 'var(--bg-primary)',
                                    borderRadius: '12px',
                                    border: '2px solid var(--border-color)',
                                    textAlign: 'center'
                                }}>
                                    <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>{tier.name}</h3>
                                    <div style={{ fontSize: '40px', fontWeight: 700, color: 'var(--yellow)', marginBottom: '16px' }}>
                                        {tier.price}
                                    </div>
                                    <p style={{ color: 'var(--text-secondary)' }}>{tier.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default InvestorRoom
