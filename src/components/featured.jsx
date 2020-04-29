import React from "react"
import kebabCase from "lodash.kebabcase"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"

import ConcatWords from "../utils/ConcatWords"
import formatDate from "../utils/formatDate"

const BlogFeatured = () => {
  const { markdownRemark } = useStaticQuery(query)
  const imageSource = markdownRemark.frontmatter.image.childImageSharp.fluid.src

  return (
    <Features>
      <Link to={markdownRemark.fields.slug}>
        <Title>{markdownRemark.frontmatter.title}</Title>
      </Link>

      <BoxCenter>
        <Author>
          autor{" "}
          <Link
            to={`/blog/author/${kebabCase(markdownRemark.frontmatter.author)}`}
          >
            {markdownRemark.frontmatter.author}
          </Link>
        </Author>

        <Time>{formatDate(markdownRemark.frontmatter.date)}</Time>
      </BoxCenter>

      <Link to={markdownRemark.fields.slug}>
        <Banner src={imageSource} alt={markdownRemark.frontmatter.title} />
      </Link>

      <BoxCenter>
        <Span>Tags:</Span>
        {markdownRemark.frontmatter.category.map((cat, index, arr) => (
          <ConcatWords arrCount={arr.length} index={index} key={cat}>
            <Tag to={`/blog/category/${kebabCase(cat)}`}>{cat}</Tag>
          </ConcatWords>
        ))}
      </BoxCenter>
    </Features>
  )
}

export default BlogFeatured

const query = graphql`
  query BlogFeatured {
    markdownRemark(frontmatter: { featured: { eq: true } }) {
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
            fluid(maxHeight: 400, maxWidth: 960) {
              src
            }
          }
        }
        date(formatString: "DD MM YYYY")
      }
    }
  }
`

const Features = styled.article`
  margin-top: 50px;
  margin-bottom: 150px;
`
const Title = styled.h1`
  font-weight:bold;
  font-size:3rem;
  text-align:center;
`
const Banner = styled.img`
  width: 100%;
`
const BoxCenter = styled.div`
  display: flex;
  margin-bottom:25px;
  justify-content: center;
`
const Author = styled.h2`
  font-size: 1rem;
  color: #919191;
`
const Time = styled.time`
  font-size: 1rem;
  margin-left: 20px;
  color: #919191;
`
const Span = styled.samp`
  font-size:1rem;
  font-weight:900;
`
const Tag = styled(Link)`
  font-size:1rem;
  background: #000;
  color: #fff;
  border-radius:3px;
  padding: 2px 5px;
  margin: 0px 5px;
  &:hover {
    color: #fff;
    background: #919191;
  }
`