import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

export default function Blog() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishDate(fromNow: true, formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)
  return (
    <div>
      <p>Blog page</p>
      <ul>
        {data.allContentfulBlogPost.edges.map((edge, index) => {
          return (
            <li key={index.toString()}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2 style={{ color: "tomato" }}>{edge.node.title}</h2>
              </Link>
              <p style={{ fontSize: 12 }}>{edge.node.date}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
