import React from 'react'
import styled from 'styled-components'

import { PageContainer } from './../'

const Container = styled.header`
  position: fixed;
  top: 0;
  height: 100px;
  width: 100%;
  z-index: 9999;
  background: #d9e2e1;
`;

const Title = styled.div`
  margin-top: 0.5em;
  font-weight: bold;
  font-size: 1.2em;
`;

const Subtitle = styled.div`
  background: linear-gradient(
    270deg, rgba(0,0,0,0) 180px, rgba(0,0,0,100) 220px
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  background-clip: text;
  white-space: nowrap;
  overflow: hidden;
  font-size: 0.8em;
`;

const ContactDetails = styled.div`
  position: absolute;
  top: 0.5em;
  right: 0;
  text-align: right;
`;

const ContactPhone = styled.div``;

const ContactEmail = styled.div``;

const Header = ({title, subtitle, phone, email}) => (
  <Container>
    <PageContainer>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <ContactDetails>
        <ContactPhone>{phone}</ContactPhone>
        <ContactEmail>{email}</ContactEmail>
      </ContactDetails>
    </PageContainer>
  </Container>
)

export default Header;
