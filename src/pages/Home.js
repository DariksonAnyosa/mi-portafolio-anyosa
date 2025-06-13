// src/pages/Home.js - UX 2025 Simplified Version (Complete)
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { translations } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNodeJs, FaPython } from 'react-icons/fa';

const Home = () => {
  const { language } = useLanguage();
  const t = translations.home;

  return (
    <HomeContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent
          as={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <HeroGreeting>{t.greeting[language]}</HeroGreeting>
          <HeroTitle>Darikson</HeroTitle>
          <HeroSubtitle>{t.subtitle[language]}</HeroSubtitle>
          <HeroDescription>
            {t.description[language]}
          </HeroDescription>
          
          <HeroActions>
            <PrimaryButton to="/proyectos" className="btn-primary">
              {t.viewProjects[language]} <FaArrowRight />
            </PrimaryButton>
            <SecondaryButton to="/contacto" className="btn-secondary">
              {t.contact[language]}
            </SecondaryButton>
          </HeroActions>
          
          <SocialLinks>
            <SocialLink 
              href="https://github.com/DariksonAnyosa" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </SocialLink>
            <SocialLink 
              href="https://www.linkedin.com/in/dariksonanyosa/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </SocialLink>
            <SocialLink 
              href="mailto:dariksoma@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </SocialLink>
          </SocialLinks>
        </HeroContent>
      </HeroSection>

      {/* Quick Skills Preview */}
      <Section>
        <div className="container">
          <SectionHeader>
            <SectionTitle>Tecnologías principales</SectionTitle>
            <SectionDescription>
              Estas son las herramientas con las que trabajo día a día
            </SectionDescription>
          </SectionHeader>
          
          <SkillsGrid>
            <SkillCard
              as={motion.div}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <SkillIcon>
                <FaReact size={40} color="#61DAFB" />
              </SkillIcon>
              <SkillName>React</SkillName>
              <SkillText>Frontend moderno</SkillText>
            </SkillCard>
            
            <SkillCard
              as={motion.div}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <SkillIcon>
                <FaNodeJs size={40} color="#339933" />
              </SkillIcon>
              <SkillName>Node.js</SkillName>
              <SkillText>Backend escalable</SkillText>
            </SkillCard>
            
            <SkillCard
              as={motion.div}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <SkillIcon>
                <FaPython size={40} color="#3776AB" />
              </SkillIcon>
              <SkillName>Python</SkillName>
              <SkillText>Data & AI</SkillText>
            </SkillCard>
          </SkillsGrid>
          
          <ViewAllContainer>
            <ViewAllButton to="/habilidades" className="btn-secondary">
              Ver todas las habilidades <FaArrowRight />
            </ViewAllButton>
          </ViewAllContainer>
        </div>
      </Section>

      {/* Contact Section */}
      <ContactSection>
        <div className="container">
          <ContactLayout>
            <ContactContent>
              <ContactTitle>{t.workTogether[language]}</ContactTitle>
              <ContactDescription>
                {t.availability[language]}
              </ContactDescription>
              
              <SocialProof>
                <span>Colaborando con empresas innovadoras</span>
              </SocialProof>
            </ContactContent>
            
            <ContactForm>
              <FormGroup>
                <label htmlFor="name">Nombre</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Tu nombre"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="tu@email.com"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <label htmlFor="message">Mensaje</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4"
                  placeholder="Cuéntame sobre tu proyecto..."
                  required
                />
              </FormGroup>
              
              <SubmitButton type="submit" className="btn-primary">
                Enviar mensaje
              </SubmitButton>
            </ContactForm>
          </ContactLayout>
        </div>
      </ContactSection>
    </HomeContainer>
  );
};

// Styled Components
const HomeContainer = styled.main`
  padding-top: var(--header-height);
`;

const HeroSection = styled.section`
  min-height: calc(100vh - var(--header-height));
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--space-2xl) 0;
  
  @media (min-width: 1024px) {
    padding-top: 72px;
  }
  
  @media (max-width: 768px) {
    padding-top: 48px;
  }
`;

const HeroContent = styled.div`
  max-width: 640px;
  margin: 0 auto;
  padding: 0 var(--space-md);
`;

const HeroGreeting = styled.span`
  display: block;
  font-size: var(--text-lg);
  color: var(--brand);
  font-weight: 500;
  margin-bottom: var(--space-sm);
  font-family: var(--font-mono);
`;

const HeroTitle = styled.h1`
  font-size: var(--text-3xl);
  font-weight: 800;
  color: var(--text-hi);
  margin-bottom: var(--space-md);
  line-height: 1.1;
  letter-spacing: -0.02em;
`;

const HeroSubtitle = styled.h2`
  font-size: var(--text-2xl);
  font-weight: 600;
  color: var(--text-mid);
  margin-bottom: var(--space-lg);
  line-height: 1.3;
`;

const HeroDescription = styled.p`
  font-size: var(--text-base);
  color: var(--text-mid);
  margin-bottom: var(--space-xl);
  line-height: 1.7;
`;

const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-md);
  margin-bottom: var(--space-xl);
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-md) var(--space-lg);
  border-radius: var(--radius-md);
  font-weight: 600;
  text-decoration: none;
  background-color: var(--brand);
  color: white;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-brand);
    background-color: var(--brand);
    color: white;
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-md) var(--space-lg);
  border-radius: var(--radius-md);
  font-weight: 500;
  text-decoration: none;
  background-color: var(--surface-1);
  color: var(--text-hi);
  border: 1px solid var(--text-low);
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    background-color: var(--surface-2);
    border-color: var(--brand);
    color: var(--text-hi);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--space-lg);
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background-color: var(--surface-1);
  color: var(--text-mid);
  font-size: 20px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: var(--brand-soft);
    color: var(--brand);
    transform: translateY(-2px);
  }
