import React from 'react';
import styled from 'styled-components';
import experience from '../data/experience';

const Experience = () => {
  return (
    <ExperienceContainer>
      <PageTitle>Mi Experiencia</PageTitle>
      {experience.map((exp) => (
        <ExperienceCard key={exp.id}>
          <Position>{exp.position}</Position>
          <Company>{exp.company}</Company>
          <Period>{exp.period}</Period>
          <Description>{exp.description}</Description>
          <Achievements>
            {exp.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </Achievements>
        </ExperienceCard>
      ))}
    </ExperienceContainer>
  );
};

const ExperienceContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 32px;
  text-align: center;
`;

const ExperienceCard = styled.div`
  background-color: var(--bg-secondary);
  border-radius: 16px;
  padding: 30px;
  margin-bottom: 32px;
  border: 1px solid var(--border-color);
`;

const Position = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
`;

const Company = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--accent-color);
`;

const Period = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

const Description = styled.p`
  margin-top: 12px;
  color: var(--text-secondary);
`;

const Achievements = styled.ul`
  margin-top: 16px;
  padding-left: 20px;
  list-style-type: disc;
  color: var(--text-secondary);
`;

export default Experience;