// Animation and transition constants
export const ANIMATION_DURATION = {
  SHORT: 200,
  MEDIUM: 300,
  LONG: 500,
} as const;

// Breakpoint constants (matching Tailwind defaults)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

// Z-index layers
export const Z_INDEX = {
  BACKGROUND: 0,
  CONTENT: 10,
  HEADER: 50,
  MOBILE_MENU_BACKDROP: 30,
  MOBILE_MENU: 40,
  SCROLL_INDICATOR: 20,
} as const;

// Color constants (matching the design system)
export const COLORS = {
  PRIMARY: '#a53860',
  ACCENT: '#f3b64c',
  TEXT_PRIMARY: '#0a0d12',
  TEXT_LIGHT: '#ffffff',
  BORDER: '#b76080',
  SUCCESS: '#e16190',
  BACKGROUND_DARK: '#860d39',
} as const;

// Layout constants
export const LAYOUT = {
  HERO_MIN_HEIGHT: '600px',
  DESKTOP_NAV_HEIGHT: '48px', // 12 * 4px (h-12)
  MOBILE_HEADER_HEIGHT: '64px', // Approximate
} as const;
