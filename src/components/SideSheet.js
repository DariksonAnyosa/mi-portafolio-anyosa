import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiHome, FiBriefcase, FiTool, FiFileText, FiMail } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';

const SideSheet = ({ isOpen, onClose }) => {
  const location = useLocation();

  const navItems = [
    { icon: FiHome, label: 'Inicio', path: '/' },
    { icon: FiBriefcase, label: 'Proyectos', path: '/proyectos' },
    { icon: FiTool, label: 'Habilidades', path: '/habilidades' },
    { icon: FiFileText, label: 'Experiencia', path: '/experiencia' },
    { icon: FiMail, label: 'Contacto', path: '/contacto' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <Sheet
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            <Header>
              <CloseButton onClick={onClose} aria-label="Cerrar menú">
                <FiX size={24} />
              </CloseButton>
            </Header>

            <Nav>
              {navItems.map(({ icon: Icon, label, path }) => (
                <NavItem
                  key={path}
                  to={path}
                  $isActive={location.pathname === path}
                  onClick={onClose}
                >
                  <Icon size={20} />
                  <span>{label}</span>
                </NavItem>
              ))}
            </Nav>

            <Divider />

            <Controls>
              <ControlItem>
                <ThemeToggle isMobile={true} />
              </ControlItem>
              <ControlItem>
                <LanguageToggle isMobile={true} />
              </ControlItem>
            </Controls>
          </Sheet>
        </>
      )}
    </AnimatePresence>
  );
};

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  z-index: 100;
`;

const Sheet = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 80vw;
  max-width: 360px;
  background-color: var(--surface-0);
  border-radius: 24px 0 0 24px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  z-index: 101;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Header = styled.div`
  padding: 16px;
  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  background: transparent;
  color: var(--text-hi);
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: var(--brand);
    color: var(--brand);
  }

  &:focus-visible {
    outline: 2px solid var(--brand);
    outline-offset: 2px;
  }
`;

const Nav = styled.nav`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 12px;
  color: ${props => props.$isActive ? 'var(--brand)' : 'var(--text-hi)'};
  background-color: ${props => props.$isActive ? 'var(--brand-soft)' : 'transparent'};
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    color: var(--brand);
    background-color: var(--brand-soft);
  }

  &:focus-visible {
    outline: 2px solid var(--brand);
    outline-offset: 2px;
  }
`;

const Divider = styled.hr`
  margin: 8px 16px;
  border: none;
  border-top: 1px solid var(--border-color);
`;

const Controls = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ControlItem = styled.div`
  width: 100%;
`;

export default SideSheet; 