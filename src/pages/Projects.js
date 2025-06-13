// src/pages/Projects.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import BentoGrid, { BentoGridItem } from '../components/BentoGrid';
import { projects } from '../data/projects';
import { FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const { language } = useLanguage();
  const [filter, setFilter] = useState('all');
  
  // Filtrar proyectos basados en la categoría
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Categorías únicas para el filtro
  const categories = ['all', ...new Set(projects.map(project => project.category))];

  return (
    <ProjectsContainer>
      <PageHeader>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PageTitle>Mis Proyectos</PageTitle>
          <PageDescription>
            Explora mi colección de proyectos elegantes y funcionales
          </PageDescription>
        </motion.div>
        
        <FilterContainer>
          {categories.map(category => (
            <FilterButton
              key={category}
              active={filter === category}
              onClick={() => setFilter(category)}
            >
              {category === 'all' ? 'Todos' : category.charAt(0).toUpperCase() + category.slice(1)}
            </FilterButton>
          ))}
        </FilterContainer>
      </PageHeader>

      <BentoGrid>
        {filteredProjects.map(project => (
          <BentoGridItem
            key={project.id}
            colSpan={project.colSpan || 2}
            rowSpan={project.rowSpan || 1}
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
              Ver proyecto <FaArrowRight />
            </ProjectLink>
          </BentoGridItem>
        ))}
      </BentoGrid>
    </ProjectsContainer>
  );
};

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
  margin-bottom: 40px;
  text-align: center;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 16px;
  position: relative;
  display: inline-block;
  
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

const PageDescription = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
`;

const FilterButton = styled.button`
  background-color: ${(props) => props.active ? 'var(--accent-color)' : 'var(--bg-secondary)'};
  color: ${(props) => props.active ? '#ffffff' : 'var(--text-primary)'};
  border: 1px solid ${(props) => props.active ? 'var(--accent-color)' : 'var(--border-color)'};
  border-radius: 30px;
  padding: 8px 16px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${(props) => props.active ? 'var(--accent-color)' : 'var(--hover-color)'};
    border-color: var(--accent-color);
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

export default Projects;