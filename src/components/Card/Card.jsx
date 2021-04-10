import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Link } from 'gatsby'

const CardStyles = styled(Link)`
  flex: 1 1 300px;
  position: relative;
  border: 1px solid var(--grey);
  border-radius: var(--radius);
  box-shadow: 0 0 0.6rem rgba(0, 0, 0, 0.32);
  transition: all 0.2s ease-in;

  &:hover,
  &:focus {
    box-shadow: 0 0 1.6rem rgba(0, 0, 0, 0.42);

    h3 {
      background-color: var(--ltblue);
      color: var(--violet);
      border-color: var(--violet);
    }
  }

  .gatsby-image-wrapper {
    height: 200px;
  }

  h3 {
    position: absolute;
    z-index: 2;
    color: var(--ltblue);
    border-bottom: 1px solid var(--ltblue);
    border-right: 1px solid var(--ltblue);
    background-color: var(--violet);
    padding: 1rem;
    transition: all 0.2s ease-out;
  }
  .description {
    margin: 0;
    padding: 2rem;
  }
`

const Card = ({ data }) => {
  const { name, description, slug, image } = data
  console.log('%c [From Card]', 'color:orange; background:purple', data)
  return (
    <CardStyles to={`/blog/${slug.current}`}>
      <h3>{name}</h3>
      <Img fluid={image.asset.fluid} />
      <p className="description">{description}</p>
    </CardStyles>
  )
}

Card.propTypes = {}

export default Card
