import React from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'

const Container = styled.div`
  position: relative;
  padding-left: 0.5em;
`

const Bar = styled.div`
  position: absolute;
  left: -48px;
  top: 0;
  width: 15px;
  height: 100%;
  background-color: #9eb5ff;
  border-radius: 0px 15px 15px 0px;
`

const HeadingWrapper = styled.div``

const Company = styled.h3`
  display: inline-block;
  font-style: italic;
  margin-top: 0.8em;
`

const Separator = styled.div`
  display: inline-block;
  padding: 0px 5px;
  &:before {
    font-size: 1.3em;
    content: '//';
  }
`

const JobTitle = styled.h3`
  display: inline-block;
  margin-top: 0.8em;
`

const Duration = styled.div`
  margin-bottom: 0.8em;
`

const WorkHistory = ({html, company, title, timeFrom, timeTo}) => (
  <>
    <Container>
      <Bar />
      <HeadingWrapper>
        <JobTitle>{title}</JobTitle>
        <Separator />
        <Company>{company}</Company>
      </HeadingWrapper>
      <Duration>{format(timeFrom, 'MMM \'YY')} - {timeTo == null ? 'Present' : format(timeTo, 'MMM \'YY')}</Duration>
      <div dangerouslySetInnerHTML={{ __html: html}} />
    </Container>
  </>
)

export default WorkHistory
