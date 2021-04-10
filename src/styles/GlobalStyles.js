import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #DC490B;
    --black: #21323B;
    --purple: #A665AD;
    --green: #416125;
    --violet: #5C2F61;
    --ltblue: #F7DCFA;
    --white: #C3FAEC;
    --grey: #B9A5BB;
    --radius: .3rem;
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    line-height: 1.5;
    background-color: var(--white);
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    background: var(--red);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--purple) var(--white);
  }

  body::-webkit-scrollbar-track {
    background: var(--white);
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--purple) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  hr {
    border: 0;
    height: 8px;
    background-size: 1500px;
  }

  img {
    max-width: 100%;
  }

  .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 clamp(2rem, 1vw, 4rem);
      width: 100%;
  }

  .banner-left {
    display: flex;
    color: white;
    text-align: left;
    align-items: center;

    .container {
      margin-top: -10vh; /*clamp this */
    }
  }

  main {
    overflow: hidden;

    @media (min-width: 900px) {
      margin-left: 26%;
    }
  }

  .content-container {
    padding: clamp(2rem, 3vw, 6rem);
  }
`

export default GlobalStyles
