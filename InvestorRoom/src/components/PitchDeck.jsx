import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
    {
        title: "AI Huevos",
        subtitle: "Agent Infrastructure for LatAm Enterprises",
        content: "From WhatsApp chaos to traceable agent networks",
        type: "title"
    },
    {
        title: "El Problema",
        content: "Las empresas de +$500M en LatAm operan en WhatsApp, Excel y conocimiento tribal. No hay un OS coherente donde conectar agentes o capital.",
        stats: ["100+ sistemas", "15-30% de uso real", "Cero trazabilidad"]
    },
    {
        title: "La Visión",
        content: "IA sin rieles es inútil. Estamos construyendo los rieles desde adentro de los flujos de trabajo que mueven el dinero.",
        quote: "No vendemos dashboards, vendemos infraestructura de ejecución."
    },
    {
        title: "El Wedge",
        content: "Arqueología Organizacional: Entramos como consultores, salimos como infraestructura.",
        points: ["68 entrevistas en 2 semanas", "2,700+ puntos de datos ligados", "292 oportunidades identificadas"]
    },
    {
        title: "El Producto",
        content: "20-30 horas de lo 'roto' a lo 'arreglado'. El operador entrena al agente, no al prompt.",
        loop: ["Uso", "Flag", "Fix", "Approve", "Live"]
    },
    {
        title: "Director AI",
        content: "El cerebro organizacional que mapea, orquestra y califica el performance de humanos y agentes.",
        components: ["Map (Process Graph)", "Orchestrate (Human+AI)", "Benchmark (Internal/External)"]
    },
    {
        title: "Estrategia Moat",
        content: "Replicación Vertical: Lo que construimos para Hilton funciona para todos los Marriott. Lo que construimos para BK funciona para todo F&B.",
        moats: ["Proprietary Data", "Switching Costs", "Network Effects"]
    },
    {
        title: "Business Model",
        content: "Workflows financian la infraestructura. Infraestructura crea el leverage.",
        stats: ["$90k/deal avg", "34% -> 67% GM Expansion", "85% Infra Margin"]
    },
    {
        title: "Shipping Velocity",
        content: "7 productos en 5 meses. Somos operadores nativos de IA.",
        timeline: ["Oct: WhatsApp Interviews", "Nov: Entity Extractor", "Dec: Automation Platform", "Jan: Service Desk"]
    },
    {
        title: "El Equipo",
        content: "Construimos el motor de crecimiento de Finkargo ($95M Series A, $670M GMV).",
        team: [
            { name: "Daniel Restrepo", role: "Founder & COO", desc: "110+ procesos automatizados" },
            { name: "Daniel Cardona", role: "Founder & CEO", desc: "Pipeline B2B $150M+" }
        ]
    }
]

const PitchDeck = () => {
    const [current, setCurrent] = useState(0)

    const next = () => setCurrent((prev) => (prev + 1) % slides.length)
    const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

    return (
        <section id="pitch" style={{ backgroundColor: 'var(--white)', padding: '60px 0' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                    <h2 className="font-mono">01. el pitch</h2>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <span style={{ fontWeight: 600 }}>{current + 1}</span>
                        <span style={{ opacity: 0.5 }}>/ {slides.length}</span>
                    </div>
                </div>

                <div style={{
                    height: '600px',
                    backgroundColor: 'var(--black)',
                    borderRadius: '24px',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--white)',
                    padding: '80px'
                }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            style={{ width: '100%', maxWidth: '800px', textAlign: 'center' }}
                        >
                            <h3 style={{ fontSize: '48px', marginBottom: '32px', color: 'var(--yellow)' }}>
                                {slides[current].title}
                            </h3>
                            <p style={{ fontSize: '24px', opacity: 0.9, marginBottom: '40px', lineHeight: 1.4 }}>
                                {slides[current].content}
                            </p>

                            {slides[current].stats && (
                                <div style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}>
                                    {slides[current].stats.map((stat, i) => (
                                        <div key={i} className="font-mono" style={{ padding: '20px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '12px' }}>
                                            {stat}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {slides[current].team && (
                                <div style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}>
                                    {slides[current].team.map((member, i) => (
                                        <div key={i} style={{ textAlign: 'left' }}>
                                            <div style={{ fontWeight: 600, fontSize: '20px' }}>{member.name}</div>
                                            <div style={{ color: 'var(--blue)', fontSize: '14px', marginBottom: '8px' }} className="font-mono">{member.role}</div>
                                            <div style={{ fontSize: '14px', opacity: 0.7 }}>{member.desc}</div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>

                    <button onClick={prev} style={navBtnStyle({ left: '20px' })}>
                        <ChevronLeft size={32} />
                    </button>
                    <button onClick={next} style={navBtnStyle({ right: '20px' })}>
                        <ChevronRight size={32} />
                    </button>
                </div>
            </div>
        </section>
    )
}

const navBtnStyle = (pos) => ({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255,255,255,0.1)',
    border: 'none',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    color: 'white',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...pos
})

export default PitchDeck
