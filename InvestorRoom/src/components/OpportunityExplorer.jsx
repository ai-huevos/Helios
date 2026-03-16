import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, TrendingUp, Users, DollarSign, ArrowRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

// --- CONSTANTS & ASSUMPTIONS ---
// Strict adherence to AI_Huevos_Market_Research.md and HTML logic
const ASSUMPTIONS = {
    avgRevPerBU: 40000,    // $40k Diagnostic Revenue
    implRevPerBU: 70000,   // $70k Implementation Revenue
    retentionRate: 0.85,   // 85% Retention
    annualFee: 60000,      // $5k/mo * 12 = $60k
    captureRate: 0.05,     // 5% Conservative Capture (The Thesis)
    multiplier: 2          // Avg 2 BUs per Family Office Group
}

const OpportunityExplorer = () => {
    const { t } = useLanguage()

    // --- STATE ---
    // User Inputs
    const [familyOffices, setFamilyOffices] = useState(500) // Default: Top 500 LatAm FOs
    const [busPerGroup, setBusPerGroup] = useState(Assumptions.multiplier)
    const [pricingModel, setPricingModel] = useState(Assumptions.avgRevPerBU / 1000) // In $k
    const [conversionRate, setConversionRate] = useState(5) // 5%

    // Calculated Results
    const [results, setResults] = useState({
        samGroups: 0,
        tamRevenue: 0,
        ourRevenue: 0
    })

    // --- LOGIC ---
    useEffect(() => {
        // 1. Serviceable Addressable Market (Groups)
        // Groups * BUs per Group
        const samGroups = familyOffices * busPerGroup

        // 2. Total Addressable Market Revenue (Annual)
        // SAM Groups * (Diagnostic + Implementation + 1 Year Retainer)
        // Simplified for consistency with HTML: Using a blended "Value per Group" metric
        // HTML Logic: (FOS * Multiplier) * (AvgDealSize)
        // Let's reflect the rigorous Logic:
        // Diagnostic ($40k) + Implementation ($70k) = $110k One-off per BU
        // Plus Retainer ($60k/yr)
        // Here we simplify "Pricing Model" input to be "Avg One-off Deal Size per BU"

        const dealSize = pricingModel * 1000 // e.g. 40k
        const implementation = 70000 // Fixed assumption or derived
        const retainer = 60000 // Fixed

        // Annual Potential = Total Groups * (Deal + Impl + Retainer)
        // This is a massive number (TAM), so we scale it reasonable to "Addressable"
        const annualPotential = samGroups * (dealSize + implementation + retainer)

        // 3. AI Huevos Revenue (The Capture Thesis)
        // Market Size * Conversion Rate
        const capturedRevenue = annualPotential * (conversionRate / 100)

        setResults({
            samGroups: samGroups,
            tamRevenue: annualPotential,
            ourRevenue: capturedRevenue
        })

    }, [familyOffices, busPerGroup, pricingModel, conversionRate])

    // Format Helpers
    const formatMoney = (val) => {
        if (val >= 1000000000) return `$${(val / 1000000000).toFixed(1)}B`
        if (val >= 1000000) return `$${(val / 1000000).toFixed(0)}M`
        return `$${(val / 1000).toFixed(0)}k`
    }

    const formatNumber = (val) => new Intl.NumberFormat('en-US').format(val)

    return (
        <section id="opportunity" style={{ backgroundColor: 'var(--bg-primary)', padding: '100px 0' }}>
            <div className="container">

                {/* Header */}
                <div style={{ marginBottom: '60px', borderBottom: '1px solid var(--border-color)', paddingBottom: '20px' }}>
                    <h2 className="font-mono" style={{ fontSize: '14px', color: 'var(--blue)', marginBottom: '10px' }}>{t.opportunity.sectionTitle}</h2>
                    <h3 style={{ fontSize: '48px', color: 'var(--text-primary)' }}>{t.opportunity.mainTitle}</h3>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px' }}>

                    {/* COL 1: The Simulator (Inputs) */}
                    <div>
                        <div style={{ marginBottom: '32px' }}>
                            <h4 style={{ fontSize: '24px', display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-primary)' }}>
                                <Calculator size={24} color="var(--blue)" /> {t.opportunity.calculator.title}
                            </h4>
                            <p style={{ opacity: 0.6, fontSize: '16px' }}>{t.opportunity.calculator.subtitle}</p>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                            <InputRange
                                label={t.opportunity.calculator.fos}
                                value={familyOffices}
                                min={100} max={2000} step={50}
                                onChange={setFamilyOffices}
                            />
                            <InputRange
                                label={t.opportunity.calculator.bus}
                                value={busPerGroup}
                                min={1} max={10}
                                onChange={setBusPerGroup}
                                prefix="x"
                            />
                            <InputRange
                                label={t.opportunity.calculator.pricing}
                                value={pricingModel}
                                min={10} max={100}
                                onChange={setPricingModel}
                                prefix="$" suffix="k"
                            />
                            <InputRange
                                label={t.opportunity.calculator.conversion}
                                value={conversionRate}
                                min={1} max={20}
                                onChange={setConversionRate}
                                suffix="%"
                            />
                        </div>
                    </div>

                    {/* COL 2: The Results (Outputs) */}
                    <div>
                        <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '40px', borderRadius: '24px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                            <ResultCard
                                icon={<Users size={24} />}
                                label={t.opportunity.results.sam}
                                value={formatNumber(results.samGroups)}
                                color="var(--text-primary)"
                                desc="Total BUs Addressable"
                            />

                            <ResultCard
                                icon={<TrendingUp size={24} />}
                                label={t.opportunity.results.tam}
                                value={formatMoney(results.tamRevenue)}
                                color="var(--text-primary)"
                                desc="Total Market Velocity"
                            />

                            <ResultCard
                                icon={<DollarSign size={24} />}
                                label={t.opportunity.results.revenue}
                                value={formatMoney(results.ourRevenue)}
                                color="var(--green)"
                                highlight={true}
                                desc="conservative @ 5% capture"
                            />

                            <div style={{ marginTop: '32px', padding: '20px', backgroundColor: 'var(--card-bg)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                                <p className="font-mono" style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                                    {t.opportunity.results.thesis}
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

const InputRange = ({ label, value, min, max, onChange, prefix = "", suffix = "" }) => {
    const id = React.useId()
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <label htmlFor={id} style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>{label}</label>
                <span className="font-mono" style={{ color: 'var(--blue)', fontWeight: 600 }}>{prefix}{value}{suffix}</span>
            </div>
            <input
                id={id}
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={(e) => onChange(parseInt(e.target.value))}
                style={{
                    width: '100%',
                    cursor: 'pointer',
                    accentColor: 'var(--blue)',
                    height: '6px',
                    backgroundColor: 'var(--border-color)',
                    borderRadius: '3px',
                    appearance: 'none'
                }}
            />
        </div>
    )
}

const ResultCard = ({ icon, label, value, color, desc, highlight }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        key={value} // Trigger animation on value change
        style={{
            marginBottom: '32px',
            paddingBottom: '24px',
            borderBottom: '1px dashed var(--border-color)'
        }}
    >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', opacity: 0.6 }}>
            {icon}
            <span style={{ fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</span>
        </div>
        <div className="font-mono" style={{
            fontSize: highlight ? '48px' : '32px',
            fontWeight: 700,
            color: color,
            letterSpacing: '-0.02em',
            lineHeight: 1
        }}>
            {value}
        </div>
    </motion.div>
)
// Fallback logic assumptions
const Assumptions = {
    multiplier: 2,
    avgRevPerBU: 40000
}


export default OpportunityExplorer
