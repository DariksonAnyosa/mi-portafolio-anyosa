// src/styles/theme.js - UX 2025 Design System
export const lightTheme = {
  colors: {
    brand: '#B88700',
    'brand-light': '#F0C54E',
    'brand-soft': 'rgba(184, 135, 0, 0.1)',
    'surface-0': '#FFFFFF',
    'surface-1': '#F9FAFB',
    'surface-2': '#F3F4F6',
    'text-hi': '#111827',
    'text-lo': '#4B5563',
    'border-color': 'rgba(0, 0, 0, 0.1)',
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  },
  // Brand Colors
  brand: "#C89A00",
  brandLight: "#F0C54E", 
  brandSoft: "rgba(200, 154, 0, 0.15)",
  
  // Surfaces
  surface0: "#FFFFFF",
  surface1: "#F5F5F7",
  surface2: "#EEEEEF",
  
  // Text
  textHi: "#111827",
  textMid: "#4B5563", 
  textLow: "#6B7280",
  
  // Semantic
  success: "#059669",
  warning: "#D97706",
  error: "#DC2626",
  
  // Shadows
  shadowSm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  shadowMd: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  shadowLg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
  shadowBrand: "0 4px 14px 0 rgba(200, 154, 0, 0.15)",
  
  // Typography
  fontPrimary: "'Inter', 'IBM Plex Mono', 'Courier', system-ui, sans-serif",
  fontMono: "'IBM Plex Mono', 'Courier New', monospace",
  
  // Spacing & Layout
  headerHeight: "clamp(56px, 4.5vw, 72px)",
  radiusSm: "6px",
  radiusMd: "12px", 
  radiusLg: "16px",
  radiusXl: "24px",
};

export const darkTheme = {
  colors: {
    brand: '#B88700',
    'brand-light': '#F0C54E',
    'brand-soft': 'rgba(184, 135, 0, 0.15)',
    'surface-0': '#111827',
    'surface-1': '#1F2937',
    'surface-2': '#374151',
    'text-hi': '#F9FAFB',
    'text-lo': '#9CA3AF',
    'border-color': 'rgba(255, 255, 255, 0.1)',
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.25)',
    md: '0 4px 6px rgba(0, 0, 0, 0.3)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
  },
  // Brand Colors (same as light)
  brand: "#C89A00",
  brandLight: "#F0C54E",
  brandSoft: "rgba(200, 154, 0, 0.15)",
  
  // Surfaces - Dark
  surface0: "#0B1120",
  surface1: "#1A2331", 
  surface2: "#293548",
  
  // Text - Dark  
  textHi: "#F9FAFB",
  textMid: "#D1D5DB",
  textLow: "#9CA3AF",
  
  // Semantic (same as light)
  success: "#059669",
  warning: "#D97706", 
  error: "#DC2626",
  
  // Shadows - Adjusted for dark
  shadowSm: "0 1px 2px 0 rgba(0, 0, 0, 0.3)",
  shadowMd: "0 4px 6px -1px rgba(0, 0, 0, 0.4)",
  shadowLg: "0 10px 15px -3px rgba(0, 0, 0, 0.5)",
  shadowBrand: "0 4px 14px 0 rgba(200, 154, 0, 0.15)",
  
  // Typography (same as light)
  fontPrimary: "'Inter', 'IBM Plex Mono', 'Courier', system-ui, sans-serif",
  fontMono: "'IBM Plex Mono', 'Courier New', monospace",
  
  // Spacing & Layout (same as light)
  headerHeight: "clamp(56px, 4.5vw, 72px)",
  radiusSm: "6px",
  radiusMd: "12px",
  radiusLg: "16px", 
  radiusXl: "24px",
};

// Breakpoints
export const breakpoints = {
  sm: '640px',
  md: '768px', 
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Fluid Typography Helpers
export const fluidText = {
  xs: 'clamp(0.75rem, 0.8vw, 0.875rem)',
  sm: 'clamp(0.875rem, 0.9vw, 1rem)', 
  base: 'clamp(1rem, 1.1vw, 1.125rem)',
  lg: 'clamp(1.125rem, 1.3vw, 1.25rem)',
  xl: 'clamp(1.25rem, 1.5vw, 1.5rem)',
  '2xl': 'clamp(1.5rem, 3.2vw, 2.25rem)',
  '3xl': 'clamp(2.2rem, 5vw, 3.5rem)',
};

// Fluid Spacing Helpers  
export const fluidSpace = {
  xs: 'clamp(0.5rem, 1vw, 0.75rem)',
  sm: 'clamp(0.75rem, 1.5vw, 1rem)',
  md: 'clamp(1rem, 2vw, 1.5rem)', 
  lg: 'clamp(1.5rem, 3vw, 2rem)',
  xl: 'clamp(2rem, 4vw, 3rem)',
  '2xl': 'clamp(3rem, 6vw, 5rem)',
};

// Animation Presets
export const transitions = {
  fast: '0.15s ease',
  base: '0.2s ease', 
  slow: '0.3s ease',
  spring: '0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
};

// Z-Index Scale
export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100, 
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
};

export const cssVariables = theme => `
  :root {
    --brand: ${theme.colors.brand};
    --brand-light: ${theme.colors['brand-light']};
    --brand-soft: ${theme.colors['brand-soft']};
    --surface-0: ${theme.colors['surface-0']};
    --surface-1: ${theme.colors['surface-1']};
    --surface-2: ${theme.colors['surface-2']};
    --text-hi: ${theme.colors['text-hi']};
    --text-lo: ${theme.colors['text-lo']};
    --border-color: ${theme.colors['border-color']};
    --shadow-sm: ${theme.shadows.sm};
    --shadow-md: ${theme.shadows.md};
    --shadow-lg: ${theme.shadows.lg};

    /* Typography */
    --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
    --font-mono: 'JetBrains Mono', Menlo, Monaco, Consolas, 'Liberation Mono', monospace;

    /* Transitions */
    --transition-base: 0.2s ease-in-out;
    --transition-smooth: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-spring: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);

    /* Spacing */
    --spacing-1: 0.25rem;
    --spacing-2: 0.5rem;
    --spacing-3: 0.75rem;
    --spacing-4: 1rem;
    --spacing-5: 1.25rem;
    --spacing-6: 1.5rem;
    --spacing-8: 2rem;
    --spacing-10: 2.5rem;
    --spacing-12: 3rem;
    --spacing-16: 4rem;
    --spacing-20: 5rem;
    --spacing-24: 6rem;

    /* Border Radius */
    --radius-sm: 0.375rem;
    --radius-md: 0.5rem;
    --radius-lg: 0.75rem;
    --radius-xl: 1rem;
    --radius-2xl: 1.5rem;

    /* Z-index */
    --z-drawer: 100;
    --z-overlay: 200;
    --z-modal: 300;
    --z-popover: 400;
    --z-tooltip: 500;
  }
`;

export default { lightTheme, darkTheme, breakpoints, fluidText, fluidSpace, transitions, zIndex };