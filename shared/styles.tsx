import { css, Global } from '@emotion/react';

export const media = {
  maxMobile: '@media(max-width:800px)',
  minlaptop: '@media(min-width: 800px)',
  laptop: '@media(min-width: 1000px)',
  desktop: '@media(min-width: 1400px)',
  large: '@media(min-width: 2000px)',
  tablet:'@media(min-width:768px)'
};

export const globalStyles = (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
      }
      @media (max-width: 1080px) {
        html {
          font-size: 93.75%;
        }
      }
      @media (max-width: 720px) {
        html {
          font-size: 87.5%;
        }
      }
      html,
      body {
        background-color: #00000034;
        overflow-x: hidden;
        display:flex;
        justify-content: center;
        align-items: center;
      }
      body {
       
      }
      body,
      input,
      button {
        font-family: 'Poppins', sans-serif;
      }
      button {
        cursor: pointer;
      }

        
    @keyframes mygradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
    
}
    `}
  />
);