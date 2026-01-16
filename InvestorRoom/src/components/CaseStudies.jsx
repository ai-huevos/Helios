import React from 'react'

const cases = [
    {
        icon: "🏨",
        title: "Metro Hotels",
        type: "Real Estate & Hospitality",
        challenge: "Reportes de junta 20 días tarde. Ceguera táctica en 17 propiedades.",
        solution: "Infraestructura de agentes que automatiza el P&L diario y optimiza el staffing basado en ocupancia real.",
        result: "Cierre mensual automatizado. Visibilidad en tiempo real de ocupancia y ADR.",
        color: "var(--blue)"
    },
    {
        icon: "🐔",
        title: "Huevos Kikes",
        type: "Agroindustry",
        challenge: "Fragmentación de datos en granjas y centros de distribución. Silos operativos.",
        solution: "Implementación de extractor de entidades para digitalizar la 'arqueología' de procesos en producción.",
        result: "Consolidación de data silos en 2 semanas. Mapeo de 292 oportunidades de automatización.",
        color: "var(--yellow)"
    }
]

const CaseStudies = () => {
    return (
        <section id="cases" style={{ backgroundColor: 'white' }}>
            <div className="container">
                <h2 className="font-mono" style={{ marginBottom: '60px' }}>03. casos de éxito</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px' }}>
                    {cases.map((c, i) => (
                        <div
                            key={i}
                            style={{
                                padding: '48px',
                                borderRadius: '32px',
                                backgroundColor: '#f8f9fa',
                                border: '1px solid #eef0f2',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <div style={{ fontSize: '64px', marginBottom: '24px' }}>{c.icon}</div>
                            <div style={{ marginBottom: '32px' }}>
                                <div className="font-mono" style={{ color: c.color, fontSize: '14px', marginBottom: '8px' }}>{c.type}</div>
                                <h3 style={{ fontSize: '32px' }}>{c.title}</h3>
                            </div>

                            <div style={{ display: 'grid', gap: '24px' }}>
                                <CasePoint label="El Reto" text={c.challenge} />
                                <CasePoint label="La Solución" text={c.solution} />
                                <CasePoint label="El Impacto" text={c.result} />
                            </div>

                            <button
                                className="font-mono"
                                style={{
                                    marginTop: '40px',
                                    padding: '16px',
                                    border: '1px solid #ddd',
                                    borderRadius: '12px',
                                    backgroundColor: 'white',
                                    cursor: 'pointer',
                                    fontSize: '14px'
                                }}
                            >
                                ver hoja de ruta completa
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const CasePoint = ({ label, text }) => (
    <div>
        <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '4px', opacity: 0.5 }}>{label}</div>
        <p style={{ fontSize: '18px', lineHeight: 1.5 }}>{text}</p>
    </div>
)

export default CaseStudies
