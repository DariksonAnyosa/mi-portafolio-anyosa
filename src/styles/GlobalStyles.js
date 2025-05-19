// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Variables de tema claro (default) */
    --bg-primary: #f9f9f9;
    --bg-secondary: #ffffff;
    --text-primary: #333333;
    --text-secondary: #666666;
    --accent-color: #b8860b; /* Dorado elegante */
    --accent-light: #d4af37; /* Dorado más claro */
    --accent-dark: #8b6914; /* Dorado más oscuro */
    --card-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
    --border-color: rgba(0, 0, 0, 0.05);
    --hover-color: rgba(184, 134, 11, 0.05);
  }

  [data-theme="dark"] {
    /* Variables de tema oscuro */
    --bg-primary: #121212;
    --bg-secondary: #1e1e1e;
    --text-primary: #e0e0e0;
    --text-secondary: #a0a0a0;
    --accent-color: #d4af37; /* Dorado más claro para tema oscuro */
    --accent-light: #ebcd68;
    --accent-dark: #b8860b;
    --card-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    --border-color: rgba(255, 255, 255, 0.05);
    --hover-color: rgba(212, 175, 55, 0.08);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background-color 0.3s, color 0.3s, border 0.3s, box-shadow 0.3s;
  }

  body {
    font-family: 'Inter', 'Segoe UI', 'Roboto', sans-serif;
    background-color: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.6;
  }

  a {
    color: var(--accent-color);
    text-decoration: none;
    transition: color 0.2s;
  }

  a:hover {
    color: var(--accent-light);
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Estilo para scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--bg-primary);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--accent-color);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--accent-dark);
  }

  /* Estilos para selección de texto */
  ::selection {
    background-color: var(--accent-color);
    color: white;
  }

  /* Estilos básicos para headings */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 0.5em;
    color: var(--text-primary);
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  h5 {
    font-size: 1.25rem;
  }

  h6 {
    font-size: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  /* Estilo para inputs y formularios */
  input, textarea, select {
    font-family: inherit;
    font-size: 1rem;
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid var(--border-color);
    background-color: var(--bg-primary);
    color: var(--text-primary);
    transition: border-color 0.3s, box-shadow 0.3s;
  }

  input:focus, textarea:focus, select:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 0 2px rgba(184, 134, 11, 0.2);
  }

  /* Animaciones globales */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  /* Utilidades */
  .fade-in {
    animation: fadeIn 0.5s ease-in-out;
  }

  .slide-up {
    animation: slideUp 0.5s ease-in-out;
  }
`;

export default GlobalStyles;