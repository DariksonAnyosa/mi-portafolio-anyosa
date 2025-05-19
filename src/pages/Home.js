// src/pages/Home.js (ejemplo con traducciones)
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BentoGrid, { BentoGridItem } from '../components/BentoGrid';
import { projects } from '../data/projects';
import { skills } from '../data/skills';
import { experience } from '../data/experience';
import { translations } from '../data/translations';
import { useLanguage } from '../context/LanguageContext';
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  const { language } = useLanguage();
  const t = translations.home;
  
  // Mostrar solo los 3 primeros proyectos en la página de inicio
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);
  
  // Mostrar solo las primeras 5 habilidades
  const featuredSkills = skills.slice(0, 5);
  
  // Mostrar solo la experiencia más reciente
  const latestExperience = experience[0];

  return (
    <HomeContainer>
      <HeroSection>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SmallText>{t.greeting[language]}</SmallText>
          <HeroTitle>Darikson</HeroTitle>
          <HeroSubtitle>{t.subtitle[language]}</HeroSubtitle>
          <HeroDescription>
            {t.description[language]}
          </HeroDescription>
          <HeroActions>
            <PrimaryButton to="/proyectos">
              {t.viewProjects[language]} <FaArrowRight />
            </PrimaryButton>
            <SecondaryButton to="/contacto">
              {t.contact[language]}
            </SecondaryButton>
          </HeroActions>
          <SocialLinks>
            <SocialLink href="https://github.com/DariksonAnyosa" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/dariksonanyosa/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialLink>
            <SocialLink href="dariksoma@gmail.com">
              <FaEnvelope />
            </SocialLink>
          </SocialLinks>
        </motion.div>
      </HeroSection>

      <SectionTitle>{t.featuredProjects[language]}</SectionTitle>
      <BentoGrid>
        {featuredProjects.map((project) => (
          <BentoGridItem
            key={project.id}
            colSpan={project.colSpan}
            rowSpan={project.rowSpan}
            header={
              <img src={project.image} alt={project.title[language]} />
            }
            title={project.title[language]}
            description={project.description[language]}
          >
            <TechTags>
              {project.technologies.map((tech, index) => (
                <TechTag key={index}>{tech}</TechTag>
              ))}
            </TechTags>
            <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
              {translations.projects.viewProject[language]} <FaArrowRight />
            </ProjectLink>
          </BentoGridItem>
        ))}
        <ViewAllItem>
          <ViewAllLink to="/proyectos">
            {t.viewAllProjects[language]} <FaArrowRight />
          </ViewAllLink>
        </ViewAllItem>
      </BentoGrid>

      <SectionTitle>{t.myExperience[language]}</SectionTitle>
      <ExperienceSection>
        <ExperienceCard>
          <ExperienceHeader>
            <ExperiencePosition>{latestExperience.position}</ExperiencePosition>
            <ExperienceCompany>{latestExperience.company}</ExperienceCompany>
            <ExperiencePeriod>{latestExperience.period}</ExperiencePeriod>
          </ExperienceHeader>
          <ExperienceDescription>{latestExperience.description}</ExperienceDescription>
          <AchievementsList>
            {latestExperience.achievements.map((achievement, index) => (
              <AchievementItem key={index}>{achievement}</AchievementItem>
            ))}
          </AchievementsList>
          <ViewAllLink to="/experiencia">
            {t.viewAllExperience[language]} <FaArrowRight />
          </ViewAllLink>
        </ExperienceCard>
      </ExperienceSection>

      <SectionTitle>{t.mySkills[language]}</SectionTitle>
      <BentoGrid>
        {featuredSkills.map((skill) => (
          <BentoGridItem
            key={skill.id}
            colSpan={1}
            rowSpan={1}
            title={skill.name}
          >
            <SkillIcon style={{ color: skill.color }}>
              <skill.icon size={30} />
            </SkillIcon>
            <SkillLevel>
              <SkillBar style={{ width: `${skill.level}%`, backgroundColor: skill.color }} />
            </SkillLevel>
          </BentoGridItem>
        ))}
        <ViewAllItem>
          <ViewAllLink to="/habilidades">
            {t.viewAllSkills[language]} <FaArrowRight />
          </ViewAllLink>
        </ViewAllItem>
      </BentoGrid>

      <ContactSection>
        <ContactSectionTitle>{t.workTogether[language]}</ContactSectionTitle>
        <ContactSectionDescription>
          {t.availability[language]}
        </ContactSectionDescription>
        <ContactButton to="/contacto">{t.contactMe[language]}</ContactButton>
      </ContactSection>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`;

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px);
  text-align: center;
  padding: 80px 0;
`;

const SmallText = styled.span`
  display: block;
  font-size: 1.1rem;
  color: var(--accent-color);
  margin-bottom: 16px;
  font-weight: 500;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 16px;
  color: var(--text-primary);
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 24px;
  color: var(--text-secondary);
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 32px;
  line-height: 1.6;
`;

const HeroActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 32px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: var(--accent-color);
  color: white;
  padding: 12px 24px;
  border-radius: 30px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--accent-dark);
    transform: translateY(-3px);
  }
  
  svg {
    transition: transform 0.2s;
  }
  
  &:hover svg {
    transform: translateX(3px);
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  color: var(--text-primary);
  padding: 12px 24px;
  border-radius: 30px;
  border: 1px solid var(--border-color);
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--accent-color);
    color: var(--accent-color);
    transform: translateY(-3px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const SocialLink = styled.a`
  color: var(--text-secondary);
  font-size: 1.3rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--accent-color);
    transform: translateY(-3px);
  }
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin: 80px 0 40px;
  text-align: center;
  color: var(--text-primary);
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

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 16px 0;
`;

const TechTag = styled.span`
  background-color: var(--hover-color);
  color: var(--accent-color);
  border-radius: 30px;
  padding: 4px 10px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--accent-color);
  font-weight: 500;
  font-size: 0.9rem;
  margin-top: 10px;
  transition: color 0.2s;
  
  &:hover {
    color: var(--accent-light);
  }
  
  svg {
    transition: transform 0.2s;
  }
  
  &:hover svg {
    transform: translateX(3px);
  }
`;

const ViewAllItem = styled.div`
  grid-column: span 2;
  background-color: var(--bg-secondary);
  border-radius: 16px;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--card-shadow);
  }
  
  @media (max-width: 768px) {
    grid-column: span 6;
  }
`;

const ViewAllLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--accent-color);
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.2s;
  
  &:hover {
    color: var(--accent-light);
  }
  
  svg {
    transition: transform 0.2s;
  }
  
  &:hover svg {
    transform: translateX(3px);
  }
