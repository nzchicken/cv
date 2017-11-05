import styled from 'styled-components'
import { media } from '../utils/style-utils'

const golden = 1.61803398875;

const marginLeftPercent = (1 - (1 / golden)) / (1 + golden)
const menuWidth = 340

const Container = styled.div`
    margin: 3rem 0;
    width: calc(100% * (${golden} - 1));
    transition: transform 0.2s;
    transform: translate(${props => props.menuVisible
        ? (window.innerWidth * marginLeftPercent < 340 ? 340 : window.innerWidth * marginLeftPercent)
        : window.innerWidth * marginLeftPercent}px, 0);

    ${ media.mobile`
        margin: 1rem 0.5rem;
        max-width: 100%;
    `}
    ${ media.tablet`
        margin: 1rem auto;
        max-width: 90%;
    `}
`

export default Container;
