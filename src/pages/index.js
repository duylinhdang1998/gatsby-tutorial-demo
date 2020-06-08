import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Head from "../components/Head"

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <div>
      <Head title={data.site.siteMetadata.title} />
      <h2 style={{ color: "red" }}>{data.site.siteMetadata.title}</h2>
      <h3>{data.site.siteMetadata.author}</h3>
      <Link to="/blog">Go to the blog</Link>
    </div>
  )
}
