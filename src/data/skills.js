// src/data/skills.js
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaFigma } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiAdobexd, SiMongodb, SiFirebase } from 'react-icons/si';

export const skills = [
  {
    id: 1,
    name: 'HTML5',
    icon: FaHtml5,
    level: 90,
    color: '#E34F26',
    category: 'frontend'
  },
  {
    id: 2,
    name: 'CSS3',
    icon: FaCss3Alt,
    level: 50,
    color: '#1572B6',
    category: 'frontend'
  },
  {
    id: 3,
    name: 'JavaScript',
    icon: SiJavascript,
    level: 80,
    color: '#F7DF1E',
    category: 'frontend'
  },
  {
    id: 4,
    name: 'React',
    icon: FaReact,
    level: 50,
    color: '#61DAFB',
    category: 'frontend'
  },
  {
    id: 5,
    name: 'TypeScript',
    icon: SiTypescript,
    level: 50,
    color: '#3178C6',
    category: 'frontend'
  },
  {
    id: 6,
    name: 'Node.js',
    icon: FaNodeJs,
    level: 60,
    color: '#339933',
    category: 'backend'
  },
];

export default skills;