import styled from 'styled-components'
import { media } from '../utils/style-utils'

const golden = 1.61803398875;

const Container = styled.div`
    margin: 3rem 0 3rem calc(100% * ((1 - (1 / ${golden})) / (1 + ${golden})));
    width: calc(100% * (${golden} - 1));
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
