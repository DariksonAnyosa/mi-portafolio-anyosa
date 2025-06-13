// src/components/ThemeToggle.js - UX 2025 Dark Mode Toggle
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = ({ isMobile }) => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evitar hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Detectar preferencia del sistema
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      const savedTheme = localStorage.getItem('theme');
      if (!savedTheme) {
        // Solo aplicar preferencia del sistema si no hay tema guardado
        toggleTheme(mediaQuery.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [toggleTheme]);

  if (!mounted) {
    return null; // Evitar flash durante la hidratación
  }

  if (isMobile) {
    return (
      <MobileToggleButton
        onClick={toggleTheme}
        aria-pressed={theme === 'dark'}
        aria-label={`Cambiar a tema ${theme === 'light' ? 'oscuro' : 'claro'}`}
        title={`Cambiar a tema ${theme === 'light' ? 'oscuro' : 'claro'}`}
      >
        <span>
          {theme === 'light' ? 'Modo oscuro' : 'Modo claro'}
        </span>
        <IconWrapper>
          {theme === 'light' ? (
            <FiMoon size={20} />
          ) : (
            <FiSun size={20} />
          )}
        </IconWrapper>
      </MobileToggleButton>
    );
  }

  return (
    <ToggleButton
      onClick={toggleTheme}
      aria-pressed={theme === 'dark'}
      aria-label={`Cambiar a tema ${theme === 'light' ? 'oscuro' : 'claro'}`}
      title={`Cambiar a tema ${theme === 'light' ? 'oscuro' : 'claro'}`}
    >
      <IconWrapper>
        {theme === 'light' ? (
          <FiMoon size={18} />
        ) : (
          <FiSun size={18} />
        )}
      </IconWrapper>
    </ToggleButton>
  );
};

const ToggleButton = styled.button`
  position: relative;
  width: 44px;
  height: 44px;
  border: 1px solid var(--text-low);
  border-radius: var(--radius-md);
  background-color: var(--surface-0);
  color: var(--text-hi);
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  &:hover {
    border-color: var(--brand);
    color: var(--brand);
    transform: scale(1.05);
  }
  
  &:focus-visible {
    outline: 2px solid var(--brand);
    outline-offset: 2px;
  }
  
  &[aria-pressed="true"] {
    background-color: var(--brand-soft);
    border-color: var(--brand);
    color: var(--brand);
  }
`;

const MobileToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--space-md);
  border: 1px solid var(--text-low);
  border-radius: var(--radius-md);
  background-color: var(--surface-1);
  color: var(--text-hi);
  font-size: var(--text-base);
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: var(--brand);
    background-color: var(--brand-soft);
  }
  
  &[aria-pressed="true"] {
    background-color: var(--brand-soft);
    border-color: var(--brand);
  }
  
  svg {
    color: var(--brand);
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  
  ${ToggleButton}:hover & {
    transform: rotate(180deg);
  }
`;

export default ThemeToggle;