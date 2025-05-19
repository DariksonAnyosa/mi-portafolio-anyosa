// src/components/LanguageToggle.js (mejorado)
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <ToggleContainer>
      <ToggleButton onClick={toggleLanguage} aria-label="Change language">
        <LanguageFlag>
          <LanguageText active={language === 'es'} onClick={() => language !== 'es' && toggleLanguage()}>
            ES
          </LanguageText>
          <Divider>/</Divider>
          <LanguageText active={language === 'en'} onClick={() => language !== 'en' && toggleLanguage()}>
            EN
          </LanguageText>
        </LanguageFlag>
        <ActiveIndicator
          initial={false}
          animate={{ x: language === 'es' ? 0 : '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      </ToggleButton>
    </ToggleContainer>
  );
};

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 12px;
`;

const ToggleButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;
  min-width: 66px;
  
  &:hover {
    border-color: var(--accent-color);
  }
`;

const LanguageFlag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  z-index: 1;
  position: relative;
`;

const LanguageText = styled.span`
  color: ${props => props.active ? 'white' : 'var(--text-secondary)'};
  font-weight: ${props => props.active ? '600' : '400'};
  padding: 0 4px;
  z-index: 1;
  transition: color 0.3s ease;
`;

const Divider = styled.span`
  color: var(--text-secondary);
  opacity: 0.5;
`;

const ActiveIndicator = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: var(--accent-color);
  border-radius: 16px;
  z-index: 0;
`;

export default LanguageToggle;