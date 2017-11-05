import styled from 'styled-components';

const Body = styled.div`
    background-color: ${props => props.theme.backgroundColor || 'white'};
    background-image: url(${props => props.theme.backgroundImage || 'none'});
    background-repeat: repeat;
    padding: 3rem 0;
`

export default Body
