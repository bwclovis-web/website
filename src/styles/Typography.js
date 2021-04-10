import { createGlobalStyle } from 'styled-components'

import font from '../assets/fonts/Quicksand-VariableFont_wght.ttf'
import headingFont from '../assets/fonts/AbrilFatface-Regular.ttf'

const Typography = createGlobalStyle`
  @font-face {
    font-family: Quicksand;
    src: url(${font});
    font-weight: 100 1000;
    font-display: fallback;
  }

  @font-face {
    font-family: AbrilFatface;
    src: url(${headingFont});
    font-display: fallback;
  }

  html {
    font-family: Quicksand, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }

  p, li {
    letter-spacing: 0.5px;
    font-size: clamp(1.6rem, 3vw, 1.8rem);
    font-weight: 500;
  }
  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    margin: 0;
  }

  h1, .h1 {
    font-family: AbrilFatface;
    font-size: clamp(4.6rem, 4vw, 8.4rem);
    letter-spacing: 0.2rem;
    font-style: italic;
    line-height: 1.2;
    text-transform: capitalize;
  }

  h2, .h2 {
      font-family: AbrilFatface;
      font-size: clamp(3.6rem, 4vw, 5.2rem);
      text-transform: capitalize;
      margin-bottom: clamp(1.2rem, 3vw, 2rem);
  }

  h3, .h3 {
      font-family: AbrilFatface;
      font-size: clamp(1.8rem, 4vw, 2.6rem);
      text-transform: capitalize;
      letter-spacing: 0.14rem;
  }
     
  a {
    color: var(--black);
    text-decoration: none;
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }
  mark, .mark {
    background: var(--yellow);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }

  .center {
    text-align: center;
  }
`
export default Typography
