import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FileText, MonitorPlay, BarChart3, Globe, LineChart, ExternalLink } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const PitchSection = () => {
    const { t } = useLanguage()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const icons = [<MonitorPlay size={24} />, <FileText size={24} />, <MonitorPlay size={24} />, <Globe size={24} />, <BarChart3 size={24} />]
    const links = [
        "https://app.aihuevos.com/demo", // Automation Platform
        "https://reports.aihuevos.com/doria", // Doria Report
        "https://youtu.be/example", // Daniel's Vision
        "https://cases.aihuevos.com/logistics", // US Logistics
        "https://graph.aihuevos.com/explorer" // Enterprise Graph
    ]

    return (
        <section id="pitch" style={{ backgroundColor: 'var(--bg-secondary)', padding: '100px 0', minHeight: '100vh' }}>
            <div className="container">

                {/* Header */}
                <div style={{ marginBottom: '80px', borderBottom: '1px solid var(--border-color)', paddingBottom: '20px' }}>
                    <h2 className="font-mono" style={{ fontSize: '14px', color: 'var(--blue)', marginBottom: '10px' }}>{t.pitch.sectionTitle}</h2>
                    <h3 style={{ fontSize: '48px', color: 'var(--text-primary)' }}>{t.pitch.mainTitle}</h3>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px' }}>

                    {/* Left: The Pitch Embed */}
                    <div>
                        <div style={{
                            aspectRatio: '16/9',
                            backgroundColor: 'var(--black)',
                            borderRadius: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '24px',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                        }}>
                            {/* Placeholder for iframe */}
                            <span style={{ opacity: 0.5 }}>Google Slides Embed</span>
                        </div>
                    </div>

                    {/* Right: The Proof Grid */}
                    <div ref={ref}>
                        <h4 style={{ fontSize: '24px', marginBottom: '32px', color: 'var(--text-primary)' }}>{t.pitch.proofTitle}</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
                            {t.pitch.grids.map((item, i) => (
                                <motion.a
                                    key={i}
                                    href={links[i]}
                                    target="_blank"
                                    rel="noreferrer"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: i * 0.1 }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '24px',
                                        padding: '24px',
                                        backgroundColor: 'var(--card-bg)',
                                        borderRadius: '16px',
                                        textDecoration: 'none',
                                        color: 'inherit',
                                        transition: 'transform 0.2s',
                                        cursor: 'pointer',
                                        border: '1px solid transparent'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateX(10px)'
                                        e.currentTarget.style.borderColor = 'var(--border-color)'
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateX(0)'
                                        e.currentTarget.style.borderColor = 'transparent'
                                    }}
                                >
                                    <div style={{
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '12px',
                                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                                        color: 'var(--blue)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        {icons[i]}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontSize: '18px', fontWeight: 600, marginBottom: '4px', color: 'var(--text-primary)' }}>{item.title}</div>
                                        <div style={{ fontSize: '14px', opacity: 0.6, color: 'var(--text-secondary)' }}>{item.desc}</div>
                                    </div>
                                    <ExternalLink size={16} style={{ opacity: 0.3 }} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default PitchSection
