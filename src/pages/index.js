import React from "react"
import { Link } from "gatsby"
import PostPreview from "../components/PostPreview";
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby";



const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMdx {
        nodes {
          frontmatter {
            Author
            Topic
            title
          }
        }
      }
    }
  `);
  const posts = data.allMdx.nodes;
  console.log(posts);
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Welcome to my Blog</h1>
      <p>I welcome you</p>
      <p>Welcome once again! <span role="img">😉</span></p>
      <Link to="/page-2">Go to page 2</Link>
      
      {posts.map(
        (post) => <PostPreview
               title = {post.frontmatter.title}
               author = {post.frontmatter.Author}
               topic = {post.frontmatter.Topic}/>
      )}
    </Layout>
  )
}

export default IndexPage
