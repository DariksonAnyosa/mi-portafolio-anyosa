// src/components/Navbar.js - CORREGIDO COMPLETAMENTE MÓVIL
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiSun, FiMoon, FiGlobe } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { translations } from '../data/translations';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú cuando cambia la ruta
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const t = translations.nav;

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <StyledNavbar ref={navRef} scrolled={scrolled}>
        <ProgressBar style={{ width: `${scrollProgress}%` }} />
        <NavContainer>
          <Logo to="/" aria-label="MiPortafolio - Inicio">
            <LogoBrand>Mi</LogoBrand>Portafolio
          </Logo>

          {/* Desktop Navigation - Centrada */}
          <DesktopNavLinks role="navigation" aria-label="Navegación principal">
            <NavItem>
              <NavLink to="/" $isActive={location.pathname === '/'}>
                {t.home[language]}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/proyectos" $isActive={location.pathname === '/proyectos'}>
                {t.projects[language]}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/habilidades" $isActive={location.pathname === '/habilidades'}>
                {t.skills[language]}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/experiencia" $isActive={location.pathname === '/experiencia'}>
                {t.experience[language]}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contacto" $isActive={location.pathname === '/contacto'}>
                {t.contact[language]}
              </NavLink>
            </NavItem>
          </DesktopNavLinks>

          <NavControls>
            {/* Desktop Controls - Iconos como en móvil */}
            <DesktopControls>
              <IconButton 
                onClick={toggleTheme}
                aria-label={`Cambiar a tema ${theme === 'light' ? 'oscuro' : 'claro'}`}
                title={`Cambiar a tema ${theme === 'light' ? 'oscuro' : 'claro'}`}
              >
                {theme === 'light' ? <FiMoon size={16} /> : <FiSun size={16} />}
              </IconButton>
              
              <IconButton 
                onClick={toggleLanguage}
                aria-label={`Cambiar idioma a ${language === 'es' ? 'inglés' : 'español'}`}
                title={`Cambiar idioma a ${language === 'es' ? 'inglés' : 'español'}`}
              >
                <FiGlobe size={16} />
                <LanguageIndicator>{language.toUpperCase()}</LanguageIndicator>
              </IconButton>
            </DesktopControls>
            
            {/* Mobile Controls - Solo iconos pequeños y hamburguesa */}
            <MobileControlsHeader>
              <IconButton 
                onClick={toggleTheme}
                aria-label={`Cambiar a tema ${theme === 'light' ? 'oscuro' : 'claro'}`}
              >
                {theme === 'light' ? <FiMoon size={16} /> : <FiSun size={16} />}
              </IconButton>
              
              <IconButton 
                onClick={toggleLanguage}
                aria-label={`Cambiar idioma a ${language === 'es' ? 'inglés' : 'español'}`}
              >
                <FiGlobe size={16} />
                <LanguageIndicator>{language.toUpperCase()}</LanguageIndicator>
              </IconButton>
              
              <MenuButton 
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              >
                {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
              </MenuButton>
            </MobileControlsHeader>
          </NavControls>
        </NavContainer>
      </StyledNavbar>

      {/* Mobile Menu Overlay */}
      <MobileMenuOverlay isOpen={isOpen} onClick={() => setIsOpen(false)} />
      
      {/* Mobile Navigation Menu */}
      <MobileNavLinks isOpen={isOpen}>
        <MobileMenuContent>
          <MobileNavItem>
            <MobileNavLink 
              to="/" 
              $isActive={location.pathname === '/'}
              onClick={handleLinkClick}
            >
              {t.home[language]}
            </MobileNavLink>
          </MobileNavItem>
          <MobileNavItem>
            <MobileNavLink 
              to="/proyectos" 
              $isActive={location.pathname === '/proyectos'}
              onClick={handleLinkClick}
            >
              {t.projects[language]}
            </MobileNavLink>
          </MobileNavItem>
          <MobileNavItem>
            <MobileNavLink 
              to="/habilidades" 
              $isActive={location.pathname === '/habilidades'}
              onClick={handleLinkClick}
            >
              {t.skills[language]}
            </MobileNavLink>
          </MobileNavItem>
          <MobileNavItem>
            <MobileNavLink 
              to="/experiencia" 
              $isActive={location.pathname === '/experiencia'}
              onClick={handleLinkClick}
            >
              {t.experience[language]}
            </MobileNavLink>
          </MobileNavItem>
          <MobileNavItem>
            <MobileNavLink 
              to="/contacto" 
              $isActive={location.pathname === '/contacto'}
              onClick={handleLinkClick}
            >
              {t.contact[language]}
            </MobileNavLink>
          </MobileNavItem>
        </MobileMenuContent>
      </MobileNavLinks>
    </>
  );
};

