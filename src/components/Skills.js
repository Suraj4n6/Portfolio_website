import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SKILLS } from '../utils/constants';

const SkillsContainer = styled.div.attrs({ id: 'skills' })`
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
  margin-bottom: 4rem;
  background: linear-gradient(45deg, #4169E1, #00ffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(65, 105, 225, 0.3);
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  width: 100%;
`;

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
    border-color: rgba(65, 105, 225, 0.3);
  }
`;

const SkillTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #00ffff;
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 30px;
    background: linear-gradient(45deg, #4169E1, #00ffff);
    border-radius: 2px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 2px;
    background: linear-gradient(90deg, #4169E1, transparent);
  }
`;

const SkillList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const SkillName = styled.span`
  font-size: 1.2rem;
  color: #8892b0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SkillLevel = styled.span`
  font-size: 1rem;
  color: #00ffff;
  font-weight: 500;
  padding: 0.3rem 0.8rem;
  background: rgba(0, 255, 255, 0.1);
  border-radius: 15px;
  border: 1px solid rgba(0, 255, 255, 0.2);
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.level}%;
    background: linear-gradient(90deg, #4169E1, #00ffff);
    border-radius: 4px;
    transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const skillLevels = {
  'Advanced': 90,
  'Intermediate': 70,
  'Basic': 50
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

function Skills() {
  return (
    <SkillsContainer>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills & Expertise
      </Title>
      <SkillsGrid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {SKILLS.map((skill, index) => (
          <SkillCard
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <SkillTitle>{skill.name}</SkillTitle>
            <SkillList>
              <SkillItem>
                <SkillName>
                  {skill.name}
                  <SkillLevel>{skill.level}</SkillLevel>
                </SkillName>
                <ProgressBar level={skillLevels[skill.level]} />
              </SkillItem>
            </SkillList>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
}

export default Skills;
