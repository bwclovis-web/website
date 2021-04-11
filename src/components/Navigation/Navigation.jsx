import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Image from '../image'

const NavigationStyles = styled.nav`
  background-color: var(--purple);
  width: 100%;
  display: flex;
  padding: clamp(1.6rem, 3vw, 3rem) clamp(2rem, 3vw, 6rem);
  box-shadow: 0 10px 10px 3px rgba(0, 0, 0, 0.4);
  flex-direction: column;

  @media (min-width: 900px) {
    width: 26vw;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 6;
  }

  ul {
    list-style: none;
    width: 100%;
    display: flex;
    justify-content: space-around;

    @media (min-width: 900px) {
      flex-direction: column;
    }
  }

  .gatsby-image-wrapper {
    margin-bottom: 6rem;
    width: 50vw;
    margin: 0 auto;

    @media (min-width: 900px) {
      margin: 5rem auto;
      width: 100%;
    }
  }
  .h2 {
    margin-bottom: 0;
  }

  .h2 > a {
    color: #fff;
    text-decoration: none;
    border-right: 14px solid transparent;
    align-items: center;
    justify-content: space-between;
    display: flex;

    &:after {
      content: '';
      border-right: 20px solid var(--ltblue);
      opacity: 0;
      height: 20px;
      width: 20px;
      transform: scaleY(0);
      transition: all 0.3s ease-in-out;
      border-radius: 50%;
      margin-left: 1rem;

      @media (min-width: 900px) {
        height: 40px;
        width: 40px;
        border-width: 40px;
      }
    }
  }

  .h2 > a:hover,
  a:focus {
    &:after {
      opacity: 1;
      transform: scaleY(1);
    }
  }
  .h2 > a[aria-current='page'] {
    &:after {
      opacity: 1;
      transform: scaleY(1);
      border-color: var(--violet);
      margin-left: 1rem;
    }
  }
`

const Navigation = () => (
  <NavigationStyles>
    <Link to="/" aria-label="home page">
      <Image />
    </Link>
    <ul>
      <li className="h2">
        <Link to="/about">
          <span>ABOUT</span>
        </Link>
      </li>
      <li className="h2">
        <Link to="/blog">BLOG</Link>
      </li>
    </ul>
  </NavigationStyles>
)

export default Navigation