`;

const ExperienceSection = styled.div`
  margin-bottom: 80px;
`;

const ExperienceCard = styled.div`
  background-color: var(--bg-secondary);
  border-radius: 16px;
  padding: 30px;
  box-shadow: var(--card-shadow);
  border: 1px solid var(--border-color);
  max-width: 800px;
  margin: 0 auto;
`;

const ExperienceHeader = styled.div`
  margin-bottom: 20px;
`;

const ExperiencePosition = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
`;

const ExperienceCompany = styled.h5`
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--accent-color);
  margin-bottom: 8px;
`;

const ExperiencePeriod = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

const ExperienceDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 20px;
  line-height: 1.6;
`;

const AchievementsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
`;

const AchievementItem = styled.li`
  color: var(--text-secondary);
  padding-left: 20px;
  position: relative;
  margin-bottom: 10px;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--accent-color);
  }
`;

const SkillIcon = styled.div`
  font-size: 24px;
  margin-bottom: 12px;
`;

const SkillLevel = styled.div`
  width: 100%;
  height: 4px;
  background-color: var(--border-color);
  border-radius: 2px;
  margin-top: 12px;
  overflow: hidden;
`;

const SkillBar = styled.div`
  height: 100%;
  border-radius: 2px;
`;

const ContactSection = styled.section`
  text-align: center;
  background-color: var(--bg-secondary);
  border-radius: 16px;
  padding: 60px 30px;
  margin: 80px 0;
  border: 1px solid var(--border-color);
`;

const ContactSectionTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--text-primary);
`;

const ContactSectionDescription = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 32px;
`;

const ContactButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  background-color: var(--accent-color);
  color: white;
  padding: 14px 32px;
  border-radius: 30px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--accent-dark);
    transform: translateY(-3px);
  }
`;

export default Home;