// Ejemplo de cómo usar las diferentes fuentes en tus componentes
import React from 'react';
import styled from 'styled-components';

// Componente con fuente primaria (Inter)
const PrimaryText = styled.h1`
  font-family: var(--font-primary);
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-primary);
`;

// Componente con fuente secundaria (Poppins)
const SecondaryText = styled.h2`
  font-family: var(--font-secondary);
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--text-secondary);
`;

// Componente con fuente monoespaciada (Courier)
const MonoText = styled.p`
  font-family: var(--font-mono);
  font-size: 1rem;
  background-color: var(--bg-secondary);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  letter-spacing: 0.5px;
`;

// Ejemplo usando tema de styled-components
const ThemedText = styled.div`
  font-family: ${props => props.theme.fontMono};
  font-size: 1.1rem;
  color: ${props => props.theme.accentColor};
  background-color: ${props => props.theme.bgSecondary};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  display: inline-block;
`;

// Componente de ejemplo
const TypographyExample = () => {
  return (
    <div>
      <PrimaryText>Título con fuente primaria (Inter)</PrimaryText>
      
      <SecondaryText>Subtítulo con fuente secundaria (Poppins)</SecondaryText>
      
      <p className="font-primary">
        Este párrafo usa la clase .font-primary para aplicar Inter
      </p>
      
      <p className="font-secondary">
        Este párrafo usa la clase .font-secondary para aplicar Poppins
      </p>
      
      <div className="font-mono">
        Este texto usa la clase .font-mono para aplicar Courier
      </div>
      
      <MonoText>
        Este es un bloque de código o texto técnico usando Courier:
        <br />
        function ejemplo() {"{"}
        <br />
        &nbsp;&nbsp;console.log("¡Hola mundo!");
        <br />
        {"}"}
      </MonoText>
      
      <ThemedText>
        Este texto usa el tema de styled-components para aplicar Courier
      </ThemedText>
      
      <pre>
        <code>
          // Código de ejemplo
          const saludo = "¡Hola!";
          console.log(saludo);
        </code>
      </pre>
    </div>
  );
};

export default TypographyExample;
