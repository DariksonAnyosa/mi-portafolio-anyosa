// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <Copyright>© {currentYear} MiPortafolio. Todos los derechos reservados.</Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  border-top: 1px solid var(--border-color);
  padding: 20px 0;
  margin-top: 80px;
`;

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const Copyright = styled.p`
  color: var(--text-secondary);
  font-size: 0.8rem;
`;

export default Footer;