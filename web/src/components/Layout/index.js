import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components';

import Config from '../../utils/config'

import { Header, PageContainer } from './../'

const Body = styled.div`
  background: linear-gradient(
    180deg,
    #d9e2e1 0%,
    #f5f5f5 100%
  );
`;

const Layout = ({ children }) => (
  <Body>
    <Helmet
      title={Config.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />
    <Header
      {...Config.contact}
    />
    <PageContainer marginTop="80px">
      {children}
    </PageContainer>
  </Body>
)

export default Layout;
