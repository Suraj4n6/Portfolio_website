import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { SKILLS } from '../utils/constants';

const HomeContainer = styled.div.attrs({ id: 'home' })`
  min-height: 100vh;
  padding: 0 2rem;
  background: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const ParticlesBackground = styled(Particles)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Content = styled(motion.div)`
  z-index: 2;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 5rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #4169E1, #00ffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(65, 105, 225, 0.3);
  line-height: 1.2;
  
  span {
    color: #4169E1;
    display: inline-block;
  }
  
  .highlight {
    color: #00ffff;
    display: inline-block;
  }

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const AnimatedSubtitle = styled.div`
  font-size: 2rem;
  color: #00ffff;
  margin-bottom: 2rem;
  height: 2em;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
  font-weight: 500;
`;

const Description = styled.p`
  font-size: 1.4rem;
  color: #8892b0;
  max-width: 700px;
  margin-bottom: 3rem;
  line-height: 1.8;
  text-shadow: 0 0 10px rgba(136, 146, 176, 0.1);
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

const Button = styled.a`
  padding: 1.2rem 2.5rem;
  border-radius: 12px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  font-size: 1.1rem;
  
  &.primary {
    background: linear-gradient(45deg, #6C2BD9, #4169E1);
    color: white;
    border: none;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(108, 43, 217, 0.3);
    }
  }
  
  &.secondary {
    border: 2px solid #00ffff;
    color: #00ffff;
    background: transparent;
    
    &:hover {
      background: rgba(0, 255, 255, 0.1);
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 255, 255, 0.2);
    }
  }
`;

function Home() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesConfig = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#00ffff"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5,
        random: false
      },
      size: {
        value: 3,
        random: true
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "bounce"
        }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#00ffff",
        opacity: 0.4,
        width: 1
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        }
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1
          }
        }
      }
    }
  };

  return (
    <HomeContainer>
      <ParticlesBackground
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
      />
      <Content
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title>
          Hi, I'm <span>Sai Suraj R</span>
          <br />
          <span className="highlight">AI/ML Engineer</span>
        </Title>
        <AnimatedSubtitle>
          <Typewriter
            options={{
              strings: [
                "AI/ML Enthusiast",
                "Full Stack Developer",
                "Cyber Security Intern",
                "Machine Learning Engineer"
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 50
            }}
          />
        </AnimatedSubtitle>
        <Description>
        AI & ML Engineer with a passion for creating cutting-edge 
        intelligent systems that solve real-world challenges through innovation and technical excellence.
          
        </Description>
        <ButtonContainer>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="primary"
            style={{
              padding: '1.2rem 2.5rem',
              borderRadius: '12px',
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #4169E1, #00ffff)',
              color: 'white',
              textDecoration: 'none',
              marginRight: '1rem'
            }}
          >
            Download Resume
          </a>
          <Button href="#projects" className="secondary">
            View My Work
          </Button>
        </ButtonContainer>
      </Content>
    </HomeContainer>
  );
}

export default Home;