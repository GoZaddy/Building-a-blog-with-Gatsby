import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to my Blog</h1>
    <p>I welcome you</p>
    <p>Welcome once again!😉</p>
    <Link to = "/page-2">Go to page 2</Link>
    
  </Layout>
)

export default IndexPage
