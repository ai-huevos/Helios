import React, { useState } from 'react'
import AppPolish from './AppPolish'
import AppOperator from './AppOperator'
import AppVisionary from './AppVisionary'
import { LanguageProvider } from './context/LanguageContext'

const AppSwitcher = () => {
    const [activeApp, setActiveApp] = useState('B') // Start with B (Operator) as it was the previous selection

    const renderApp = () => {
        switch (activeApp) {
            case 'A': return <AppPolish />
            case 'B': return <AppOperator />
            case 'C': return <AppVisionary />
            default: return <AppOperator />
        }
    }

    return (
        <LanguageProvider>
            {renderApp()}

            {/* Floating Switcher Controls */}
            <div style={{
                position: 'fixed',
                bottom: '24px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#000000',
                color: 'white',
                display: 'flex',
                gap: '4px',
                padding: '4px',
                borderRadius: '50px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                zIndex: 9999,
                border: '1px solid rgba(255,255,255,0.2)'
            }}>
                <button
                    onClick={() => setActiveApp('A')}
                    style={{
                        background: activeApp === 'A' ? '#FFFFFF' : 'transparent',
                        color: activeApp === 'A' ? '#000000' : '#888888',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '40px',
                        cursor: 'pointer',
                        fontWeight: 600,
                        fontSize: '12px',
                        fontFamily: 'sans-serif'
                    }}
                >
                    A. Polish
                </button>
                <button
                    onClick={() => setActiveApp('B')}
                    style={{
                        background: activeApp === 'B' ? '#4D9FFF' : 'transparent',
                        color: activeApp === 'B' ? '#FFFFFF' : '#888888',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '40px',
                        cursor: 'pointer',
                        fontWeight: 600,
                        fontSize: '12px',
                        fontFamily: 'monospace'
                    }}
                >
                    B. OPERATOR
                </button>
                <button
                    onClick={() => setActiveApp('C')}
                    style={{
                        background: activeApp === 'C' ? '#333333' : 'transparent',
                        color: activeApp === 'C' ? '#FFFFFF' : '#888888',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '40px',
                        cursor: 'pointer',
                        fontWeight: 600,
                        fontSize: '12px',
                        fontFamily: 'sans-serif',
                        letterSpacing: '1px'
                    }}
                >
                    C. VISIONARY
                </button>
            </div>
        </LanguageProvider>
    )
}

export default AppSwitcher
