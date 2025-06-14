// src/pages/Experience.js - Página completa de experiencia bilingüe
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { experience } from '../data/experience';
import { FaCalendar, FaBuilding, FaCheckCircle, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
  const { language } = useLanguage();
  const t = translations.experience;

  // Datos de educación (puedes moverlos a un archivo separado si prefieres)
  const education = [
    {
      id: 1,
      degree: {
        es: 'Ingeniería de Sistemas',
        en: 'Systems Engineering'
      },
      institution: 'Universidad Nacional del Santa',
      period: {
        es: '2020 - 2024',
        en: '2020 - 2024'
      },
      description: {
        es: 'Formación integral en desarrollo de software, gestión de proyectos y tecnologías emergentes.',
        en: 'Comprehensive training in software development, project management, and emerging technologies.'
      },
      achievements: [
        {
          es: 'Especialización en desarrollo web full-stack',
          en: 'Specialization in full-stack web development'
        },
        {
          es: 'Proyectos de investigación en inteligencia artificial',
          en: 'Research projects in artificial intelligence'
        },
        {
          es: 'Participación en competencias de programación',
          en: 'Participation in programming competitions'
        }
      ]
    }
  ];

  return (
    <ExperienceContainer>
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

      <ExperienceContent>
        {/* Experiencia Profesional */}
        <Section>
          <SectionTitle>
            {language === 'es' ? 'Experiencia Profesional' : 'Professional Experience'}
          </SectionTitle>
          
          <Timeline>
            {experience.map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                as={motion.div}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CardHeader>
                  <CompanyLogo>
                    <FaBuilding size={24} />
                  </CompanyLogo>
                  <JobInfo>
                    <Position>{exp.position[language]}</Position>
                    <Company>{exp.company[language]}</Company>
                    <Period>
                      <FaCalendar size={14} />
                      {exp.period[language]}
                    </Period>
                  </JobInfo>
                </CardHeader>
                
                <Description>{exp.description[language]}</Description>
                
                {exp.achievements && exp.achievements.length > 0 && (
                  <AchievementsSection>
                    <AchievementsTitle>
                      {t.keyAchievements[language]}
                    </AchievementsTitle>
                    <Achievements>
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <Achievement key={achievementIndex}>
                          <FaCheckCircle size={16} />
                          <span>{achievement[language]}</span>
                        </Achievement>
                      ))}
                    </Achievements>
                  </AchievementsSection>
                )}
                
                {exp.technologies && (
                  <TechnologiesSection>
                    <TechnologiesTitle>
                      {language === 'es' ? 'Tecnologías utilizadas:' : 'Technologies used:'}
                    </TechnologiesTitle>
                    <TechnologiesList>
                      {exp.technologies.map((tech, techIndex) => (
                        <TechTag key={techIndex}>{tech}</TechTag>
                      ))}
                    </TechnologiesList>
                  </TechnologiesSection>
                )}
              </ExperienceCard>
            ))}
          </Timeline>
        </Section>

        {/* Educación */}
        <Section>
          <SectionTitle>
            {t.education[language]}
          </SectionTitle>
          
          <Timeline>
            {education.map((edu, index) => (
              <EducationCard
                key={edu.id}
                as={motion.div}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <CardHeader>
                  <CompanyLogo>
                    <FaGraduationCap size={24} />
                  </CompanyLogo>
                  <JobInfo>
                    <Position>{edu.degree[language]}</Position>
                    <Company>{edu.institution}</Company>
                    <Period>
                      <FaCalendar size={14} />
                      {edu.period[language]}
                    </Period>
                  </JobInfo>
                </CardHeader>
                
                <Description>{edu.description[language]}</Description>
                
                {edu.achievements && (
                  <AchievementsSection>
                    <AchievementsTitle>
                      {language === 'es' ? 'Logros académicos:' : 'Academic achievements:'}
                    </AchievementsTitle>
                    <Achievements>
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <Achievement key={achievementIndex}>
                          <FaCheckCircle size={16} />
                          <span>{achievement[language]}</span>
                        </Achievement>
                      ))}
                    </Achievements>
                  </AchievementsSection>
                )}
              </EducationCard>
            ))}
          </Timeline>
        </Section>

        {/* Estadísticas */}
        <StatsSection>
          <StatsGrid>
            <StatCard
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
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
              transition={{ duration: 0.6, delay: 0.6 }}
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
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <StatNumber>10+</StatNumber>
              <StatLabel>
                {language === 'es' ? 'Tecnologías aprendidas' : 'Technologies learned'}
              </StatLabel>
            </StatCard>
          </StatsGrid>
        </StatsSection>
      </ExperienceContent>
    </ExperienceContainer>
  );
};

