// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import GlobalStyles from './styles/GlobalStyles';

// Componentes
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Páginas
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <GlobalStyles />
        <Router>
          <AppContainer>
            <Navbar />
            <MainContent>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/proyectos" element={<Projects />} />
                <Route path="/habilidades" element={<Skills />} />
                <Route path="/experiencia" element={<Experience />} />
                <Route path="/contacto" element={<Contact />} />
              </Routes>
            </MainContent>
            <Footer />
          </AppContainer>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding-top: 80px; /* Espacio para el navbar fijo */
`;

export default App;