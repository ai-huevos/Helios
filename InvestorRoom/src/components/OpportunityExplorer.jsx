import React, { useState, useEffect } from 'react'

const OpportunityExplorer = () => {
    const [fos, setFos] = useState(500)
    const [bu, setBu] = useState(5)
    const [diagPrice, setDiagPrice] = useState(40)
    const [implPrice, setImplPrice] = useState(70)
    const [conv, setConv] = useState(50)

    const [results, setResults] = useState({
        sam: 0,
        annual: 0,
        threeYear: 0
    })

    useEffect(() => {
        const sam = fos * 2 // Estimate 2x target groups in the region
        const totalEngagements = fos * (conv / 100)
        const annualRev = (fos * diagPrice) + (totalEngagements * bu * implPrice)
        const capture = annualRev * 0.05 // 5% capture for AI Huevos

        setResults({
            sam: sam,
            annual: Math.round(annualRev / 1000), // In Millions
            threeYear: Math.round((capture * 3) / 1000)
        })
    }, [fos, bu, diagPrice, implPrice, conv])

    return (
        <section id="opportunity" style={{ backgroundColor: '#f8fafc' }}>
            <div className="container">
                <h2 className="font-mono" style={{ marginBottom: '60px' }}>02. la oportunidad</h2>

                <div style={{ display: 'grid', lgGridColumns: '1.2fr 1fr', gap: '40px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                    {/* Controls */}
                    <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                        <h3 style={{ marginBottom: '32px' }}>Simulador de Mercado</h3>

                        <div style={{ display: 'grid', gap: '24px' }}>
                            <InputRange label="Grupos Empresariales (Target)" value={fos} min={100} max={2000} onChange={setFos} />
                            <InputRange label="Unidades de Negocio p/ Grupo" value={bu} min={2} max={15} onChange={setBu} />
                            <InputRange label="Precio Diagnóstico ($k)" value={diagPrice} min={20} max={100} onChange={setDiagPrice} />
                            <InputRange label="Implementation p/ UN ($k)" value={implPrice} min={30} max={150} onChange={setImplPrice} />
                            <InputRange label="Conversión Diagnóstico (%)" value={conv} min={20} max={80} onChange={setConv} />
                        </div>
                    </div>

                    {/* Results */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <ResultCard
                            label="Serviceable Addressable Market"
                            value={`${results.sam} Groups`}
                            color="var(--blue)"
                            desc="LatAm mid-market enterprises"
                        />
                        <ResultCard
                            label="Annual Market Potential"
                            value={`$${results.annual}M`}
                            color="var(--purple)"
                            desc="Estimated revenue across target region"
                        />
                        <ResultCard
                            label="AI Huevos 3rd Year Revenue"
                            value={`$${results.threeYear}M`}
                            color="var(--yellow)"
                            desc="Based on 5% market capture"
                            highlight={true}
                        />

                        <div style={{
                            marginTop: 'auto',
                            padding: '24px',
                            backgroundColor: 'var(--black)',
                            color: 'white',
                            borderRadius: '16px'
                        }}>
                            <p className="font-mono" style={{ fontSize: '14px', opacity: 0.8 }}>
                                Nuestra tesis: El mercado de servicios de IA en LatAm crecerá a $15B para 2030. Estamos posicionados en la "última milla" de ejecución.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const InputRange = ({ label, value, min, max, onChange }) => (
    <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <label style={{ fontSize: '14px', fontWeight: 600 }}>{label}</label>
            <span className="font-mono" style={{ color: 'var(--blue)' }}>{value}</span>
        </div>
        <input
            type="range"
            min={min}
            max={max}
            value={value}
            onChange={(e) => onChange(parseInt(e.target.value))}
            style={{ width: '100%', cursor: 'pointer', accentColor: 'var(--blue)' }}
        />
    </div>
)

const ResultCard = ({ label, value, color, desc, highlight }) => (
    <div style={{
        padding: '24px',
        backgroundColor: highlight ? color : 'white',
        color: highlight ? 'black' : 'black',
        borderRadius: '16px',
        borderLeft: `6px solid ${color}`,
        boxShadow: '0 4px 10px rgba(0,0,0,0.03)'
    }}>
        <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.6, marginBottom: '8px' }}>{label}</div>
        <div style={{ fontSize: '32px', fontWeight: 700, marginBottom: '4px' }}>{value}</div>
        <div style={{ fontSize: '14px', opacity: 0.7 }}>{desc}</div>
    </div>
)

export default OpportunityExplorer
