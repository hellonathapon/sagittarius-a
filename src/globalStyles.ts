import { createGlobalStyle } from 'styled-components'
import { ThemeType } from './themes'


export const GlobalStyles = createGlobalStyle<{theme: ThemeType}>`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
    }
`