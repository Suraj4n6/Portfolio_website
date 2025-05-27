import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../utils/constants';

const AboutContainer = styled.div.attrs({ id: 'about' })`
  min-height: 100vh;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(motion.h2)`
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #4169E1, #00ffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(65, 105, 225, 0.3);
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  width: 100%;
  align-items: flex-start;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Bio = styled.div`
  font-size: 1.25rem;
  color: #bfc9d8;
  line-height: 1.7;
  letter-spacing: 0.01em;
`;

const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
`;

const SkillRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const SkillLabel = styled.span`
  font-size: 1.15rem;
  color: #fff;
  font-weight: 500;
`;

const SkillPercent = styled.span`
  font-size: 1.1rem;
  color: #bfc9d8;
  font-weight: 500;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 10px;
  background: #23243a;
  border-radius: 8px;
  margin-top: 0.2rem;
  margin-bottom: 1.2rem;
  overflow: hidden;
`;

const ProgressBar = styled(motion.div)`
  height: 100%;
  border-radius: 8px;
  background: linear-gradient(90deg, #6C2BD9 0%, #00ffff 100%);
`;

const aboutSkills = [
  { label: 'Python', percent: 90 },
  { label: 'JavaScript', percent: 85 },
  { label: 'SQL', percent: 80 },
  { label: 'React', percent: 75 },
  { label: 'Docker', percent: 70 },
];

function About() {
  return (
    <AboutContainer>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </Title>
      <AboutGrid>
        <Bio>
          <p>AI & ML Engineer with hands-on experience in machine learning, web development, and cybersecurity. Specialized in building secure and scalable systems that address complex business challenges.</p>
          <p>Graduated with a Bachelor's degree in Artificial Intelligence and Machine Learning from Global Academy of Technology, Bangalore, with a GPA of 8.02/10.0.</p>
          <p>My mission is to leverage emerging technologies to develop innovative solutions that drive digital transformation and create meaningful impact.</p>
        </Bio>
        <SkillsSection>
          {aboutSkills.map((skill, idx) => (
            <div key={skill.label}>
              <SkillRow>
                <SkillLabel>{skill.label}</SkillLabel>
                <SkillPercent>{skill.percent}%</SkillPercent>
              </SkillRow>
              <ProgressBarContainer>
                <ProgressBar
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.percent}%` }}
                  transition={{ duration: 1.2, delay: idx * 0.2, ease: 'easeOut' }}
                />
              </ProgressBarContainer>
            </div>
          ))}
        </SkillsSection>
      </AboutGrid>
    </AboutContainer>
  );
}

export default About;