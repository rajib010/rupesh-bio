import React from 'react';
import EducationalBackgroundComponent from '@/components/about/EducationalBackgroud';
import ExperienceComponent from '@/components/about/ExperienceCard';
import CVSection from '@/components/home/CV';


const About = () => {
  return (
    <main className="w-full p-4 center mt-[7rem] flex flex-col gap-7">
      <EducationalBackgroundComponent />      
      <ExperienceComponent />
      <CVSection />
    </main>
  );
};

export default About;
