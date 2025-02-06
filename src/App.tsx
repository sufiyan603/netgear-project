import React from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';

const services = [
  {
    id: 1,
    title: 'Custom Software Development',
    description: 'Tailored solutions to meet your unique business requirements',
    icon_name: 'Code2'
  },
  {
    id: 2,
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure for your business',
    icon_name: 'Cloud'
  },
  {
    id: 3,
    title: 'IT Consulting',
    description: 'Expert guidance for your digital transformation journey',
    icon_name: 'LineChart'
  },
  {
    id: 4,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your business',
    icon_name: 'Shield'
  },
  {
    id: 5,
    title: 'Data Analytics',
    description: 'Turn your data into actionable insights',
    icon_name: 'BarChart'
  },
  {
    id: 6,
    title: 'DevOps Services',
    description: 'Streamline your development and operations',
    icon_name: 'Git'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Services services={services} />
    </div>
  );
}

export default App;