// src/styles/GlobalStyles.js - Solo fuentes locales
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Cargar fuentes locales */
  @font-face {
    font-family: 'Courier';
    src: url('/assets/fonts/Courier-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  
  /* Font Awesome icons */
  @font-face {
    font-family: 'Font Awesome 6 Free';
    src: url('/assets/fonts/fa-solid-900.woff2') format('woff2');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Font Awesome 6 Brands';
    src: url('/assets/fonts/fa-brands-400.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  :root {
    /* Design System 2025 - Brand Colors */
    --brand: #C89A00;
    --brand-light: #F0C54E;
    --brand-soft: rgba(200, 154, 0, 0.15);
    
    /* Surfaces - Light Theme */
    --surface-0: #FFFFFF;
    --surface-1: #F5F5F7;
    --surface-2: #EEEEEF;
    
    /* Text - Light Theme */
    --text-hi: #111827;
    --text-mid: #4B5563;
    --text-low: #6B7280;
    
    /* Semantic Colors */
    --success: #059669;
    --warning: #D97706;
    --error: #DC2626;
    
    /* Shadows & Effects */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    --shadow-brand: 0 4px 14px 0 rgba(200, 154, 0, 0.15);
    
    /* Blur & Backdrop */
    --blur-sm: blur(8px);
    --blur-md: blur(16px);
    
    /* Typography Scale - USANDO COURIER COMO FUENTE PRINCIPAL */
    --font-primary: 'Courier', 'Courier New', monospace, ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo;
    --font-mono: 'Courier', 'Courier New', monospace, ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo;
    
    /* Fluid Typography */
    --text-xs: clamp(0.75rem, 0.8vw, 0.875rem);
    --text-sm: clamp(0.875rem, 0.9vw, 1rem);
    --text-base: clamp(1rem, 1.1vw, 1.125rem);
    --text-lg: clamp(1.125rem, 1.3vw, 1.25rem);
    --text-xl: clamp(1.25rem, 1.5vw, 1.5rem);
    --text-2xl: clamp(1.5rem, 3.2vw, 2.25rem);
    --text-3xl: clamp(2.2rem, 5vw, 3.5rem);
    
    /* Spacing Scale */
    --space-xs: clamp(0.5rem, 1vw, 0.75rem);
    --space-sm: clamp(0.75rem, 1.5vw, 1rem);
    --space-md: clamp(1rem, 2vw, 1.5rem);
    --space-lg: clamp(1.5rem, 3vw, 2rem);
    --space-xl: clamp(2rem, 4vw, 3rem);
    --space-2xl: clamp(3rem, 6vw, 5rem);
    
    /* Header Height */
    --header-height: 60px;
    
    /* Border Radius */
    --radius-sm: 6px;
    --radius-md: 12px;
    --radius-lg: 16px;
    --radius-xl: 24px;
    --radius-full: 9999px;
    
    /* Focus Ring */
    --focus-ring: 0 0 0 2px var(--brand);
    --focus-offset: 2px;
  }

  /* Dark Theme */
  [data-theme="dark"] {
    /* Surfaces - Dark Theme */
    --surface-0: #0B1120;
    --surface-1: #1A2331;
    --surface-2: #293548;
    
    /* Text - Dark Theme */
    --text-hi: #F9FAFB;
    --text-mid: #D1D5DB;
    --text-low: #9CA3AF;
    
    /* Adjust shadows for dark mode */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
  }

  /* Reset & Base Styles */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: var(--header-height);
  }

  body {
    font-family: var(--font-primary) !important;
    font-size: var(--text-base);
    line-height: 1.6;
    color: var(--text-hi);
    background-color: var(--surface-0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    transition: background-color 0.3s ease, color 0.3s ease;
    visibility: visible;
    opacity: 1;
  }

  /* Typography - FORZAR USO DE COURIER */
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-primary) !important;
    font-weight: 700;
    line-height: 1.2;
    color: var(--text-hi);
    letter-spacing: -0.025em;
  }

  h1 { font-size: var(--text-3xl); }
  h2 { font-size: var(--text-2xl); }
  h3 { font-size: var(--text-xl); }
  h4 { font-size: var(--text-lg); }
  h5 { font-size: var(--text-base); }
  h6 { font-size: var(--text-sm); }

  p {
    font-family: var(--font-primary) !important;
    color: var(--text-mid);
    line-height: 1.7;
    margin-bottom: var(--space-md);
  }

  /* Links */
  a {
    font-family: var(--font-primary) !important;
    color: var(--brand);
    text-decoration: none;
    transition: all 0.2s ease;
  }

  a:hover {
    color: var(--brand-light);
  }

  /* Focus States - Accessibility */
  button:focus-visible,
  a:focus-visible,
  input:focus-visible,
  textarea:focus-visible,
  select:focus-visible {
    outline: 2px solid var(--brand);
    outline-offset: var(--focus-offset);
    border-radius: var(--radius-sm);
  }

  /* Form Elements */
  input, textarea, select {
    font-family: var(--font-primary) !important;
    font-size: var(--text-base);
    color: var(--text-hi);
    background-color: var(--surface-0);
    border: 1px solid var(--text-low);
    border-radius: var(--radius-md);
    padding: var(--space-sm) var(--space-md);
    transition: all 0.2s ease;
    width: 100%;
  }

  input:focus, textarea:focus, select:focus {
    outline: none;
    border-color: var(--brand);
    box-shadow: var(--focus-ring);
  }

  /* Buttons */
  button {
    font-family: var(--font-primary) !important;
    font-size: var(--text-base);
    font-weight: 500;
    cursor: pointer;
    border: none;
    border-radius: var(--radius-md);
    padding: var(--space-sm) var(--space-lg);
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-xs);
    text-decoration: none;
    
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  /* Button Variants */
  .btn-primary {
    background-color: var(--brand);
    color: white;
    box-shadow: var(--shadow-brand);
    
    &:hover:not(:disabled) {
      background-color: var(--brand-light);
      transform: translateY(-1px);
      box-shadow: var(--shadow-lg);
    }
  }

  .btn-secondary {
    background-color: var(--surface-1);
    color: var(--text-hi);
    border: 1px solid var(--text-low);
    
    &:hover:not(:disabled) {
      background-color: var(--surface-2);
      border-color: var(--brand);
    }
  }

  /* Forzar fuente en todos los elementos */
  * {
    font-family: var(--font-primary) !important;
  }

  /* Images & Media */
  img, video {
    max-width: 100%;
    height: auto;
    border-radius: var(--radius-md);
  }

  img[loading="lazy"] {
    transition: opacity 0.3s ease;
  }

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--surface-1);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--text-low);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--brand);
  }

  /* Selection */
  ::selection {
    background-color: var(--brand-soft);
    color: var(--text-hi);
  }

  /* Utilities */
  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 var(--space-md);
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* Animations */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes slideUp {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  .animate-fade-in {
    animation: fadeIn 0.6s ease-out;
  }

  .animate-slide-up {
    animation: slideUp 0.4s ease-out;
  }

  /* Reduced Motion */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
    
    html {
      scroll-behavior: auto;
    }
  }

  /* High Contrast Mode */
  @media (prefers-contrast: high) {
    :root {
      --shadow-sm: none;
      --shadow-md: none;
      --shadow-lg: none;
      --shadow-brand: none;
    }
  }

  /* Print Styles */
  @media print {
    * {
      background: transparent !important;
      color: black !important;
      box-shadow: none !important;
    }
    
    a, a:visited {
      text-decoration: underline;
    }
    
    .no-print {
      display: none !important;
    }
  }
`;

export default GlobalStyles;