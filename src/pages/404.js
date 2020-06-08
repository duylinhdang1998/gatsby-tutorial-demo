import React from "react"
import { Link } from "gatsby"

export default function NotFound() {
  return (
    <div>
      <h2>Page not found</h2>
      <p>
        <Link to="/">Comeback to home</Link>
      </p>
    </div>
  )
}
