import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import blogStyles from "./blogs.module.scss"
import Head from "../components/head"

const BlogPage = () => {
  // query (
  //   $slug: String!
  // ) {
  //   markdownRemark
  //   (fields: {
  //     slug: {
  //       eq:$slug
  //     }
  //   }
  //   ) {
  //     frontmatter
  //     {
  //       title
  //     }
  //   }
  // }
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(
        filter: { node_locale: { eq: "en-US" } }
        sort: { fields: publishedDate, order: DESC }
      ) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge, key) => {
          return (
            <li className={blogStyles.post} key={key}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
