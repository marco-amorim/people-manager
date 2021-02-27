import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --background: #E9F1F8;
    --purple: #5C5CFF;
    --white: #FFFFFF;
    --black: #333333;
    --green: #55DAC6;
    
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    @media (min-width: 576px) {
      max-width: 540px;
    }
    @media (min-width: 768px) {
      max-width: 720px;
    }
    @media (min-width: 992px) {
      max-width: 960px;
    }
    @media (min-width: 1200px) {
      max-width: 1140px;
    }
  
  }


  body {
    background-color: var(--background);
    color: var(--black);
    font-family: 'Nunito Sans';
    font-size: 1rem;
  }

  * {
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }
   
   h1, h2, h3, h4, h5 {
    font-family: 'Nunito Sans', sans-serif;
   }

   a {
     text-decoration: none;
   }
`;

export default GlobalStyle;
