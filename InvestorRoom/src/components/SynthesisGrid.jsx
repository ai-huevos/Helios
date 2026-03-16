import React from 'react'
import { motion } from 'framer-motion'
import { BarChart3, Zap, ShieldCheck, ArrowUpRight } from 'lucide-react'
import '../styles/design-system.css'

const SynthesisGrid = () => {
    const metrics = [
        { label: 'Tiempo de Inv.', value: '-85%', color: 'var(--yellow)' },
        { label: 'Outreach', value: '3x', color: 'var(--blue)' },
        { label: 'Lead Quality', value: '+60%', color: 'var(--violet)' },
        { label: 'Uptime', value: '24/7', color: 'var(--white)' },
    ]

    return (
        <section style={{ padding: '80px 20px', maxWidth: '1400px', margin: '0 auto' }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '40px', paddingBottom: '20px', borderBottom: '1px solid var(--border-color)' }}>
                <h2 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-secondary)' }}>
                    <span className="text-yellow">//</span> Operational Metrics
                </h2>
                <span className="font-mono text-blue" style={{ fontSize: '12px' }}>LIVE DATA</span>
            </div>

            {/* Metrics Grid (Operator Style) */}
            <div className="synthesis-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', marginBottom: '80px' }}>
                {metrics.map((m, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ backgroundColor: 'var(--surface-elevated)' }}
                        style={{ padding: '40px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
                    >
                        <h3 className="font-mono" style={{ fontSize: '48px', fontWeight: 700, color: m.color, margin: '0 0 8px 0' }}>{m.value}</h3>
                        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>{m.label}</p>
                    </motion.div>
                ))}
            </div>

            {/* Features (Hybrid Cards) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                {[
                    { icon: BarChart3, title: 'Automatización Inteligente', desc: 'Agentes que investigan 24/7 y analizan señales de compra.', color: 'var(--yellow)' },
                    { icon: Zap, title: 'Datos Accionables', desc: 'Conversión de llamadas y meetings en insights estratégicos.', color: 'var(--blue)' },
                    { icon: ShieldCheck, title: 'Implementación Rápida', desc: 'De cero a operativo en semanas. Stack agnóstico.', color: 'var(--violet)' }
                ].map((feature, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -5, borderColor: feature.color, boxShadow: `0 10px 30px -10px ${feature.color}20` }}
                        style={{
                            background: 'var(--surface-elevated)',
                            border: '1px solid var(--border-color)',
                            padding: '40px',
                            borderRadius: '12px',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%'
                        }}
                    >
                        <div style={{
                            width: '48px',
                            height: '48px',
                            background: `${feature.color}20`,
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '24px',
                            color: feature.color
                        }}>
                            <feature.icon size={24} />
                        </div>
                        <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px', color: 'var(--text-primary)' }}>{feature.title}</h3>
                        <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.6, flex: 1 }}>{feature.desc}</p>

                        <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: feature.color }}>
                            <span className="font-mono" style={{ fontSize: '12px', fontWeight: 600 }}>EXPLORE</span>
                            <ArrowUpRight size={16} />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default SynthesisGrid
