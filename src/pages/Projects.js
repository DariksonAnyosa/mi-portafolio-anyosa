// src/pages/Projects.js - Versión completa y bilingüe
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import BentoGrid, { BentoGridItem } from '../components/ui/BentoGrid';
import { projects, categories } from '../data/projects';
import { FaArrowRight, FaExternalLinkAlt, FaGithub, FaEye } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Projects = () => {
  const { language } = useLanguage();
  const [filter, setFilter] = useState('all');
  const t = translations.projects;
  
  // Filtrar proyectos basados en la categoría
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <ProjectsContainer>
      <PageHeader>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PageTitle>{t.title[language]}</PageTitle>
          <PageDescription>
            {t.subtitle[language]}
          </PageDescription>
        </motion.div>
        
        <FilterContainer>
          {categories.map(category => (
            <FilterButton
              key={category.id}
              active={filter === category.id}
              onClick={() => setFilter(category.id)}
            >
              {category.name[language]}
            </FilterButton>
          ))}
        </FilterContainer>

        <ProjectStats>
          <StatItem>
            <StatNumber>{filteredProjects.length}</StatNumber>
            <StatLabel>
              {language === 'es' ? 'Proyectos' : 'Projects'}
            </StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>{projects.filter(p => p.status === 'completed').length}</StatNumber>
            <StatLabel>
              {language === 'es' ? 'Completados' : 'Completed'}
            </StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>{projects.filter(p => p.status === 'in-progress').length}</StatNumber>
            <StatLabel>
              {language === 'es' ? 'En Desarrollo' : 'In Progress'}
            </StatLabel>
          </StatItem>
        </ProjectStats>
      </PageHeader>

      <ProjectsGrid>
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            colSpan={project.colSpan || 2}
          >
            <ProjectImageContainer>
              <ProjectImage 
                src={project.image} 
                alt={project.imageAlt?.[language] || project.title[language]}
                loading="lazy"
              />
              <ProjectOverlay>
                <ProjectActions>
                  {project.demoUrl && (
                    <ActionButton 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title={language === 'es' ? 'Ver Demo' : 'View Demo'}
                    >
                      <FaExternalLinkAlt />
                    </ActionButton>
                  )}
                  {project.githubUrl && (
                    <ActionButton 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title={language === 'es' ? 'Ver Código' : 'View Code'}
                    >
                      <FaGithub />
                    </ActionButton>
                  )}
                </ProjectActions>
                <ProjectStatus status={project.status}>
                  {project.status === 'completed' && (language === 'es' ? 'Completado' : 'Completed')}
                  {project.status === 'in-progress' && (language === 'es' ? 'En Desarrollo' : 'In Progress')}
                  {project.status === 'maintenance' && (language === 'es' ? 'Mantenimiento' : 'Maintenance')}
                </ProjectStatus>
              </ProjectOverlay>
            </ProjectImageContainer>
            
            <ProjectContent>
              <ProjectHeader>
                <ProjectTitle>{project.title[language]}</ProjectTitle>
                <ProjectCategory>{categories.find(cat => cat.id === project.category)?.name[language]}</ProjectCategory>
              </ProjectHeader>
              
              <ProjectDescription>
                {project.shortDescription?.[language] || project.description[language]}
              </ProjectDescription>
              
              <TechStack>
                {project.technologies?.slice(0, 4).map((tech, techIndex) => (
                  <TechTag key={techIndex}>{tech}</TechTag>
                ))}
                {project.technologies?.length > 4 && (
                  <TechTag className="more">+{project.technologies.length - 4}</TechTag>
                )}
              </TechStack>

              <ProjectFooter>
                <ProjectDate>
                  {project.startDate && new Date(project.startDate).getFullYear()}
                </ProjectDate>
                
                <ProjectLinks>
                  {project.demoUrl && (
                    <ProjectLink 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="primary"
                    >
                      <FaEye />
                      {language === 'es' ? 'Ver Demo' : 'View Demo'}
                      <FaArrowRight />
                    </ProjectLink>
                  )}
                  {project.githubUrl && (
                    <ProjectLink 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="secondary"
                    >
                      <FaGithub />
                      {language === 'es' ? 'Código' : 'Code'}
                    </ProjectLink>
                  )}
                </ProjectLinks>
              </ProjectFooter>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>

      {filteredProjects.length === 0 && (
        <EmptyState>
          <EmptyStateTitle>
            {language === 'es' ? 'No hay proyectos en esta categoría' : 'No projects in this category'}
          </EmptyStateTitle>
          <EmptyStateDescription>
            {language === 'es' 
              ? 'Prueba seleccionando otra categoría o mira todos los proyectos'
              : 'Try selecting another category or view all projects'
            }
          </EmptyStateDescription>
          <FilterButton onClick={() => setFilter('all')}>
            {language === 'es' ? 'Ver Todos' : 'View All'}
          </FilterButton>
        </EmptyState>
      )}
    </ProjectsContainer>
  );
};

