import React from 'react';
import styled from 'styled-components';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleButton onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'light' ? <FiMoon /> : <FiSun />}
    </ToggleButton>
  );
};

const ToggleButton = styled.button`
  background: transparent;
  color: var(--accent-color);
  border: 1px solid var(--border-color);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  box-shadow: var(--card-shadow);
  transition: all 0.3s ease;
  position: relative;
  z-index: 10;
  margin-left: 20px;
  
  &:hover {
    color: var(--accent-light);
    transform: rotate(12deg);
  }
`;

export default ThemeToggle;