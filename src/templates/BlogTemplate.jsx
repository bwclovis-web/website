import React from 'react'
import PropTypes from 'prop-types'
import BlockContent from '@sanity/block-content-to-react'
import { graphql, Link } from 'gatsby'
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

  .controls {
    display: flex;
    margin-top: clamp(3.4rem, 3vw, 6.4rem);
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    @media (min-width: 900px) {
      flex-direction: row;
    }
  }

  ul {
    padding: 0 0 1rem;
    list-style: square inside;

    li {
      padding-top: 1rem;
    }
  }

  h3 {
    margin-top: 4.6rem;
  }

  h3 + p {
    margin-top: 0.6rem;
  }

  .back-link {
    font-size: clamp(1.6rem, 3vw, 2rem);
    font-weight: 700;
    color: var(--purple);
    text-transform: uppercase;
    letter-spacing: 0.22rem;
    border-bottom: 2px solid transparent;
    margin-top: 2rem;

    &:hover,
    &:focus {
      color: var(--violet);
      border-bottom: 2px solid var(--violet);
    }

    @media (min-width: 900px) {
      margin-top: 0;
    }
  }
`

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case 'h1':
          return <h1>{props.children}</h1>
        case 'h2':
          return <h2>{props.children}</h2>
        case 'h3':
          return <h3>{props.children}</h3>

        default:
          return <p>{props.children}</p>
      }
    },
    // eslint-disable-next-line react/display-name
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
        <div className="controls">
          <BlogTagList data={post.tags} />
          <Link to="/blog/" className="back-link">
            Back to blogs
          </Link>
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