// Styled Components
const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: calc(var(--header-height) + 40px) var(--space-lg) 40px;
  min-height: 100vh;
  
  @media (max-width: 768px) {
    padding: calc(var(--header-height) + 40px) var(--space-md) 40px;
  }
`;

const PageHeader = styled.div`
  margin-bottom: var(--space-2xl);
  text-align: center;
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
  margin: 0 auto var(--space-xl);
  line-height: 1.6;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-xl);
`;

const FilterButton = styled.button`
  background-color: ${props => props.active ? 'var(--brand)' : 'var(--surface-1)'};
  color: ${props => props.active ? 'white' : 'var(--text-hi)'};
  border: 1px solid ${props => props.active ? 'var(--brand)' : 'var(--text-low)'};
  border-radius: var(--radius-full);
  padding: var(--space-sm) var(--space-lg);
  font-size: var(--text-sm);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--brand)' : 'var(--brand-soft)'};
    border-color: var(--brand);
    color: ${props => props.active ? 'white' : 'var(--brand)'};
  }
`;

const ProjectStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: var(--space-lg);
  max-width: 400px;
  margin: 0 auto;
`;

const StatItem = styled.div`
  text-align: center;
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

const ProjectsGrid = styled.div`
  display: grid;
  gap: var(--space-xl);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 450px));
    justify-content: center;
  }
  
  @media (min-width: 1600px) {
    grid-template-columns: repeat(3, 400px);
  }
`;

const ProjectCard = styled.div`
  background-color: var(--surface-0);
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid rgba(107, 114, 128, 0.1);
  transition: all 0.3s ease;
  box-shadow: var(--shadow-sm);
  
  grid-column: ${props => props.colSpan > 2 ? 'span 2' : 'span 1'};
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
    border-color: var(--brand);
  }
`;

const ProjectImageContainer = styled.div`
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${ProjectCard}:hover & {
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
  flex-direction: column;
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
  margin-bottom: var(--space-md);
`;

const ActionButton = styled.a`
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

const ProjectStatus = styled.div`
  font-size: var(--text-xs);
  font-weight: 600;
  color: white;
  background-color: ${props => {
    switch(props.status) {
      case 'completed': return '#10B981';
      case 'in-progress': return '#F59E0B';
      case 'maintenance': return '#6B7280';
      default: return 'var(--brand)';
    }
  }};
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-sm);
`;

const ProjectContent = styled.div`
  padding: var(--space-lg);
`;

const ProjectHeader = styled.div`
  margin-bottom: var(--space-md);
`;

const ProjectTitle = styled.h3`
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--text-hi);
  margin-bottom: var(--space-xs);
  line-height: 1.3;
`;

const ProjectCategory = styled.div`
  font-size: var(--text-xs);
  font-weight: 500;
  color: var(--brand);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ProjectDescription = styled.p`
  font-size: var(--text-base);
  color: var(--text-mid);
  line-height: 1.6;
  margin-bottom: var(--space-lg);
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin-bottom: var(--space-lg);
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

const ProjectFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-sm);
`;

const ProjectDate = styled.div`
  font-size: var(--text-sm);
  color: var(--text-low);
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: var(--space-sm);
  flex-wrap: wrap;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
  
  &.primary {
    background-color: var(--brand);
    color: white;
    
    &:hover {
      background-color: var(--brand-light);
      transform: translateY(-2px);
    }
  }
  
  &.secondary {
    background-color: var(--surface-1);
    color: var(--text-hi);
    border: 1px solid var(--text-low);
    
    &:hover {
      background-color: var(--surface-2);
      border-color: var(--brand);
      color: var(--brand);
    }
  }
  
  svg:last-child {
    transition: transform 0.2s ease;
  }
  
  &:hover svg:last-child {
    transform: translateX(2px);
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: var(--space-2xl);
  color: var(--text-mid);
`;

const EmptyStateTitle = styled.h3`
  font-size: var(--text-xl);
  font-weight: 600;
  margin-bottom: var(--space-sm);
  color: var(--text-hi);
`;

const EmptyStateDescription = styled.p`
  margin-bottom: var(--space-lg);
  line-height: 1.6;
`;

export default Projects;