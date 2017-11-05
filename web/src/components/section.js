import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
    margin: 5rem 0 3rem 0;
`

const Section = ({title, children}) => (
    <StyledSection>
        <h2 id={'anchor-' + title.toLowerCase()}>{title}</h2>
        {children}
    </StyledSection>
)

export default Section
