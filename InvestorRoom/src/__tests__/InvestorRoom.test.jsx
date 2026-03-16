import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import App from '../App'

// Mock IntersectionObserver for Framer Motion
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null
});
window.IntersectionObserver = mockIntersectionObserver;

// Mock Framer Motion to avoid JSDOM animation issues
vi.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }) => <div {...props}>{children}</div>,
        a: ({ children, ...props }) => <a {...props}>{children}</a>,
    },
    AnimatePresence: ({ children }) => <>{children}</>,
}))

describe('Investor Room E2E Logic', () => {

    it('renders the main sections', () => {
        render(<App />)
        const headers = screen.getAllByText(/AI Huevos/i)
        expect(headers.length).toBeGreaterThan(0) // Should find Nav and Footer

        expect(screen.getByText(/Vision & Proof/i)).toBeInTheDocument()
        expect(screen.getByText(/Market Due Diligence/i)).toBeInTheDocument()
        expect(screen.getByText(/The Roadmap/i)).toBeInTheDocument()
    })

    it('theme toggle switches between light and dark mode', () => {
        render(<App />)
        const toggleButton = screen.getByRole('button', { name: /toggle theme/i })

        // Initial state (Light Mode)
        expect(document.documentElement.getAttribute('data-theme')).toBe('light')

        // Click toggle
        fireEvent.click(toggleButton)
        expect(document.documentElement.getAttribute('data-theme')).toBe('dark')

        // Click again
        fireEvent.click(toggleButton)
        expect(document.documentElement.getAttribute('data-theme')).toBe('light')
    })

    it('Opportunity Calculator updates results based on inputs', async () => {
        render(<App />)

        // Initial State Check
        expect(screen.getByText(/1,000 Groups/i)).toBeInTheDocument()

        // Find Inputs (Sliders) by Label Text
        const fosInput = screen.getByLabelText(/Target Family Offices/i)

        // Change value to 1000 (as string)
        fireEvent.change(fosInput, { target: { value: "1000" } })

        // New Expectation: SAM should be 1000 * 2 = 2000
        // Use findByText to wait for state update and effect
        expect(await screen.findByText(/2,000 Groups/i)).toBeInTheDocument()

        // Check Revenue Logic
        expect(screen.getByText(/\$215M/i)).toBeInTheDocument()
    })

    it('Navigation links are present', () => {
        render(<App />)
        const nav = screen.getByRole('navigation')
        expect(nav).toBeInTheDocument()

        // Check links by role and name (using getAll to be safe against potential duplicates, though we aim for unique)
        const pitchLinks = screen.getAllByRole('link', { name: /pitch/i })
        expect(pitchLinks[0]).toHaveAttribute('href', '#pitch')

        const explorerLinks = screen.getAllByRole('link', { name: /explorador/i })
        expect(explorerLinks[0]).toHaveAttribute('href', '#opportunity')

        const caseLinks = screen.getAllByRole('link', { name: /casos/i })
        expect(caseLinks[0]).toHaveAttribute('href', '#cases')
    })
})
