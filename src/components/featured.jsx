import React from "react"
import kebabCase from "lodash.kebabcase"
import { graphql, Link, useStaticQuery } from "gatsby"

import ConcatWords from "../utils/ConcatWords"
import formatDate from "../utils/formatDate"

const BlogFeatured = () => {
  const { markdownRemark } = useStaticQuery(query)
  const imageSource = markdownRemark.frontmatter.image.childImageSharp.fluid.src

  return (
    <>
      <div>
        <Link to={markdownRemark.fields.slug}>
          <img src={imageSource} alt={markdownRemark.frontmatter.title} />
        </Link>
      </div>

      <div>
        <p>
          By{" "}
          <Link
            to={`/blog/author/${kebabCase(markdownRemark.frontmatter.author)}`}
          >
            {markdownRemark.frontmatter.author}
          </Link>
        </p>

        <Link to={markdownRemark.fields.slug}>
          <h2>{markdownRemark.frontmatter.title}</h2>
        </Link>

        <p>{formatDate(markdownRemark.frontmatter.date)}</p>

        <p>
          {markdownRemark.frontmatter.category.map((cat, index, arr) => (
            <ConcatWords arrCount={arr.length} index={index} key={cat}>
              <Link to={`/blog/category/${kebabCase(cat)}`}>{cat}</Link>
            </ConcatWords>
          ))}
        </p>
      </div>
    </>
  )
}

export default BlogFeatured

const query = graphql`
  query BlogFeatured {
    markdownRemark(frontmatter: {featured: {eq: true}}) {
    html
    fields {
      slug
    }
    frontmatter {
      title
      author
      category
      image {
        childImageSharp {
          fluid {
            src
          }
        }
      }
      date(formatString: "DD MM YYYY")
    }
  }
  }
`
