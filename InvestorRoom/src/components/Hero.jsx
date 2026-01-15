import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const Hero = () => {
    return (
        <section className="hero" style={{ backgroundColor: 'var(--yellow)', position: 'relative', overflow: 'hidden' }}>
            <div className="container" style={{ textAlign: 'left', zIndex: 10 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="font-mono" style={{ fontSize: '18px', display: 'block', marginBottom: '24px' }}>
                        investor room v1.0
                    </span>
                    <h1 style={{ fontSize: 'clamp(48px, 8vw, 120px)', maxWidth: '900px', marginBottom: '40px' }}>
                        AI infrastructure for LatAm enterprises.
                    </h1>
                    <p style={{ fontSize: 'clamp(20px, 3vw, 32px)', maxWidth: '700px', marginBottom: '60px', opacity: 0.9 }}>
                        From WhatsApp chaos to traceable agent networks.
                    </p>

                    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                        <button
                            className="font-mono"
                            style={{
                                backgroundColor: 'var(--black)',
                                color: 'var(--white)',
                                padding: '16px 32px',
                                border: 'none',
                                borderRadius: '100px',
                                fontSize: '18px',
                                cursor: 'pointer',
                                transition: 'transform 0.2s ease'
                            }}
                            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                            onClick={() => document.getElementById('pitch').scrollIntoView({ behavior: 'smooth' })}
                        >
                            ver el pitch
                        </button>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '16px 24px',
                            border: '2px solid var(--black)',
                            borderRadius: '100px',
                            fontWeight: '500'
                        }}>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#22c55e', animation: 'pulse 2s infinite' }}></div>
                            <span>Raising $200k</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Egg */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    right: '5%',
                    bottom: '20%',
                    width: 'clamp(200px, 30vw, 400px)',
                    opacity: 0.15,
                    zIndex: 1
                }}
            >
                <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="100" cy="120" rx="70" ry="90" fill="black" />
                </svg>
            </motion.div>

            <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)' }}>
                <ArrowDown size={32} />
            </div>

            <style>{`
        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
        }
      `}</style>
        </section>
    )
}

export default Hero
