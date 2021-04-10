import path from 'path'

const turnPostsToPages = async ({ graphql, actions }) => {
  const PostTemplate = path.resolve('./src/templates/BlogTemplate.jsx')
  const { data } = await graphql(`
    query {
      posts: allSanityBlog {
        nodes {
          id
          name
          slug {
            current
          }
        }
      }
    }
  `)
  data.posts.nodes.forEach(post => {
    actions.createPage({
      path: `blog/${post.slug.current}`,
      component: PostTemplate,
      context: {
        slug: post.slug.current,
      },
    })
  })
}

const turnTagsToPages = async ({ graphql, actions }) => {
  const tagTemplate = path.resolve('./src/pages/blog.jsx')
  const { data } = await graphql(`
    query {
      tags: allSanityBlogtags {
        nodes {
          name
        }
      }
    }
  `)
  data.tags.nodes.forEach(tag => {
    actions.createPage({
      path: `blog/${tag.name}`,
      component: tagTemplate,
      context: {
        tag: tag.name,
      },
    })
  })
}

export const createPages = async params => {
  await Promise.all([turnPostsToPages(params), turnTagsToPages(params)])
}
