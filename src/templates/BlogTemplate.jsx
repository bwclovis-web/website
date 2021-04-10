import React from 'react'
import PropTypes from 'prop-types'
import BlockContent from '@sanity/block-content-to-react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import BannerImage from '../components/Banner/Banner'
import BlogTagList from '../components/BlogTagList/BlogTagList'
import SEO from '../components/seo'

const BlogPostStyles = styled.article`
  img {
    max-width: 60vw;
    margin: 3rem auto;
    display: block;
    border-radius: var(--radius);
    border: 1px solid var(--green);
  }
`

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case 'h1':
          return <h1>{props.children}</h1>

        default:
          return <p>{props.children}</p>
      }
    },
    bodyImage: ({ node }) => (
      <img src={node.asset.url} alt={node.alt ? node.alt : '#'} />
    ),
  },
}

const SingleBlogTemplate = ({ data }) => {
  const { post } = data

  return (
    <section>
      <SEO title={post.name} image={post.image.asset.fluid.src} />
      <BannerImage data={post} classname="banner-left" />
      <BlogPostStyles className="content-container">
        <BlockContent blocks={post._rawContent} serializers={serializers} />
        <div style={{ marginTop: '3.4rem' }}>
          <BlogTagList data={post.tags} />
        </div>
      </BlogPostStyles>
    </section>
  )
}

SingleBlogTemplate.propTypes = {
  data: PropTypes.object,
}

export default SingleBlogTemplate

export const query = graphql`
  query($slug: String!) {
    post: sanityBlog(slug: { current: { eq: $slug } }) {
      name
      tags {
        name
      }
      _rawContent(resolveReferences: { maxDepth: 10 })
      content {
        _type
        style
        children {
          _key
          _type
          text
        }
      }
      image {
        asset {
          fluid(maxWidth: 500, maxHeight: 300) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`
