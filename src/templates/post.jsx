import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import {Link} from "gatsby";
import Layout from "../components/layout";


export const data = graphql`
    query ($title: String!) {
        mdx(frontmatter: {title: {eq: $title}}) {
            frontmatter {
                title
                Author
                Topic
            }
            body
        }
    }
  
`;

const PostTemplate = ({ data: { mdx } }) => {
    return (
        <Layout>
            <Link to = "/">&larr; Go Home</Link>
            <h1>{mdx.frontmatter.title}</h1>
            <p>{`Written by ${mdx.frontmatter.Author}`}</p>
            <p>{mdx.frontmatter.Topic}</p>
            <MDXRenderer>
                {mdx.body}
            </MDXRenderer>
        </Layout>
    );
}

export default PostTemplate;