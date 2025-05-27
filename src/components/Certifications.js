import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../utils/constants';

const CertificationsContainer = styled.div.attrs({ id: 'certifications' })`
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

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
`;

const CertificationCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
    border-color: rgba(65, 105, 225, 0.3);
  }
`;

const CertificationHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const CertificationIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: linear-gradient(45deg, #4169E1, #00ffff);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: white;
  box-shadow: 0 4px 20px rgba(0, 255, 255, 0.2);
`;

const CertificationInfo = styled.div`
  flex: 1;
`;

const CertificationTitle = styled.h3`
  font-size: 1.3rem;
  color: #00ffff;
  margin-bottom: 0.5rem;
`;

const CertificationProvider = styled.p`
  color: #8892b0;
  font-size: 1rem;
`;

const CertificationDescription = styled.p`
  color: #8892b0;
  line-height: 1.6;
  font-size: 1rem;
`;

const CertificationDate = styled.p`
  color: #00ffff;
  font-size: 0.9rem;
  margin-top: auto;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 4px;
    background: #00ffff;
    border-radius: 50%;
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

function Certifications() {
  return (
    <CertificationsContainer>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Certifications
      </Title>
      <CertificationsGrid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {CERTIFICATIONS.map((cert, index) => (
          <CertificationCard
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <CertificationHeader>
              <CertificationIcon>
                <i className="fas fa-certificate"></i>
              </CertificationIcon>
              <CertificationInfo>
                <CertificationTitle>{cert.title}</CertificationTitle>
                <CertificationProvider>{cert.provider}</CertificationProvider>
              </CertificationInfo>
            </CertificationHeader>
            <CertificationDescription>{cert.description}</CertificationDescription>
            <CertificationDate>{cert.date}</CertificationDate>
          </CertificationCard>
        ))}
      </CertificationsGrid>
    </CertificationsContainer>
  );
}

export default Certifications;