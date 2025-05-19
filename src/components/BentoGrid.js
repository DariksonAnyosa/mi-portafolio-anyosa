// src/components/BentoGrid.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Componente principal BentoGrid
const BentoGrid = ({ children }) => {
  return <StyledBentoGrid>{children}</StyledBentoGrid>;
};

// Componente para cada item del grid
export const BentoGridItem = ({
  title,
  description,
  header,
  icon,
  className,
  colSpan = 2,
  rowSpan = 1,
  children,
}) => {
  return (
    <StyledBentoItem
      className={className}
      style={{
        gridColumn: `span ${colSpan}`,
        gridRow: `span ${rowSpan}`,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {header && <div className="bento-header">{header}</div>}
      <div className="bento-content">
        {icon && <div className="bento-icon">{icon}</div>}
        {title && <h3 className="bento-title">{title}</h3>}
        {description && <p className="bento-description">{description}</p>}
        {children}
      </div>
    </StyledBentoItem>
  );
};

// Estilos
const StyledBentoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  padding: 20px 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: minmax(100px, auto);
  }
`;

const StyledBentoItem = styled(motion.div)`
  border-radius: 16px;
  background-color: var(--bg-secondary);
  overflow: hidden;
  box-shadow: var(--card-shadow);
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
  }

  .bento-header {
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
  }

  &:hover .bento-header img {
    transform: scale(1.05);
  }

  .bento-content {
    padding: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .bento-icon {
    color: var(--accent-color);
    font-size: 24px;
    margin-bottom: 12px;
  }

  .bento-title {
    color: var(--text-primary);
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .bento-description {
    color: var(--text-secondary);
    font-size: 0.95rem;
    flex: 1;
  }

  @media (max-width: 768px) {
    grid-column: span 6 !important;
    grid-row: span 1 !important;
  }
`;

export default BentoGrid;