import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Inter';
    font-size: 14px;
    color: #202020;
  }

  input, textarea, button {
    font-family: 'Inter';
    font-size: 14px;
  }
`
