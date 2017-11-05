import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

const Wrapper = styled.div`
    margin-top: 3em;
`

const ExperienceItem = props => (
    <Wrapper>
        <p>
            <strong>{props.title}</strong> - <em>{props.company}</em><br />
            <span>{moment(props.from).format('MMM \'YY')}</span> - <span>{props.to === null ? 'Present' : moment(props.to).format('MMM \'YY')}</span>
        </p>
        <div dangerouslySetInnerHTML={{ __html: props.html }} />
    </Wrapper>
)

export default ExperienceItem
