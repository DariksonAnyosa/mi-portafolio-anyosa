// src/pages/Skills.js - Página completa de habilidades
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaFigma,
  FaAws,
  FaDocker
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql, 
  SiExpress,
  SiFramer,
  SiVscodium,
  SiPostman,
  SiVercel,
  SiNetlify
} from 'react-icons/si';

const Skills = () => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('frontend');
  const t = translations.skills;

  const skillsData = {
    frontend: {
      title: { es: 'Frontend', en: 'Frontend' },
      description: { 
        es: 'Tecnologías para crear interfaces de usuario modernas y reactivas',
        en: 'Technologies for creating modern and responsive user interfaces'
      },
      skills: [
        { name: 'React', icon: FaReact, color: '#61DAFB', level: 50, description: { es: 'Biblioteca principal para desarrollo frontend', en: 'Main library for frontend development' }},
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 60, description: { es: 'JavaScript tipado para mejor desarrollo', en: 'Typed JavaScript for better development' }},
        { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', level: 80, description: { es: 'Lenguaje principal de programación web', en: 'Main web programming language' }},
        { name: 'HTML5', icon: FaHtml5, color: '#E34F26', level: 90, description: { es: 'Estructura semántica de páginas web', en: 'Semantic structure of web pages' }},
        { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', level: 80, description: { es: 'Estilos y animaciones avanzadas', en: 'Advanced styles and animations' }},
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 50, description: { es: 'Framework CSS utility-first', en: 'Utility-first CSS framework' }},
      ]
    },
    backend: {
      title: { es: 'Backend', en: 'Backend' },
      description: { 
        es: 'Tecnologías para crear APIs robustas y escalables',
        en: 'Technologies for creating robust and scalable APIs'
      },
      skills: [
        { name: 'Python', icon: FaPython, color: '#3776AB', level: 75, description: { es: 'Lenguaje versátil para backend y data science', en: 'Versatile language for backend and data science' }},
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', level: 70, description: { es: 'Base de datos relacional avanzada', en: 'Advanced relational database' }},
      ]
    },
    tools: {
      title: { es: 'Herramientas', en: 'Tools' },
      description: { 
        es: 'Herramientas que uso para optimizar mi flujo de trabajo',
        en: 'Tools I use to optimize my workflow'
      },
      skills: [
        { name: 'Git', icon: FaGitAlt, color: '#F05032', level: 70, description: { es: 'Control de versiones distribuido', en: 'Distributed version control' }},
        { name: 'VS Code', icon: SiVscodium, color: '#007ACC', level: 90, description: { es: 'Editor de código principal', en: 'Main code editor' }},
        { name: 'Vercel', icon: SiVercel, color: '#000000', level: 50, description: { es: 'Despliegue de aplicaciones frontend', en: 'Frontend application deployment' }},
      ]
    }
  };

  const categories = Object.keys(skillsData);

  return (
    <SkillsContainer>
      <PageHeader>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <PageTitle>{t.title[language]}</PageTitle>
          <PageDescription>{t.description[language]}</PageDescription>
        </motion.div>
      </PageHeader>

      <SkillsContent>
        {/* Categorías */}
        <CategoriesContainer>
          {categories.map((category, index) => (
            <CategoryButton
              key={category}
              active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              as={motion.button}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {skillsData[category].title[language]}
            </CategoryButton>
          ))}
        </CategoriesContainer>

        {/* Contenido de habilidades */}
        <SkillsSection>
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeader>
              <SectionTitle>{skillsData[activeCategory].title[language]}</SectionTitle>
              <SectionDescription>
                {skillsData[activeCategory].description[language]}
              </SectionDescription>
            </SectionHeader>

            <SkillsGrid>
              {skillsData[activeCategory].skills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  as={motion.div}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <SkillIcon color={skill.color}>
                    <skill.icon size={40} />
                  </SkillIcon>
                  
                  <SkillInfo>
                    <SkillName>{skill.name}</SkillName>
                    <SkillDescription>
                      {skill.description[language]}
                    </SkillDescription>
                  </SkillInfo>
                  
                  <SkillLevel>
                    <LevelLabel>{skill.level}%</LevelLabel>
                    <ProgressBar>
                      <ProgressFill 
                        level={skill.level}
                        color={skill.color}
                        as={motion.div}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      />
                    </ProgressBar>
                  </SkillLevel>
                </SkillCard>
              ))}
            </SkillsGrid>
          </motion.div>
        </SkillsSection>

        {/* Estadísticas */}
        <StatsSection>
          <StatsGrid>
            <StatCard
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <StatNumber>1+</StatNumber>
              <StatLabel>
                {language === 'es' ? 'Años de experiencia' : 'Years of experience'}
              </StatLabel>
            </StatCard>
            
            <StatCard
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <StatNumber>5+</StatNumber>
              <StatLabel>
                {language === 'es' ? 'Proyectos completados' : 'Projects completed'}
              </StatLabel>
            </StatCard>
            
            <StatCard
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <StatNumber>5+</StatNumber>
              <StatLabel>
                {language === 'es' ? 'Tecnologías dominadas' : 'Technologies mastered'}
              </StatLabel>
            </StatCard>
          </StatsGrid>
        </StatsSection>

        {/* Llamada a la acción */}
        <CTASection>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <CTATitle>
              {language === 'es' 
                ? '¿Listo para trabajar juntos?' 
                : 'Ready to work together?'
              }
            </CTATitle>
            <CTADescription>
              {language === 'es'
                ? 'Estoy disponible para nuevos proyectos y colaboraciones'
                : 'I am available for new projects and collaborations'
              }
            </CTADescription>
            <CTAButton to="/contacto">
              {language === 'es' ? 'Contáctame' : 'Contact me'}
            </CTAButton>
          </motion.div>
        </CTASection>
      </SkillsContent>
    </SkillsContainer>
  );
};