// Styled Components
const ExperienceContainer = styled.div`
  max-width: 1000px;
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

const ExperienceContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2xl);
`;

const Section = styled.section`
  margin-bottom: var(--space-2xl);
`;

const SectionTitle = styled.h2`
  font-size: var(--text-2xl);
  font-weight: 600;
  color: var(--text-hi);
  margin-bottom: var(--space-xl);
  text-align: center;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background-color: var(--brand);
    border-radius: 2px;
  }
`;

const Timeline = styled.div`
  position: relative;
  padding-left: var(--space-xl);
  
  &::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, var(--brand), var(--brand-soft));
    border-radius: 1px;
  }
  
  @media (max-width: 768px) {
    padding-left: var(--space-lg);
    
    &::before {
      left: 16px;
    }
  }
`;

const ExperienceCard = styled.div`
  position: relative;
  background-color: var(--surface-0);
  border-radius: var(--radius-lg);
  padding: var(--space-xl);
  margin-bottom: var(--space-xl);
  border: 1px solid var(--text-low);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
  
  /* Punto en la línea de tiempo */
  &::before {
    content: '';
    position: absolute;
    left: -48px;
    top: 24px;
    width: 12px;
    height: 12px;
    background-color: var(--brand);
    border-radius: 50%;
    border: 3px solid var(--surface-0);
    box-shadow: 0 0 0 3px var(--brand);
  }
  
  /* Borde dorado sutil */
  &::after {
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
    
    &::after {
      opacity: 0.8;
      background: linear-gradient(135deg, 
        var(--brand) 0%, 
        rgba(200, 154, 0, 0.4) 50%, 
        var(--brand) 100%
      );
    }
  }
  
  @media (max-width: 768px) {
    &::before {
      left: -40px;
    }
  }
`;

const EducationCard = styled(ExperienceCard)`
  /* Punto diferente para educación */
  &::before {
    background-color: var(--success);
    box-shadow: 0 0 0 3px var(--success);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
`;

const CompanyLogo = styled.div`
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

const JobInfo = styled.div`
  flex: 1;
`;

const Position = styled.h3`
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--text-hi);
  margin-bottom: var(--space-xs);
  line-height: 1.3;
`;

const Company = styled.h4`
  font-size: var(--text-lg);
  font-weight: 500;
  color: var(--brand);
  margin-bottom: var(--space-xs);
`;

const Period = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  font-size: var(--text-sm);
  color: var(--text-mid);
  font-weight: 500;
`;

const Description = styled.p`
  font-size: var(--text-base);
  color: var(--text-mid);
  line-height: 1.7;
  margin-bottom: var(--space-lg);
`;

const AchievementsSection = styled.div`
  margin-bottom: var(--space-lg);
`;

const AchievementsTitle = styled.h5`
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--text-hi);
  margin-bottom: var(--space-sm);
`;

const Achievements = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
`;

const Achievement = styled.li`
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

const TechnologiesSection = styled.div`
  margin-top: var(--space-lg);
`;

const TechnologiesTitle = styled.h5`
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--text-hi);
  margin-bottom: var(--space-sm);
`;

const TechnologiesList = styled.div`
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
`;

const StatsSection = styled.div`
  background-color: var(--surface-1);
  border-radius: var(--radius-lg);
  padding: var(--space-xl);
  margin-top: var(--space-2xl);
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

export default Experience;