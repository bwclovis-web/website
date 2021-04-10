import React from 'react'
import PropTypes from 'prop-types'
import BackgroundImage from 'gatsby-background-image'

const BannerImage = ({ classname, data }) => {
  const { heading, image, name } = data
  const renderedImage = [
    image.asset.fluid,
    `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.25))`,
  ].reverse()

  return (
    <BackgroundImage
      Tag="div"
      fluid={renderedImage}
      className="hero"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
        minHeight: 'clamp(34vh, 60vw, 45vh)',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
        color: 'var(--white)',
        paddingBottom: 'clamp(2rem, 60vw, 6rem)',
      }}
    >
      <div className="content-container">
        <h1>{heading || name}</h1>
      </div>
    </BackgroundImage>
  )
}

BannerImage.propTypes = {
  data: PropTypes.object,
  classname: PropTypes.string,
}

export default BannerImage
