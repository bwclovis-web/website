import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledTagList = styled.ul`
  display: flex;
  align-items: center;
  padding: 0 0 0 0.7rem;
  margin-top: 4rem;

  @media (min-width: 900px) {
    margin-top: 0;
  }

  .blog-tag {
    list-style: none;

    & + .blog-tag {
      margin-left: 1rem;
    }

    a {
      color: var(--white);
      text-decoration: none;
      background-color: var(--green);
      font-size: clamp(1.6rem, 3vw, 2.2rem);
      padding: 1rem 1.4rem;
      border-radius: var(--radius);
      box-shadow: -0.6rem 0.7rem 0 -0.1rem var(--purple);
      font-weight: 500;
      transition: all 0.2s ease-in-out;

      &:hover {
        background-color: var(--violet);
        box-shadow: -0.6rem 0.7rem 0 -0.1rem var(--green);
        color: var(--ltblue);
      }
    }
  }
`

const BlogTagList = ({ data }) => (
  <StyledTagList>
    {data.map(item => {
      console.log('%c [item]', 'color:orange; background:purple', item.name)
      return (
        <li className="blog-tag">
          <Link to={`/blog/${item.name}`}>{item.name.toUpperCase()}</Link>
        </li>
      )
    })}
  </StyledTagList>
)

BlogTagList.propTypes = {}

export default BlogTagList
