import styled from 'styled-components'
import React from 'react'

const Wrapper = styled.header`
    border-bottom: 2px solid ${props => props.theme.borderColor || 'black'};
    border-image: ${props => props.theme.borderImage || 'none' };
`

const HeadingLarge = styled.h1`
    font-size: 2.5rem;
`

const HeadingMedium = styled.h2`
    font-size: 1.75rem;
`

const HeadingSmall = styled.h3`
    font-size: 1.5rem;
`

const Header = props => (
    <Wrapper>
        <HeadingMedium>{props.fullName}</HeadingMedium>
        <HeadingSmall>{props.brief}</HeadingSmall>
        <HeadingLarge>{props.heading}</HeadingLarge>
    </Wrapper>
)

export default Header
