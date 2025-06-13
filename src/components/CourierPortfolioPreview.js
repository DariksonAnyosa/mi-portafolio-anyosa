// Ejemplo de cómo se ve todo tu portafolio ahora con Courier
import React from 'react';
import styled from 'styled-components';

const CourierPortfolioPreview = () => {
  return (
    <PreviewContainer>
      <Header>
        <Logo>MiPortafolio</Logo>
        <NavItems>
          <NavItem>inicio</NavItem>
          <NavItem>proyectos</NavItem>
          <NavItem>habilidades</NavItem>
          <NavItem>contacto</NavItem>
        </NavItems>
      </Header>
      
      <HeroSection>
        <Greeting>¡Hola, soy</Greeting>
        <MainTitle>Darikson</MainTitle>
        <Subtitle>Desarrollador Full Stack</Subtitle>
        <Description>
          Creo experiencias digitales modernas y funcionales 
          con tecnologías de vanguardia.
        </Description>
        <ActionButton>Ver Proyectos →</ActionButton>
      </HeroSection>
      
      <ProjectSection>
        <SectionTitle>Proyectos Destacados</SectionTitle>
        <ProjectCard>
          <ProjectTitle>E-commerce Platform</ProjectTitle>
          <ProjectDescription>
            Una plataforma completa de comercio electrónico
            construida con React, Node.js y PostgreSQL.
          </ProjectDescription>
          <TechStack>
            <TechTag>React</TechTag>
            <TechTag>Node.js</TechTag>
            <TechTag>PostgreSQL</TechTag>
          </TechStack>
        </ProjectCard>
      </ProjectSection>
      
      <CodeExample>
        <CodeTitle>Ejemplo de código:</CodeTitle>
        <CodeBlock>
{`function crearProyecto() {
  const proyecto = {
    nombre: "Mi Portafolio",
    tecnologia: "React",
    tipografia: "Courier"
  };
  
  return proyecto;
}`}
        </CodeBlock>
      </CodeExample>
      
      <Footer>
        <FooterText>© 2025 - Hecho con ❤️ y Courier</FooterText>
      </Footer>
    </PreviewContainer>
  );
};

const PreviewContainer = styled.div`
  font-family: 'Courier', 'Courier New', monospace;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  min-height: 100vh;
  letter-spacing: 0.3px;
  line-height: 1.7;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--bg-secondary);
  box-shadow: var(--card-shadow);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent-color);
`;

const NavItems = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavItem = styled.span`
  color: var(--text-primary);
  cursor: pointer;
  transition: color 0.3s;
  
  &:hover {
    color: var(--accent-color);
  }
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 5rem 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Greeting = styled.div`
  color: var(--accent-color);
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const MainTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: 1px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.6rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  letter-spacing: 0.3px;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.8;
`;

const ActionButton = styled.button`
  background-color: var(--accent-color);
  color: white;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 30px;
  font-family: inherit;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--accent-dark);
    transform: translateY(-2px);
  }
`;

const ProjectSection = styled.section`
  padding: 3rem 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--text-primary);
  letter-spacing: 0.5px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: var(--accent-color);
  }
`;

const ProjectCard = styled.div`
  background-color: var(--bg-secondary);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: var(--card-shadow);
  border: 1px solid var(--border-color);
`;

const ProjectTitle = styled.h4`
  font-size: 1.4rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
  letter-spacing: 0.3px;
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.8;
`;

const TechStack = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const TechTag = styled.span`
  background-color: var(--hover-color);
  color: var(--accent-color);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
`;

const CodeExample = styled.section`
  padding: 3rem 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const CodeTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const CodeBlock = styled.pre`
  background-color: var(--bg-secondary);
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  overflow-x: auto;
  color: var(--text-primary);
  white-space: pre;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 2rem;
  background-color: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
`;

const FooterText = styled.p`
  color: var(--text-secondary);
  margin: 0;
`;

export default CourierPortfolioPreview;
