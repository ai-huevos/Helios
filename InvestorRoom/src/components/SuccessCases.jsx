import React from 'react'
import { motion } from 'framer-motion'
import { Check, X, Building, Utensils, HardHat, TrendingUp } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

// Icons map for mapping translated items back to icons
const ICON_MAP = {
    "Metro Hotels": <Building size={20} />,
    "Huevos Kikes": <TrendingUp size={20} />,
    "Burger King Franchise": <Utensils size={20} />,
    "Investment Bank": <TrendingUp size={20} />,
    "Construction Co.": <HardHat size={20} />,
    "Hoteles Metro": <Building size={20} />,
    "Franquicia Burger King": <Utensils size={20} />,
    "Banca de Inversión": <TrendingUp size={20} />,
    "Constructora": <HardHat size={20} />
}

const SuccessCases = () => {
    const { t } = useLanguage()

    return (
        <section id="cases" style={{ backgroundColor: 'var(--bg-primary)', padding: '100px 0' }}>
            <div className="container">

                {/* Header */}
                <div style={{ marginBottom: '80px', borderBottom: '1px solid var(--border-color)', paddingBottom: '20px' }}>
                    <h2 className="font-mono" style={{ fontSize: '14px', color: 'var(--blue)', marginBottom: '10px' }}>{t.cases.sectionTitle}</h2>
                    <h3 style={{ fontSize: '48px', color: 'var(--text-primary)' }}>{t.cases.mainTitle}</h3>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px' }}>

                    {/* COLUMN 1: Vertical Roadmap */}
                    <div>
                        <h4 style={{ fontSize: '24px', marginBottom: '32px', color: 'var(--text-primary)' }}>{t.cases.verticals.title}</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {t.cases.verticals.items.map((r, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '16px',
                                        padding: '24px',
                                        backgroundColor: 'var(--bg-secondary)',
                                        borderRadius: '16px',
                                        borderLeft: (r.phase === "Live" || r.phase === "En Vivo") ? '4px solid var(--green)' : '4px solid var(--border-color)'
                                    }}
                                >
                                    <div style={{ color: 'var(--text-primary)' }}>
                                        {ICON_MAP[r.item] || <TrendingUp size={20} />}
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)' }}>{r.item}</div>
                                        <div style={{ fontSize: '13px', opacity: 0.6 }}>{r.desc}</div>
                                    </div>
                                    <div className="font-mono" style={{
                                        marginLeft: 'auto',
                                        fontSize: '11px',
                                        padding: '4px 8px',
                                        borderRadius: '6px',
                                        backgroundColor: (r.phase === "Live" || r.phase === "En Vivo") ? 'rgba(34, 197, 94, 0.1)' : 'rgba(0,0,0,0.05)',
                                        color: (r.phase === "Live" || r.phase === "En Vivo") ? 'var(--green)' : 'var(--text-secondary)'
                                    }}>
                                        {r.phase}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Deep Dive Validator */}
                        <div style={{ marginTop: '60px' }}>
                            <h4 style={{ fontSize: '24px', marginBottom: '32px', color: 'var(--text-primary)' }}>{t.cases.validation.title}</h4>
                            <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '32px', borderRadius: '24px' }}>
                                {t.cases.validation.items.map((v, i) => {
                                    // Determine status based on index for now as strings will change
                                    // Logic: first 3 are done, last 2 are risky (from original data)
                                    const isDone = i < 3;
                                    const isRisky = i >= 3;

                                    return (
                                        <div key={i} style={{ display: 'flex', gap: '16px', marginBottom: '20px', alignItems: 'start' }}>
                                            <div style={{
                                                marginTop: '4px',
                                                color: isDone ? 'var(--green)' : 'var(--orange)'
                                            }}>
                                                {isDone ? <Check size={16} /> : <X size={16} />}
                                            </div>
                                            <div>
                                                <div style={{ fontWeight: 600, fontSize: '15px', color: isDone ? 'var(--text-primary)' : 'var(--text-secondary)', textDecoration: isRisky ? 'line-through' : 'none' }}>
                                                    {v.item}
                                                </div>
                                                <div style={{ fontSize: '13px', opacity: 0.7, lineHeight: 1.4 }}>{v.text}</div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    {/* COLUMN 2: The Menu (Pricing) */}
                    <div>
                        <h4 style={{ fontSize: '24px', marginBottom: '32px', color: 'var(--text-primary)' }}>{t.cases.menu.title}</h4>

                        {/* A la Carte */}
                        <div style={{ marginBottom: '40px' }}>
                            <h5 className="font-mono" style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '16px', textTransform: 'uppercase' }}>{t.cases.menu.alaCarte}</h5>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {t.cases.menu.items.map((m, i) => (
                                    <div key={i} style={{ paddingBottom: '16px', borderBottom: '1px dashed var(--border-color)' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                                            <span style={{ fontWeight: 600, fontSize: '18px', color: 'var(--text-primary)' }}>{m.name}</span>
                                            <span className="font-mono" style={{ color: 'var(--text-primary)' }}>{m.price}</span>
                                        </div>
                                        <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{m.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bundles */}
                        <div>
                            <h5 className="font-mono" style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '16px', textTransform: 'uppercase' }}>{t.cases.menu.bundles.title}</h5>
                            <div style={{ display: 'grid', gap: '16px' }}>
                                {t.cases.menu.bundles.items.map((b, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.02 }}
                                        style={{
                                            padding: '32px',
                                            backgroundColor: 'var(--card-bg)',
                                            border: '1px solid var(--border-color)',
                                            borderRadius: '16px',
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
                                        }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                            <span style={{ fontWeight: 600, fontSize: '20px', color: 'var(--blue)' }}>{b.name}</span>
                                            <span className="font-mono" style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{b.price}</span>
                                        </div>
                                        <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{b.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default SuccessCases
