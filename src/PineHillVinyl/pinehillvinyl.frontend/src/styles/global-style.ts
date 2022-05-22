import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`  

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'onyx', sans-serif;
    margin: 0;
    font-weight: normal;
  }

  h1, h2, p{
    font-weight: normal;
  }

  html {

   margin: 0;
   padding: 0;


  }

  ::-webkit-scrollbar {
        width:  .4em;
        height: .4em;
    }
  
  ::-webkit-scrollbar-thumb {
      background: lightgray;
  }
  
  ::-webkit-scrollbar-track {
      background: gray;
  }
`

