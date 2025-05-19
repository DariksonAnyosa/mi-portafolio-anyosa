import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

export const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/proyectos',
    component: Projects
  },
  {
    path: '/habilidades',
    component: Skills
  },
  {
    path: '/experiencia',
    component: Experience
  },
  {
    path: '/contacto',
    component: Contact
  }
];