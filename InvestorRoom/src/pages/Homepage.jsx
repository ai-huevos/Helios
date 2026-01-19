import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/homepage/Hero'
import Problem from '../components/homepage/Problem'
import Solution from '../components/homepage/Solution'
import HowItWorks from '../components/homepage/HowItWorks'
import Team from '../components/homepage/Team'
import Pricing from '../components/homepage/Pricing'
import { motion } from 'framer-motion'

const Homepage = () => {
    return (
        <Layout>
            <Hero />
            <Problem />
            <Solution />
            <HowItWorks />

            {/* Case Studies - Placeholder for now */}
            <section id="casos" style={{
                padding: '120px 48px',
                background: 'var(--bg-secondary)',
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
                            Resultados reales
                        </h2>
                        <p style={{ fontSize: '20px', color: 'var(--text-secondary)' }}>
                            Empresas latinoamericanas que transformamos
                        </p>
                    </motion.div>

                    <div style={{
                        padding: '64px',
                        background: 'var(--bg-primary)',
                        borderRadius: '16px',
                        border: '2px solid var(--border-color)',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '48px', marginBottom: '24px' }}>🏗️</div>
                        <h3 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '16px', color: 'var(--yellow)' }}>
                            De dónde venimos: Finkargo
                        </h3>
                        <p style={{ fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
                            Ayudamos a construir una empresa de trade finance de 0 a $650M en mercancía financiada
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', marginTop: '32px' }}>
                            {[
                                { number: '114', label: 'procesos automatizados' },
                                { number: '9', label: 'áreas funcionales' },
                                { number: '550+', label: 'importadores servidos' }
                            ].map((stat, i) => (
                                <div key={i}>
                                    <div style={{ fontSize: '40px', fontWeight: 700, color: 'var(--yellow)', marginBottom: '8px' }}>
                                        {stat.number}
                                    </div>
                                    <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Team />
            <Pricing />

            {/* FAQ */}
            <section id="faq" style={{
                padding: '120px 48px',
                background: 'var(--bg-primary)',
                color: 'var(--white)'
            }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
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
                        Preguntas frecuentes
                    </motion.h2>

                    {[
                        {
                            q: '¿Qué pasa si nuestros sistemas son muy viejos?',
                            a: 'Precisamente por eso existimos. Empezamos con lo que tienes, construimos conectores custom, y creamos un puente hacia tecnología moderna.'
                        },
                        {
                            q: '¿Cuánto tiempo toma ver resultados?',
                            a: 'El Checkup toma 2-4 semanas y ya tienes visibilidad completa. Las primeras automatizaciones funcionan en 2-3 semanas adicionales.'
                        },
                        {
                            q: '¿Qué pasa si mi equipo no usa la tecnología?',
                            a: 'Usamos WhatsApp y chatbots - los canales que ya usan. No pedimos que aprendan nada nuevo.'
                        },
                        {
                            q: '¿Cómo se diferencia de consultoras tradicionales?',
                            a: 'Las consultoras dejan PowerPoints. Nosotros dejamos sistemas funcionando y nos quedamos para mejorarlos.'
                        }
                    ].map((item, index) => (
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
                                marginBottom: '16px',
                                borderLeft: '4px solid var(--yellow)'
                            }}
                        >
                            <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: 'var(--yellow)' }}>
                                {item.q}
                            </h3>
                            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                {item.a}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Contact/CTA */}
            <section id="contacto" style={{
                padding: '120px 48px',
                background: 'var(--bg-secondary)',
                color: 'var(--white)'
            }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: '56px', fontWeight: 700, marginBottom: '24px', lineHeight: 1.1 }}>
                            ¿Listo para que tu empresa<br />
                            <span style={{ color: 'var(--yellow)' }}>también cambie?</span>
                        </h2>
                        <p style={{ fontSize: '20px', color: 'var(--text-secondary)', marginBottom: '48px' }}>
                            Agenda una llamada de 30 minutos. Sin compromiso.<br />
                            Te mostramos exactamente qué podemos hacer por ti.
                        </p>

                        <a
                            href="mailto:daniel@aihuevos.com?subject=Consulta AI Huevos&body=Hola, me gustaría saber más sobre cómo AI Huevos puede ayudar a mi empresa."
                            style={{
                                display: 'inline-block',
                                background: 'var(--orange)',
                                color: 'var(--white)',
                                padding: '20px 48px',
                                borderRadius: '12px',
                                textDecoration: 'none',
                                fontSize: '18px',
                                fontWeight: 600,
                                transition: 'transform 0.2s, box-shadow 0.2s',
                                boxShadow: '0 8px 24px rgba(255, 107, 53, 0.3)',
                                marginBottom: '32px'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-4px)'
                                e.target.style.boxShadow = '0 12px 32px rgba(255, 107, 53, 0.4)'
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'translateY(0)'
                                e.target.style.boxShadow = '0 8px 24px rgba(255, 107, 53, 0.3)'
                            }}
                        >
                            Agenda tu llamada
                        </a>

                        <p style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>
                            ¿Prefieres escribirnos directamente?{' '}
                            <a href="mailto:daniel@aihuevos.com" style={{ color: 'var(--yellow)', textDecoration: 'none', fontWeight: 600 }}>
                                daniel@aihuevos.com
                            </a>
                        </p>
                    </motion.div>
                </div>
            </section>
        </Layout>
    )
}

export default Homepage
