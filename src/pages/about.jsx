import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import SEO from '../components/seo'
import BannerImage from '../components/Banner/Banner'

const AboutPage = ({ data }) => {
  const { page } = data
  return (
    <>
      <SEO title={page.name} image={page.image.asset.fluid.src} />
      <BannerImage data={page} />
      <div className="content-container">
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </div>
    </>
  )
}

export const query = graphql`
  query {
    page: sanityPages(name: { eq: "about" }) {
      name
      heading
      image {
        asset {
          fluid(maxWidth: 600) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`

AboutPage.propTypes = {}

export default AboutPage
