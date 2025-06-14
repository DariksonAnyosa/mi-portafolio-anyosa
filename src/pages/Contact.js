// src/pages/Contact.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Contact = () => {
  const { language } = useLanguage();
  const t = translations.contact;
  const [state, handleSubmit] = useForm("xjkwzreq");

  if (state.succeeded) {
    return (
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title>{t.success[language]}</Title>
          <Description>{t.success[language]}</Description>
          <Button as="a" href="/">{language === 'es' ? 'Volver al inicio' : 'Back to home'}</Button>
        </motion.div>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Contacto</Title>
      <Description>
        ¿Tienes un proyecto en mente? ¡Conversemos!
      </Description>

      <ContentGrid>
        <ContactInfo>
          <InfoTitle>Información de contacto</InfoTitle>
          <InfoText>
            Estoy disponible para proyectos freelance y oportunidades a tiempo completo. 
            Contáctame y hablemos de cómo puedo ayudarte.
          </InfoText>
          
          <ContactDetails>
            <ContactItem>
              dariksoma@gmail.com
            </ContactItem>
            <ContactItem>
              +51 906 005 773
            </ContactItem>
            <ContactItem>
              Lima, Peru
            </ContactItem>
          </ContactDetails>
          
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
          </SocialLinks>
        </ContactInfo>

        <ContactForm>
          <FormTitle>Envíame un mensaje</FormTitle>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="tu@email.com"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Mensaje</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tu mensaje aquí..."
                required
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </FormGroup>

            <Button type="submit" disabled={state.submitting}>
              {state.submitting ? 'Enviando...' : 'Enviar mensaje'}
            </Button>
          </form>
        </ContactForm>
      </ContentGrid>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 20px 60px;
  font-family: 'JetBrains Mono', monospace;

  @media (max-width: 768px) {
    padding: 100px 20px 40px;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--text-primary);
  font-family: 'JetBrains Mono', monospace;
`;

const Description = styled.p`
  font-size: 20px;
  color: var(--text-secondary);
  margin-bottom: 64px;
  font-family: 'JetBrains Mono', monospace;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const InfoTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 16px;
  font-family: 'JetBrains Mono', monospace;
`;

const InfoText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 32px;
  font-family: 'JetBrains Mono', monospace;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ContactItem = styled.div`
  font-size: 16px;
  color: var(--text-primary);
  font-family: 'JetBrains Mono', monospace;
  margin-bottom: 8px;
  padding: 8px 0;
  border-bottom: 1px solid #e1e1e1;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-top: auto;
`;

const SocialLink = styled.a`
  color: var(--text-primary);
  font-size: 24px;
  transition: all 0.3s ease;
  padding: 8px;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  &:hover {
    color: var(--accent-color);
    border-color: var(--accent-color);
  }
`;

const ContactForm = styled.div``;

const FormTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 32px;
  font-family: 'JetBrains Mono', monospace;
`;

const FormGroup = styled.div`
  margin-bottom: 24px;
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 8px;
  font-family: 'JetBrains Mono', monospace;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  background-color: transparent;
  color: var(--text-primary);
  transition: all 0.3s ease;
  font-family: 'JetBrains Mono', monospace;

  &:focus {
    outline: none;
    border-color: var(--accent-color);
  }

  &::placeholder {
    color: #888;
    opacity: 0.8;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  background-color: transparent;
  color: var(--text-primary);
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  font-family: 'JetBrains Mono', monospace;

  &:focus {
    outline: none;
    border-color: var(--accent-color);
  }

  &::placeholder {
    color: #888;
    opacity: 0.8;
  }
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
  background-color: transparent;
  border: 1px solid #e1e1e1;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 4px;
  font-family: 'JetBrains Mono', monospace;

  &:hover:not(:disabled) {
    background-color: var(--accent-color);
    color: white;
    border-color: var(--accent-color);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default Contact;