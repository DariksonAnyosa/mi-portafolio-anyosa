// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiSun, FiMoon, FiGlobe } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import LanguageToggle from './LanguageToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const t = translations.nav;

  return (
    <StyledNavbar scrolled={scrolled}>
      <div className="navbar-container">
        <Logo to="/">
          <LogoAccent>Mi</LogoAccent>Portafolio
        </Logo>

        <NavContainer>
          <NavLinks isOpen={isOpen}>
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
            
            {/* Botones de tema e idioma en móvil */}
            <MobileButtons>
              <ThemeToggleMobile onClick={toggleTheme}>
                <span>{theme === 'light' 
                  ? translations.theme.dark[language] 
                  : translations.theme.light[language]}
                </span>
                {theme === 'light' ? <FiMoon /> : <FiSun />}
              </ThemeToggleMobile>
              
              <LanguageToggleMobile onClick={toggleLanguage}>
                <span>{language === 'es' 
                  ? translations.language.english[language]
                  : translations.language.spanish[language]}
                </span>
                <FiGlobe />
              </LanguageToggleMobile>
            </MobileButtons>
          </NavLinks>
          
          {/* Botones de tema e idioma en escritorio */}
          <DesktopButtons>
            <LanguageToggle />
            <ThemeToggleDesktop onClick={toggleTheme} aria-label="Cambiar tema">
              {theme === 'light' ? <FiMoon /> : <FiSun />}
            </ThemeToggleDesktop>
          </DesktopButtons>
          
          <MenuButton onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX /> : <FiMenu />}
          </MenuButton>
        </NavContainer>
      </div>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: ${(props) => (props.scrolled ? '10px 0' : '20px 0')};
  background-color: ${(props) =>
    props.scrolled ? 'var(--bg-secondary)' : 'var(--bg-secondary)'};
  box-shadow: ${(props) =>
    props.scrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : 'none'};
  transition: all 0.3s ease;

  .navbar-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  text-decoration: none;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const LogoAccent = styled.span`
  color: var(--accent-color);
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
`;

const DesktopButtons = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: transparent;
  color: var(--text-primary);
  border: none;
  font-size: 24px;
  cursor: pointer;
  margin-left: 10px;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: ${(props) => (props.isOpen ? '0' : '-100%')};
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--bg-secondary);
    padding: 80px 20px;
    gap: 20px;
    transition: top 0.3s ease;
    z-index: 99;
  }
`;

const NavItem = styled.li``;

const NavLink = styled(Link)`
  color: ${(props) => (props.$isActive ? 'var(--accent-color)' : 'var(--text-primary)')};
  font-weight: 500;
  position: relative;
  text-decoration: none;
  padding: 8px 0;
  
  &:after {
    content: '';
    position: absolute;
    width: ${(props) => (props.$isActive ? '100%' : '0')};
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--accent-color);
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    display: block;
    padding: 10px 0;
  }
`;

const MobileButtons = styled.div`
  display: none;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const ThemeToggleDesktop = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: var(--accent-color);
  border: 1px solid var(--border-color);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 18px;
  transition: all 0.3s ease;
  cursor: pointer;
  margin-left: 12px;
  
  &:hover {
    color: var(--accent-light);
    transform: rotate(12deg);
  }
`;

const ThemeToggleMobile = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  
  svg {
    color: var(--accent-color);
    font-size: 1.2rem;
  }
`;

const LanguageToggleMobile = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  
  svg {
    color: var(--accent-color);
    font-size: 1.2rem;
  }
`;

export default Navbar;