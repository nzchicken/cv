import React from 'react'
import styled from 'styled-components'

const List = styled.div`

`

const ExperienceList = props => (
    <List>
        {props.children}
    </List>
)

export default ExperienceList
