import { css } from 'styled-components'

export const media = {
    mobile: (...args) => css`
        @media (max-width: 420px) {
            ${ css(...args) }
        }
    `,
    tablet: (...args) => css`
        @media (min-width: 420px) and (max-width: 860px) {
            ${ css(...args) } 
        }
    `
}
