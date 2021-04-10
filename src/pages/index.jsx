import { graphql } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'
import BannerImage from '../components/Banner/Banner'

import RowContainer from '../components/RowContainer/RowContainer'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
  const { page, blogs } = data
  return (
    <>
      <SEO title={page.name} image={page.image.asset.fluid.src} />
      <BannerImage data={page} />
      <section className="content-container">
        <h2>Recent Ramblings:</h2>
        <RowContainer data={blogs} />
      </section>
    </>
  )
}

export const query = graphql`
  query {
    page: sanityPages(name: { eq: "home" }) {
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
    blogs: allSanityBlog(limit: 3) {
      nodes {
        id
        name
        description
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 300) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`

IndexPage.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.shape({
      name: PropTypes.string,
      heading: PropTypes.string,
      image: PropTypes.shape({
        asset: PropTypes.shape({
          fluid: PropTypes.shape({
            src: PropTypes.string,
          }),
        }),
      }),
    }),
    blogs: PropTypes.shape({
      nodes: PropTypes.array,
    }),
  }),
}

export default IndexPage
