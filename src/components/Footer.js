import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 2rem;
  background-color: #0a0a0f;
  color: #8892b0;
  text-align: center;
  border-top: 1px solid #1e1e2e;
`;

const Copyright = styled.p`
  font-size: 0.9rem;
`;

function Footer() {
  return (
    <FooterContainer>
      <Copyright>
        © {new Date().getFullYear()} Sai Suraj R. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;