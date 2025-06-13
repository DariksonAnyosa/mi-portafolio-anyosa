// src/pages/Contact.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xjkwzreq");
  if (state.succeeded) {
    return (
      <ThankYouContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ThankYouTitle>¡Gracias por tu mensaje!</ThankYouTitle>
          <ThankYouText>Tu mensaje fue enviado con éxito. Me pondré en contacto contigo lo antes posible.</ThankYouText>
          <ReturnButton href="/">Volver al inicio</ReturnButton>
        </motion.div>
      </ThankYouContainer>
    );
  }

  return (
    <ContactContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <PageTitle>Contacto</PageTitle>
        <PageDescription>
          ¿Tienes un proyecto en mente? ¡Conversemos!
        </PageDescription>
      </motion.div>

      <ContactContent>
        <ContactInfo>
          <ContactInfoTitle>Información de contacto</ContactInfoTitle>
          <ContactInfoText>
            Estoy disponible para proyectos freelance y oportunidades a tiempo completo. Contáctame y hablemos de cómo puedo ayudarte.
          </ContactInfoText>
          
          <ContactInfoItem>
            <ContactInfoIcon>
              <FaEnvelope />
            </ContactInfoIcon>
            <ContactInfoItemText>dariksoma@gmail.com</ContactInfoItemText>
          </ContactInfoItem>
          
          <ContactInfoItem>
            <ContactInfoIcon>
              <FaPhone />
            </ContactInfoIcon>
            <ContactInfoItemText>+51 906 005 773</ContactInfoItemText>
          </ContactInfoItem>
          
          <ContactInfoItem>
            <ContactInfoIcon>
              <FaMapMarkerAlt />
            </ContactInfoIcon>
            <ContactInfoItemText>Lima, Peru</ContactInfoItemText>
          </ContactInfoItem>
          
          <SocialLinks>
            <SocialLink href="https://github.com/DariksonAnyosa" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/dariksonanyosa/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialLink>
          </SocialLinks>
        </ContactInfo>

        <ContactForm onSubmit={handleSubmit}>
          <FormTitle>Envíame un mensaje</FormTitle>

          <FormGroup>
            <FormLabel htmlFor="email">Correo electrónico</FormLabel>
            <FormInput
              id="email"
              type="email"
              name="email"
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="message">Mensaje</FormLabel>
            <FormTextarea
              id="message"
              name="message"
              required
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </FormGroup>

          <SubmitButton type="submit" disabled={state.submitting}>
            {state.submitting ? 'Enviando...' : 'Enviar mensaje'}
          </SubmitButton>
        </ContactForm>
      </ContactContent>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: calc(var(--header-height) + 40px) var(--space-lg) 40px;
  min-height: 100vh;
  
  @media (max-width: 768px) {
    padding: calc(var(--header-height) + 40px) var(--space-md) 40px;
  }
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 16px;
  text-align: center;
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
  text-align: center;
  max-width: 600px;
  margin: 0 auto 60px;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
  background-color: var(--bg-secondary);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--card-shadow);
  border: 1px solid var(--border-color);
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background-color: var(--accent-color);
  color: white;
  padding: 40px;
  display: flex;
  flex-direction: column;
`;

const ContactInfoTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 20px;
`;

const ContactInfoText = styled.p`
  margin-bottom: 40px;
  line-height: 1.6;
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ContactInfoIcon = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  font-size: 1.2rem;
`;

const ContactInfoItemText = styled.span`
  font-size: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-top: auto;
  padding-top: 40px;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: white;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: white;
    color: var(--accent-color);
    transform: translateY(-3px);
  }
`;

const ContactForm = styled.form`
  padding: 40px;
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 30px;
  color: var(--text-primary);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: var(--text-primary);
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-size: 1rem;
  transition: border-color 0.3s;
  
  &:focus {
    outline: none;
    border-color: var(--accent-color);
  }
  
  &::placeholder {
    color: var(--text-secondary);
    opacity: 0.6;
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.3s;
  
  &:focus {
    outline: none;
    border-color: var(--accent-color);
  }
  
  &::placeholder {
    color: var(--text-secondary);
    opacity: 0.6;
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const SubmitButton = styled.button`
  background-color: var(--accent-color);
  color: white;
  padding: 12px 24px;
  border-radius: 30px;
  border: none;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover:not(:disabled) {
    background-color: var(--accent-dark);
    transform: translateY(-3px);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export default Contact;

const ThankYouContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  text-align: center;
  padding: 40px 20px;
`;

const ThankYouTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 20px;
`;

const ThankYouText = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin-bottom: 30px;
`;

const ReturnButton = styled.a`
  display: inline-block;
  padding: 12px 24px;
  background-color: var(--accent-color);
  color: white;
  font-weight: 500;
  border-radius: 30px;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: var(--accent-dark);
    transform: translateY(-3px);
  }
`;