// src/pages/Home.js - UX 2025 Simplified Version (Complete)
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { translations } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNodeJs, FaPython, FaExternalLinkAlt, FaCode, FaBriefcase, FaCalendar, FaBuilding, FaCheckCircle, FaEye } from 'react-icons/fa';
import { getFeaturedProjects } from '../data/projects';
import { experience } from '../data/experience';

const Home = () => {
  const { language } = useLanguage();
  const t = translations.home;
  const featuredProjects = getFeaturedProjects().slice(0, 3); // Mostrar solo 3 proyectos destacados

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
            <CodeButton 
              href="https://github.com/DariksonAnyosa/mi-portafolio-anyosa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-code"
              aria-label={language === 'es' ? 'Ver código del portafolio' : 'View portfolio code'}
            >
              <FaCode />
              {language === 'es' ? 'Ver Código' : 'View Code'}
            </CodeButton>
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
          
          <OpenSourceNote>
            <FaCode size={14} />
            <span>
              {language === 'es' 
                ? 'Este portafolio es open source' 
                : 'This portfolio is open source'
              }
            </span>
          </OpenSourceNote>
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

      {/* Experience Preview Section */}
      <Section>
        <div className="container">
          <SectionHeader>
            <SectionTitle>
              {language === 'es' ? 'Mi Experiencia' : 'My Experience'}
            </SectionTitle>
            <SectionDescription>
              {language === 'es' 
                ? 'Un vistazo a mi trayectoria profesional y desarrollo de habilidades'
                : 'A glimpse into my professional journey and skill development'
              }
            </SectionDescription>
          </SectionHeader>
          
          <ExperienceGrid>
            {experience.slice(0, 1).map((exp, index) => ( // Solo mostrar la experiencia más reciente
              <ExperienceCard
                key={exp.id}
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ExperienceHeader>
                  <ExperienceIcon>
                    <FaBriefcase size={24} />
                  </ExperienceIcon>
                  <ExperienceInfo>
                    <ExperiencePosition>{exp.position[language]}</ExperiencePosition>
                    <ExperienceCompany>
                      <FaBuilding size={14} />
                      {exp.company[language]}
                    </ExperienceCompany>
                    <ExperiencePeriod>
                      <FaCalendar size={14} />
                      {exp.period[language]}
                    </ExperiencePeriod>
                  </ExperienceInfo>
                </ExperienceHeader>
                
                <ExperienceDescription>
                  {exp.description[language]}
                </ExperienceDescription>
                
                <ExperienceHighlights>
                  <HighlightsTitle>
                    {language === 'es' ? 'Logros principales:' : 'Key achievements:'}
                  </HighlightsTitle>
                  <HighlightsList>
                    {exp.achievements.slice(0, 2).map((achievement, achIndex) => (
                      <HighlightItem key={achIndex}>
                        <FaCheckCircle size={16} />
                        <span>{achievement[language]}</span>
                      </HighlightItem>
                    ))}
                  </HighlightsList>
                </ExperienceHighlights>
                
                {exp.technologies && (
                  <ExperienceTechnologies>
                    {exp.technologies.slice(0, 4).map((tech, techIndex) => (
                      <TechTag key={techIndex}>{tech}</TechTag>
                    ))}
                    {exp.technologies.length > 4 && (
                      <TechTag className="more">+{exp.technologies.length - 4}</TechTag>
                    )}
                  </ExperienceTechnologies>
                )}
              </ExperienceCard>
            ))}
          </ExperienceGrid>
          
          <ViewAllContainer>
            <ViewAllButton to="/experiencia" className="btn-secondary">
              {language === 'es' ? 'Ver toda mi experiencia' : 'View all my experience'} <FaArrowRight />
            </ViewAllButton>
          </ViewAllContainer>
        </div>
      </Section>

      {/* Featured Projects Section */}
      <Section>
        <div className="container">
          <SectionHeader>
            <SectionTitle>
              {language === 'es' ? 'Proyectos Destacados' : 'Featured Projects'}
            </SectionTitle>
            <SectionDescription>
              {language === 'es' 
                ? 'Una selección de mis mejores trabajos y desarrollos más recientes'
                : 'A selection of my best work and most recent developments'
              }
            </SectionDescription>
          </SectionHeader>
          
          <ProjectsGrid>
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectImage>
                  <img 
                    src={project.image} 
                    alt={project.imageAlt[language] || project.title[language]}
                    loading="lazy"
                  />
                  <ProjectOverlay>
                    <ProjectActions>
                      {project.demoUrl && (
                        <ProjectAction 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label={language === 'es' ? 'Ver demo' : 'View demo'}
                        >
                          <FaExternalLinkAlt />
                        </ProjectAction>
                      )}
                      {project.githubUrl && (
                        <ProjectAction 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label={language === 'es' ? 'Ver código' : 'View code'}
                        >
                          <FaCode />
                        </ProjectAction>
                      )}
                    </ProjectActions>
                  </ProjectOverlay>
                </ProjectImage>
                
                <ProjectContent>
                  <ProjectTitle>{project.title[language]}</ProjectTitle>
                  <ProjectDescription>{project.shortDescription[language]}</ProjectDescription>
                  
                  <ProjectTechnologies>
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <TechTag key={techIndex}>{tech}</TechTag>
                    ))}
                    {project.technologies.length > 4 && (
                      <TechTag className="more">+{project.technologies.length - 4}</TechTag>
                    )}
                  </ProjectTechnologies>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>
          
          <ViewAllContainer>
            <ViewAllButton to="/proyectos" className="btn-secondary">
              {language === 'es' ? 'Ver todos los proyectos' : 'View all projects'} <FaArrowRight />
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
  
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    gap: var(--space-sm);
    
    /* En móvil, hacer que los botones tengan el mismo ancho */
    > * {
      width: 100%;
      max-width: 280px;
      justify-content: center;
    }
  }
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

const CodeButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-md) var(--space-lg);
  border-radius: var(--radius-md);
  font-weight: 500;
  text-decoration: none;
  background-color: var(--surface-0);
  color: var(--text-hi);
  border: 2px solid var(--brand);
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  
  /* Efecto de relleno en hover */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, var(--brand), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-2px);
    background-color: var(--brand);
    color: white;
    box-shadow: var(--shadow-brand);
    
    &::before {
      left: 100%;
    }
  }
  
  svg {
    transition: transform 0.2s ease;
  }
  
  &:hover svg {
    transform: scale(1.1);
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

const OpenSourceNote = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
  margin-top: var(--space-md);
  font-size: var(--text-sm);
  color: var(--text-low);
  font-weight: 500;
  opacity: 0.8;
  
  svg {
    color: var(--brand);
  }
  
  @media (max-width: 640px) {
    font-size: var(--text-xs);
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
  border: 1px solid var(--text-low);
  transition: all 0.3s ease;
  position: relative;
  
  /* Sutil borde dorado en modo oscuro */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: var(--radius-lg);
    padding: 1px;
    background: linear-gradient(135deg, 
      rgba(200, 154, 0, 0.2) 0%, 
      transparent 50%, 
      rgba(200, 154, 0, 0.2) 100%
    );
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    opacity: 0.3;
    pointer-events: none;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
    border-color: var(--brand);
    
    &::before {
      opacity: 0.8;
      background: linear-gradient(135deg, 
        var(--brand) 0%, 
        rgba(200, 154, 0, 0.4) 50%, 
        var(--brand) 100%
      );
    }
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
  border: 1px solid var(--text-low);
  box-shadow: var(--shadow-md);
  position: relative;
  
  /* Borde sutil para mejor visibilidad */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: var(--radius-lg);
    padding: 1px;
    background: linear-gradient(135deg, 
      rgba(200, 154, 0, 0.15) 0%, 
      transparent 30%, 
      transparent 70%, 
      rgba(200, 154, 0, 0.15) 100%
    );
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    opacity: 0.6;
    pointer-events: none;
  }
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

// Styled Components para Projects Section
const ProjectsGrid = styled.div`
  display: grid;
  gap: var(--space-xl);
  margin-bottom: var(--space-2xl);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectCard = styled.div`
  background-color: var(--surface-0);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--text-low);
  transition: all 0.3s ease;
  box-shadow: var(--shadow-sm);
  position: relative;
  
  /* Mejor contraste en modo oscuro */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: var(--radius-lg);
    padding: 1px;
    background: linear-gradient(135deg, 
      rgba(200, 154, 0, 0.3) 0%, 
      rgba(200, 154, 0, 0.1) 50%, 
      rgba(200, 154, 0, 0.3) 100%
    );
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    opacity: 0.5;
    pointer-events: none;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
    border-color: var(--brand);
    
    &::before {
      opacity: 1;
      background: linear-gradient(135deg, 
        var(--brand) 0%, 
        rgba(200, 154, 0, 0.6) 50%, 
        var(--brand) 100%
      );
    }
  }
