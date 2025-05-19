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
    level: 85,
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
    level: 75,
    color: '#61DAFB',
    category: 'frontend'
  },
  {
    id: 5,
    name: 'TypeScript',
    icon: SiTypescript,
    level: 65,
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
  {
    id: 7,
    name: 'MongoDB',
    icon: SiMongodb,
    level: 55,
    color: '#47A248',
    category: 'backend'
  },
  {
    id: 8,
    name: 'Firebase',
    icon: SiFirebase,
    level: 65,
    color: '#FFCA28',
    category: 'backend'
  },
  {
    id: 9,
    name: 'Figma',
    icon: FaFigma,
    level: 70,
    color: '#F24E1E',
    category: 'design'
  },
  {
    id: 10,
    name: 'Adobe XD',
    icon: SiAdobexd,
    level: 60,
    color: '#FF61F6',
    category: 'design'
  }
];

export default skills;