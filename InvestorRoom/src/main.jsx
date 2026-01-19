import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import InvestorRoom from './pages/InvestorRoom'
import './styles/design-system.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/inversionistas" element={<InvestorRoom />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