// Styled Components
const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1100;
  height: var(--header-height);
  background-color: ${props => props.scrolled 
    ? 'rgba(255, 255, 255, 0.8)' 
    : 'rgba(255, 255, 255, 0.95)'
  };
  backdrop-filter: var(--blur-md);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
  border-bottom: 1px solid ${props => props.scrolled 
    ? 'rgba(17, 24, 39, 0.1)' 
    : 'transparent'
  };
  transition: all 0.3s ease;
  
  [data-theme="dark"] & {
    background-color: ${props => props.scrolled 
      ? 'rgba(11, 17, 32, 0.8)' 
      : 'rgba(11, 17, 32, 0.95)'
    };
    border-bottom-color: ${props => props.scrolled 
      ? 'rgba(249, 250, 251, 0.1)' 
      : 'transparent'
    };
  }
`;

const NavContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-md);
  
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Logo = styled(Link)`
  font-family: var(--font-mono);
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  font-weight: 700;
  color: var(--text-hi);
  text-decoration: none;
  letter-spacing: -0.02em;
  transition: transform 0.2s ease;
  line-height: 1;
  display: flex;
  align-items: center;
  z-index: 1200;
  
  &:hover {
    transform: translateY(-1px);
  }
`;

const LogoBrand = styled.span`
  color: var(--brand);
  font-weight: 800;
`;

// Desktop Navigation
const DesktopNavLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-lg);
  list-style: none;
  line-height: 1;
  
  @media (max-width: 1200px) {
    gap: var(--space-md);
  }
  
  @media (max-width: 900px) {
    gap: var(--space-sm);
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li``;

const NavLink = styled(Link)`
  position: relative;
  color: var(--text-hi);
  font-weight: 500;
  font-size: var(--text-base);
  text-decoration: none;
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-sm);
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  line-height: 1;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: ${props => props.$isActive ? '100%' : '0'};
    height: 3px;
    background-color: var(--brand);
    border-radius: 2px;
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: var(--brand);
    background-color: var(--brand-soft);
    
    &::after {
      width: 100%;
    }
  }
`;

// Mobile Navigation
const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1050;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavLinks = styled.nav`
  position: fixed;
  top: var(--header-height);
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--surface-0);
  z-index: 1060;
  transform: translateX(${props => props.isOpen ? '0' : '100%'});
  transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  overflow-y: auto;
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileMenuContent = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: var(--space-2xl) var(--space-md);
  gap: var(--space-md);
  height: 100%;
`;

const MobileNavItem = styled.li``;

const MobileNavLink = styled(Link)`
  display: block;
  color: var(--text-hi);
  font-weight: 500;
  font-size: var(--text-lg);
  text-decoration: none;
  padding: var(--space-lg);
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
  border: 1px solid transparent;
  
  ${props => props.$isActive && `
    background-color: var(--brand-soft);
    color: var(--brand);
    border-color: var(--brand);
  `}
  
  &:hover {
    background-color: var(--brand-soft);
    color: var(--brand);
    border-color: var(--brand);
  }
`;

const DesktopControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--space-xs);
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MobileControlsHeader = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    z-index: 1200;
  }
`;

const IconButton = styled.button`
  position: relative;
  width: 36px;
  height: 36px;
  border: 1px solid var(--text-low);
  border-radius: var(--radius-sm);
  background-color: var(--surface-0);
  color: var(--text-hi);
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
  
  /* Estilos especiales para móvil */
  @media (max-width: 768px) {
    border-color: rgba(255, 255, 255, 0.2);
    background-color: rgba(255, 255, 255, 0.1);
    
    [data-theme="dark"] & {
      border-color: rgba(255, 255, 255, 0.2);
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
  
  &:hover {
    border-color: var(--brand);
    color: var(--brand);
    background-color: var(--brand-soft);
    transform: scale(1.05);
  }
  
  svg {
    flex-shrink: 0;
  }
`;

const LanguageIndicator = styled.span`
  position: absolute;
  bottom: -2px;
  right: -2px;
  font-size: 8px;
  font-weight: 600;
  background: var(--brand);
  color: white;
  padding: 1px 2px;
  border-radius: 2px;
  line-height: 1;
`;

const MenuButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-sm);
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--text-hi);
  transition: all 0.2s ease;
  backdrop-filter: blur(8px);
  
  [data-theme="dark"] & {
    border-color: rgba(255, 255, 255, 0.2);
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  &:hover {
    border-color: var(--brand);
    color: var(--brand);
    background-color: var(--brand-soft);
    transform: scale(1.05);
  }
  
  svg {
    flex-shrink: 0;
  }
`;

const ProgressBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 3px;
  width: 0%;
  background: linear-gradient(to right, var(--brand), var(--brand-light));
  pointer-events: none;
  z-index: 1200;
  transition: width 0.1s ease-out;
`;

export default Navbar;