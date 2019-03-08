import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  padding: 0 50px 0 60px;
  overflow: auto;
  margin-bottom: 3em;
  background: ${props => props.color};

  @media (max-width: 700px) {
    padding: 0px 15px 0px 25px;
  }
`

const Bar = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 12px;
  height: 100%;
  background: ${props => props.color};

  @media (max-width: 700px) {
    width: 8px;
  }
`

const Heading = styled.h1` `

const Section = ({title, html, color, backcolor, children}) => (
  <>
  {console.log(color)}
    <Container color={backcolor}>
      <Bar color={color}/>
      <Heading>{title}</Heading>
      <div dangerouslySetInnerHTML={{ __html: html}} />
      {children}
    </Container>
  </>
)

export default Section;
