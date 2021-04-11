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
        <h2>OHAI Friends</h2>
        <p>
          Look ma, I finanaly put up a web page! I am a Philly area based web
          developer / architect who mainly resides on the front end of things.
          There's an about me I'm SURE to update some year, but for now I
          currently work at Comcast on the B2B ecomm site as well as keeping
          busy with several side projects.
        </p>
        <p>Contact form to follow.</p>
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
    blogs: allSanityBlog(limit: 3, sort: { fields: _createdAt, order: DESC }) {
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
