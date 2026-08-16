import { afterEach, describe, expect, it, vi } from 'vitest'

import { copyTextWithSelection } from './bridge'

describe('copyTextWithSelection', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('copies through a temporary selected textarea', () => {
    const execCommand = vi.fn(() => true)
    Object.defineProperty(document, 'execCommand', { configurable: true, value: execCommand })

    expect(copyTextWithSelection('HERMES-EXEC-COPY-9472')).toBe(true)
    expect(execCommand).toHaveBeenCalledWith('copy')
    expect(document.querySelector('textarea[data-hermes-clipboard-fallback]')).toBeNull()
  })

  it('reports an unavailable selection-copy command', () => {
    Object.defineProperty(document, 'execCommand', { configurable: true, value: () => false })

    expect(copyTextWithSelection('fallback')).toBe(false)
  })
})
