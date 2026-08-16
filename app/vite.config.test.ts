import { describe, expect, it } from 'vitest'

import { PWA_WORKBOX_OPTIONS } from './vite.config'

describe('PWA Workbox cache policy', () => {
  it('does not precache the token-injected HTML shell', () => {
    expect(PWA_WORKBOX_OPTIONS.globPatterns).toContain('**/*.{js,css,html,woff,woff2,ttf,otf,eot,png,jpg,jpeg,svg,gif,webp,ico}')
    expect(PWA_WORKBOX_OPTIONS.globIgnores).toContain('**/index.html')
    expect(PWA_WORKBOX_OPTIONS.navigateFallback).toBeNull()
  })
})
