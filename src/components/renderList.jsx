import React from "react"
import kebabCase from "lodash.kebabcase"
import { Link } from "gatsby"

import ConcatWords from "../utils/ConcatWords"
import formatDate from "../utils/formatDate"

const renderList = ({ node }) => {
  const imageSource = node.frontmatter.image.childImageSharp.fluid.src

  return (
    <article>
      <div>
        <Link to={node.fields.slug}>
          <img src={imageSource} alt={node.frontmatter.title} />
        </Link>
      </div>

      <p>
        By{" "}
        <Link to={`/blog/author/${kebabCase(node.frontmatter.author)}`}>
          {node.frontmatter.author}
        </Link>
      </p>

      <Link to={node.fields.slug}>
        <h2>{node.frontmatter.title}</h2>
      </Link>

      <p>{formatDate(node.frontmatter.date)}</p>

      <p>
        {node.frontmatter.category.map((cat, index, arr) => (
          <ConcatWords arrCount={arr.length} index={index} key={cat}>
            <Link to={`/blog/category/${kebabCase(cat)}`}>{cat}</Link>
          </ConcatWords>
        ))}
      </p>
    </article>
  )
}

export default renderList
