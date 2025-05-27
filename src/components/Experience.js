import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../utils/constants';

const ExperienceContainer = styled.div.attrs({ id: 'experience' })`
  min-height: 100vh;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 4rem;
  background: linear-gradient(45deg, #4169E1, #00ffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(65, 105, 225, 0.3);
`;

const Timeline = styled.div`
  max-width: 1200px;
  width: 100%;
  position: relative;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, #4169E1, #00ffff);
    opacity: 0.3;

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const ExperienceCard = styled(motion.div)`
  position: relative;
  margin-bottom: 4rem;
  width: 100%;
  display: flex;
  justify-content: ${props => props.isEven ? 'flex-start' : 'flex-end'};

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 50px;
  }
`;

const CardContent = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  width: calc(50% - 50px);
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
    border-color: rgba(65, 105, 225, 0.3);
  }

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    ${props => props.isEven ? 'right: -50px;' : 'left: -50px;'}
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: linear-gradient(45deg, #4169E1, #00ffff);
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);

    @media (max-width: 768px) {
      left: -40px;
      right: auto;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Role = styled.h3`
  font-size: 1.5rem;
  color: #00ffff;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  &::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 24px;
    background: linear-gradient(45deg, #4169E1, #00ffff);
    border-radius: 2px;
  }
`;

const Company = styled.h4`
  font-size: 1.2rem;
  color: #8892b0;
  margin-bottom: 1rem;
`;

const Duration = styled.p`
  color: #00ffff;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #8892b0;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  background: rgba(65, 105, 225, 0.1);
  color: #00ffff;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  border: 1px solid rgba(0, 255, 255, 0.2);
`;

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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

function Experience() {
  return (
    <ExperienceContainer>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Work Experience
      </Title>
      <Timeline
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {EXPERIENCE.map((exp, index) => (
          <ExperienceCard
            key={index}
            variants={cardVariants}
            isEven={index % 2 === 0}
          >
            <CardContent isEven={index % 2 === 0}>
              <Role>{exp.position}</Role>
              <Company>{exp.company}</Company>
              <Duration>{exp.duration}</Duration>
              {exp.responsibilities && exp.responsibilities.length > 0 && (
                <ul style={{ margin: "1rem 0", paddingLeft: "1.2rem" }}>
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx} style={{ color: "#b0c4de", marginBottom: "0.5rem" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              <TechStack>
                {exp.technologies.map((tech, techIndex) => (
                  <TechTag key={techIndex}>{tech}</TechTag>
                ))}
              </TechStack>
            </CardContent>
          </ExperienceCard>
        ))}
      </Timeline>
    </ExperienceContainer>
  );
}

export default Experience;