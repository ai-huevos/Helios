import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock Element.prototype.animate for Framer Motion in JSDOM
Element.prototype.animate = vi.fn().mockImplementation(() => ({
    finished: Promise.resolve(),
    cancel: vi.fn(),
    play: vi.fn(),
    pause: vi.fn(),
    commitStyles: vi.fn(),
    updatePlaybackRate: vi.fn(),
}));