`;

const Section = styled.section`
  padding: var(--space-2xl) 0;
  
  &:nth-child(even) {
    background-color: var(--surface-1);
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 640px;
  margin: 0 auto var(--space-2xl);
`;

const SectionTitle = styled.h2`
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--text-hi);
  margin-bottom: var(--space-sm);
`;

const SectionDescription = styled.p`
  font-size: var(--text-lg);
  color: var(--text-mid);
  line-height: 1.6;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-lg);
  margin-bottom: var(--space-xl);
`;

const SkillCard = styled.div`
  padding: var(--space-lg);
  background-color: var(--surface-0);
  border-radius: var(--radius-lg);
  text-align: center;
  border: 1px solid rgba(107, 114, 128, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
    border-color: var(--brand);
  }
`;

const SkillIcon = styled.div`
  margin-bottom: var(--space-md);
  display: flex;
  justify-content: center;
`;

const SkillName = styled.h3`
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--text-hi);
  margin-bottom: var(--space-xs);
`;

const SkillText = styled.p`
  font-size: var(--text-sm);
  color: var(--text-mid);
`;

const ViewAllContainer = styled.div`
  text-align: center;
`;

const ViewAllButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-md) var(--space-lg);
  border-radius: var(--radius-md);
  font-weight: 500;
  text-decoration: none;
  background-color: var(--surface-1);
  color: var(--text-hi);
  border: 1px solid var(--text-low);
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    background-color: var(--surface-2);
    border-color: var(--brand);
    color: var(--text-hi);
  }
`;

const ContactSection = styled.section`
  padding: var(--space-2xl) 0;
  background-color: var(--surface-1);
`;

const ContactLayout = styled.div`
  display: grid;
  gap: var(--space-2xl);
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
`;

const ContactContent = styled.div``;

const ContactTitle = styled.h2`
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--text-hi);
  margin-bottom: var(--space-md);
`;

const ContactDescription = styled.p`
  font-size: var(--text-base);
  color: var(--text-mid);
  line-height: 1.7;
  margin-bottom: var(--space-xl);
`;

const SocialProof = styled.div`
  font-size: var(--text-sm);
  color: var(--text-low);
  font-weight: 500;
`;

const ContactForm = styled.form`
  background-color: var(--surface-0);
  border-radius: var(--radius-lg);
  padding: var(--space-xl);
  border: 1px solid rgba(107, 114, 128, 0.2);
  box-shadow: var(--shadow-md);
`;

const FormGroup = styled.div`
  margin-bottom: var(--space-lg);
  
  label {
    display: block;
    font-size: var(--text-sm);
    font-weight: 500;
    color: var(--text-hi);
    margin-bottom: var(--space-xs);
  }
  
  input, textarea {
    width: 100%;
    padding: var(--space-sm) var(--space-md);
    border: 1px solid rgba(107, 114, 128, 0.3);
    border-radius: var(--radius-md);
    background-color: var(--surface-0);
    color: var(--text-hi);
    font-size: var(--text-base);
    transition: all 0.2s ease;
    
    &:focus {
      outline: none;
      border-color: var(--brand);
      box-shadow: 0 0 0 3px var(--brand-soft);
    }
    
    &::placeholder {
      color: var(--text-low);
    }
  }
  
  textarea {
    resize: vertical;
    min-height: 100px;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: var(--space-md) var(--space-lg);
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: var(--text-base);
  border: none;
  cursor: pointer;
  background-color: var(--brand);
  color: white;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-brand);
  }
`;

export default Home;