`;

const ProjectImage = styled.div`
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const ProjectActions = styled.div`
  display: flex;
  gap: var(--space-md);
`;

const ProjectAction = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background-color: var(--brand);
  color: white;
  font-size: 18px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: var(--brand-light);
    transform: scale(1.1);
  }
`;

const ProjectContent = styled.div`
  padding: var(--space-lg);
`;

const ProjectTitle = styled.h3`
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--text-hi);
  margin-bottom: var(--space-sm);
  line-height: 1.3;
`;

const ProjectDescription = styled.p`
  font-size: var(--text-base);
  color: var(--text-mid);
  line-height: 1.6;
  margin-bottom: var(--space-md);
`;

const ProjectTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
`;

const TechTag = styled.span`
  font-size: var(--text-xs);
  font-weight: 500;
  color: var(--brand);
  background-color: var(--brand-soft);
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-sm);
  border: 1px solid rgba(200, 154, 0, 0.2);
  
  &.more {
    background-color: var(--surface-1);
    color: var(--text-mid);
    border-color: var(--text-low);
  }
`;

// Styled Components para Experience Section
const ExperienceGrid = styled.div`
  display: grid;
  gap: var(--space-xl);
  margin-bottom: var(--space-2xl);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const ExperienceCard = styled.div`
  background-color: var(--surface-0);
  border-radius: var(--radius-lg);
  padding: var(--space-xl);
  border: 1px solid var(--text-low);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
  position: relative;
  
  /* Borde dorado sutil */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: var(--radius-lg);
    padding: 1px;
    background: linear-gradient(135deg, 
      rgba(200, 154, 0, 0.2) 0%, 
      transparent 50%, 
      rgba(200, 154, 0, 0.2) 100%
    );
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    opacity: 0.3;
    pointer-events: none;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
    border-color: var(--brand);
    
    &::before {
      opacity: 0.8;
      background: linear-gradient(135deg, 
        var(--brand) 0%, 
        rgba(200, 154, 0, 0.4) 50%, 
        var(--brand) 100%
      );
    }
  }
`;

const ExperienceHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
`;

const ExperienceIcon = styled.div`
  width: 48px;
  height: 48px;
  background-color: var(--brand-soft);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--brand);
  flex-shrink: 0;
`;

const ExperienceInfo = styled.div`
  flex: 1;
`;

const ExperiencePosition = styled.h3`
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--text-hi);
  margin-bottom: var(--space-xs);
  line-height: 1.3;
`;

const ExperienceCompany = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  font-size: var(--text-base);
  font-weight: 500;
  color: var(--brand);
  margin-bottom: var(--space-xs);
`;

const ExperiencePeriod = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  font-size: var(--text-sm);
  color: var(--text-mid);
  font-weight: 500;
`;

const ExperienceDescription = styled.p`
  font-size: var(--text-base);
  color: var(--text-mid);
  line-height: 1.7;
  margin-bottom: var(--space-lg);
`;

const ExperienceHighlights = styled.div`
  margin-bottom: var(--space-lg);
`;

const HighlightsTitle = styled.h4`
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--text-hi);
  margin-bottom: var(--space-sm);
`;

const HighlightsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
`;

const HighlightItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
  font-size: var(--text-sm);
  color: var(--text-mid);
  line-height: 1.6;
  
  svg {
    color: var(--success);
    flex-shrink: 0;
    margin-top: 2px;
  }
`;

const ExperienceTechnologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin-top: var(--space-lg);
`;

export default Home;