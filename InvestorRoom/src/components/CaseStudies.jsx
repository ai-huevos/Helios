import React from 'react'

const cases = [
    {
        icon: "🏢",
        title: "The Family Office Engine",
        type: "Enterprise Multi-Industry",
        challenge: "Fragmentación total en un holding con hoteles (Marriott), alimentos (Burger King) y construcción.",
        solution: "Arqueología organizacional profunda: 68 entrevistas, 2,700+ puntos de datos vinculados en un grafo de procesos.",
        result: "292 oportunidades identificadas con $1.5M de valor potencial y 7 productos operativos.",
        color: "var(--blue)"
    },
    {
        icon: "🚀",
        title: "Shipping Velocity",
        type: "Operational Proof",
        challenge: "La IA en LatAm suele quedarse en 'promesas' sin ejecución real en procesos de dinero.",
        solution: "7 productos funcionales entregados en 5 meses (Intervías WhatsApp, Entity Extractor, Automation Platform).",
        result: "$270K de revenue confirmado con solo 3 clientes iniciales demostrando unit economics de escala.",
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
