import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import * as blogStyle from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost (
       sort: {
        fields: publishedDate,
        order:DESC
      }
    ){
      edges{
        node{
          title
          slug
          publishedDate(formatString:"MMMM Do, yyyy")
        }
      }
    }
  }
    `)
    return (
        <Layout>
        <Head title="Blog" />
        <h1>Blog</h1>
        <ol className={blogStyle.posts}>
          {data.allContentfulBlogPost.edges.map((edge) => {
            return (
              <li className={blogStyle.post}>

                <Link to={`/blog/${edge.node.slug}`} className={blogStyle.title}>
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

