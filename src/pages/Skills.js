import React from 'react';
import styled from 'styled-components';

const Skills = () => {
  return (
    <SkillsContainer>
      <h1>Mis Habilidades</h1>
      <p>Página en construcción</p>
    </SkillsContainer>
  );
};

const SkillsContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: calc(var(--header-height) + 40px) var(--space-lg) 40px;
  min-height: 100vh;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: calc(var(--header-height) + 40px) var(--space-md) 40px;
  }
`;

export default Skills;