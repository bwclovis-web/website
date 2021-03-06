import React from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import formatDate from '../utility/fotmatDate'
import SEO from '../components/seo'
import BannerImage from '../components/Banner/Banner'
import BlogTagList from '../components/BlogTagList/BlogTagList'

const BlogListStyles = styled.div`
  .blog-list_item {
    padding-bottom: 6rem;
    border-bottom: 0.6rem dotted var(--purple);

    @media (min-width: 900px) {
      display: grid;
      grid-template-columns: minmax(4rem, 20%) 1fr;
      gap: 3rem;
      align-items: flex-start;
    }

    & + .blog-list_item {
      margin-top: 6rem;
    }

    &:last-child {
      border-bottom: 0;
    }

    &-container {
      a {
        display: inline-flex;
        border-bottom: 4px solid var(--purple);
        margin-bottom: clamp(1rem, 3vw, 1.8rem);

        &:hover,
        &:focus {
          color: var(--purple);
          border-color: var(--green);
          transition: all 0.24s ease-in-out;
        }

        h2 {
          margin-bottom: 0;
        }
      }
    }
  }

  .blog-title {
    padding-bottom: 3rem;
    background-color: var(--violet);
    margin-top: 1rem;
    padding: 2rem 3rem;
    color: var(--ltblue);
  }

  .post-date {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 2rem;
    background-color: var(--violet);
    color: var(--white);
    align-items: center;
    justify-content: center;
    padding: clamp(2rem, 3vw, 1rem) 0;
    margin: 1.4rem 0 2rem;

    span {
      line-height: 1.2;
    }
  }
`

const BlogPage = ({ data, pageContext }) => {
  const { page, blogs } = data

  return (
    <>
      <SEO
        title={pageContext.tag || page.name}
        image={page.image.asset.fluid.src}
      />
      <BannerImage data={page} />
      <BlogListStyles className="content-container">
        {pageContext.tag && (
          <p className="blog-title h2">Posts on {pageContext.tag}</p>
        )}
        <ul>
          {blogs.nodes.map(blog => (
            <li key={blog.id} className="blog-list_item">
              {formatDate(blog._createdAt)}
              <div className="blog-list_item-container">
                <Link to={`/blog/${blog.slug.current}`}>
                  <h2>{blog.name}</h2>
                </Link>
                <p>{blog.description}</p>
              </div>
              <BlogTagList data={blog.tags} />
            </li>
          ))}
        </ul>
      </BlogListStyles>
    </>
  )
}

export const query = graphql`
  query BlogPageQuery($tag: [String]) {
    page: sanityPages(name: { eq: "blog" }) {
      name
      heading
      image {
        asset {
          fluid(maxWidth: 1200) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
    blogs: allSanityBlog(
      filter: { tags: { elemMatch: { name: { in: $tag } } } }
      sort: { fields: _createdAt, order: DESC }
    ) {
      nodes {
        name
        description
        id
        tags {
          name
        }
        _createdAt
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 1000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`

BlogPage.propTypes = {
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
  pageContext: PropTypes.shape({
    tag: PropTypes.string,
  }),
}

export default BlogPage
