import React from 'react';
import { TracingBeam } from '../components/TracingBeam';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { SkillsPreview } from '../components/SkillsPreview';
import { ProjectsPreview } from '../components/ProjectsPreview';
import { ExperienceSection } from '../components/ExperienceSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

export const Home = () => {
  return (
    <TracingBeam>
      <div className="pt-16">
        <HeroSection />
        <AboutSection />
        <SkillsPreview />
        <ProjectsPreview />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </div>
    </TracingBeam>
  );
};