// Styled Components
const SkillsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: calc(var(--header-height) + 40px) var(--space-lg) 40px;
  min-height: 100vh;
  
  @media (max-width: 768px) {
    padding: calc(var(--header-height) + 40px) var(--space-md) 40px;
  }
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: var(--space-2xl);
`;

const PageTitle = styled.h1`
  font-size: var(--text-3xl);
  font-weight: 700;
  color: var(--text-hi);
  margin-bottom: var(--space-md);
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: var(--brand);
    border-radius: 2px;
  }
`;

const PageDescription = styled.p`
  font-size: var(--text-lg);
  color: var(--text-mid);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const SkillsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2xl);
`;

const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--space-md);
`;

const CategoryButton = styled.button`
  padding: var(--space-md) var(--space-lg);
  border-radius: var(--radius-full);
  border: 1px solid ${props => props.active ? 'var(--brand)' : 'var(--text-low)'};
  background-color: ${props => props.active ? 'var(--brand)' : 'var(--surface-1)'};
  color: ${props => props.active ? 'white' : 'var(--text-hi)'};
  font-weight: 500;
  font-size: var(--text-base);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--brand)' : 'var(--brand-soft)'};
    border-color: var(--brand);
    color: ${props => props.active ? 'white' : 'var(--brand)'};
  }
`;

const SkillsSection = styled.div``;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: var(--space-xl);
`;

const SectionTitle = styled.h2`
  font-size: var(--text-2xl);
  font-weight: 600;
  color: var(--text-hi);
  margin-bottom: var(--space-sm);
`;

const SectionDescription = styled.p`
  font-size: var(--text-base);
  color: var(--text-mid);
  line-height: 1.6;
`;

const SkillsGrid = styled.div`
  display: grid;
  gap: var(--space-lg);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SkillCard = styled.div`
  background-color: var(--surface-0);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  border: 1px solid var(--text-low);
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

const SkillIcon = styled.div`
  color: ${props => props.color};
  margin-bottom: var(--space-md);
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const SkillInfo = styled.div`
  margin-bottom: var(--space-md);
`;

const SkillName = styled.h3`
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--text-hi);
  margin-bottom: var(--space-xs);
`;

const SkillDescription = styled.p`
  font-size: var(--text-sm);
  color: var(--text-mid);
  line-height: 1.5;
`;

const SkillLevel = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-sm);
`;

const LevelLabel = styled.span`
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--brand);
  min-width: 40px;
`;

const ProgressBar = styled.div`
  flex: 1;
  height: 8px;
  background-color: var(--surface-1);
  border-radius: var(--radius-sm);
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  background-color: ${props => props.color};
  border-radius: var(--radius-sm);
`;

const StatsSection = styled.div`
  background-color: var(--surface-1);
  border-radius: var(--radius-lg);
  padding: var(--space-xl);
`;

const StatsGrid = styled.div`
  display: grid;
  gap: var(--space-lg);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StatCard = styled.div`
  text-align: center;
  padding: var(--space-lg);
  background-color: var(--surface-0);
  border-radius: var(--radius-md);
  border: 1px solid var(--text-low);
`;

const StatNumber = styled.div`
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--brand);
  margin-bottom: var(--space-xs);
`;

const StatLabel = styled.div`
  font-size: var(--text-sm);
  color: var(--text-mid);
  font-weight: 500;
`;

const CTASection = styled.div`
  text-align: center;
  padding: var(--space-2xl);
  background: linear-gradient(135deg, var(--brand-soft) 0%, var(--surface-1) 100%);
  border-radius: var(--radius-lg);
`;

const CTATitle = styled.h2`
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--text-hi);
  margin-bottom: var(--space-sm);
`;

const CTADescription = styled.p`
  font-size: var(--text-base);
  color: var(--text-mid);
  margin-bottom: var(--space-lg);
  line-height: 1.6;
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: var(--space-md) var(--space-xl);
  background-color: var(--brand);
  color: white;
  text-decoration: none;
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: var(--text-base);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--brand-light);
    transform: translateY(-2px);
    box-shadow: var(--shadow-brand);
    color: white;
  }
`;

export default Skills;