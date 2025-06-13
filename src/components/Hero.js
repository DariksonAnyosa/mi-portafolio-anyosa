import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiDownload, FiChevronDown, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Hero = () => {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY < 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container>
      <Content>
        <Title>
          Desarrollador Frontend
          <TitleAccent>Especializado en UX</TitleAccent>
        </Title>

        <Description>
          Creo experiencias digitales intuitivas y accesibles
          que conectan con los usuarios.
        </Description>

        <CTAGroup>
          <PrimaryButton to="#projects">
            Ver proyectos
            <FiArrowRight />
          </PrimaryButton>

          <SecondaryButton
            as="a"
            href="/cv.pdf"
            download
            aria-label="Descargar CV"
          >
            Descargar CV
            <FiDownload />
          </SecondaryButton>
        </CTAGroup>

        <SocialLinks>
          <SocialLink
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FiGithub size={24} />
          </SocialLink>
          <SocialLink
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={24} />
          </SocialLink>
          <SocialLink
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FiTwitter size={24} />
          </SocialLink>
        </SocialLinks>

        <ScrollIndicator
          animate={{
            opacity: showScroll ? 1 : 0,
            y: showScroll ? [0, 10, 0] : 0
          }}
          transition={{
            y: {
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            },
            opacity: {
              duration: 0.3
            }
          }}
          aria-hidden="true"
        >
          <FiChevronDown size={24} />
        </ScrollIndicator>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 5rem 1rem;
  position: relative;

  @media (prefers-reduced-motion: reduce) {
    min-height: auto;
    padding-top: 8rem;
  }
`;

const Content = styled.div`
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 7vw, 2.75rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--text-hi);
  margin: 0;
`;

const TitleAccent = styled.span`
  display: block;
  color: var(--brand);
  font-weight: 800;
`;

const Description = styled.p`
  font-size: clamp(1.125rem, 4vw, 1.25rem);
  line-height: 1.6;
  color: var(--text-lo);
  margin: 1.5rem 0 0;
  padding: 0 1rem;
`;

const CTAGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2.5rem;
  padding: 0 1rem;

  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const ButtonBase = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.125rem;
  text-decoration: none;
  transition: all 0.2s;

  &:focus-visible {
    outline: 2px solid var(--brand);
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const PrimaryButton = styled(ButtonBase)`
  background-color: var(--brand);
  color: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  @media (prefers-reduced-motion: reduce) {
    &:hover {
      transform: none;
    }
  }
`;

const SecondaryButton = styled(ButtonBase)`
  background-color: transparent;
  color: var(--text-hi);
  border: 1px solid var(--border-color);

  &:hover {
    border-color: var(--brand);
    color: var(--brand);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2.5rem;
`;

const SocialLink = styled.a`
  color: var(--text-lo);
  transition: all 0.2s;

  &:hover {
    color: var(--brand);
    transform: scale(1.1);
  }

  &:focus-visible {
    outline: 2px solid var(--brand);
    outline-offset: 4px;
    border-radius: 4px;
  }

  @media (prefers-reduced-motion: reduce) {
    &:hover {
      transform: none;
    }
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: var(--text-lo);
  opacity: 0;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;

export default Hero; 