import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`
const BlogDetail = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img src={url} alt={alt} />
      },
    },
  }
  return (
    <div>
      <h2>{props.data.contentfulBlogPost.title}</h2>
      <span>{props.data.contentfulBlogPost.publishDate}</span>
      {documentToReactComponents(
        props.data.contentfulBlogPost.body.json,
        options
      )}
    </div>
  )
}

export default BlogDetail
