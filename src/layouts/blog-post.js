import React from "react"
import kebabCase from "lodash.kebabcase"
import styled from "styled-components"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ConcatWords from "../utils/ConcatWords"
import formatDate from "../utils/formatDate"

const BlogPost = ({ data, pageContext }) => {
  const { markdownRemark } = data
  const { prev, next } = pageContext
  const imageSource = markdownRemark.frontmatter.image.childImageSharp.fluid.src

  return (
    <Layout>
      <Seo title={markdownRemark.frontmatter.title} />
      <div className="container">
        <BoxCenter>
          {markdownRemark.frontmatter.category.map((cat, index, arr) => (
            <ConcatWords arrCount={arr.length} index={index} key={cat}>
              <Tag to={`/blog/category/${kebabCase(cat)}`}>{cat}</Tag>
            </ConcatWords>
          ))}
        </BoxCenter>

        <Title>{markdownRemark.frontmatter.title}</Title>

        <BoxCenter>
          <Author>
            autor{" "}
            <Link
              to={`/blog/author/${kebabCase(
                markdownRemark.frontmatter.author
              )}`}
            >
              {markdownRemark.frontmatter.author}
            </Link>
          </Author>
          <Time>{formatDate(markdownRemark.frontmatter.date)}</Time>
        </BoxCenter>

        <Banner src={imageSource} alt={markdownRemark.frontmatter.title} />

        <Text dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />

        <BoxSpaceAround>
          {prev && (
            <Link to={prev.node.fields.slug}>
              <div>
                {" "}
                {"<"} {prev.node.frontmatter.title}
              </div>
            </Link>
          )}

          {next && (
            <Link to={next.node.fields.slug}>
              <div>
                {" "}
                {next.node.frontmatter.title} {">"}
              </div>
            </Link>
          )}
        </BoxSpaceAround>
      </div>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
        category
        image {
          childImageSharp {
            fluid(maxHeight: 600, maxWidth: 960) {
              src
            }
          }
        }
      }
    }
  }
`

const Tag = styled(Link)`
  background: #000;
  color: #fff;
  padding: 2px 5px;
  margin: 0px 5px;
  &:hover {
    color: #fff;
    background: #919191;
  }
`

const Title = styled.h1`
  font-size: 44px;
  text-align: center;
`

const Author = styled.span`
  widows: 100%;
  color: #919191;
`

const Time = styled.time`
  margin-left: 20px;
  color: #919191;
`

const Banner = styled.img`
  margin: 50px 0;
`

const Text = styled.div`
  margin-bottom: 50px;
  h2 {
    margin-bottom: 30px;
  }
  p {
    text-align: justify;
    line-height: 1.9rem;
    margin-bottom: 25px;
    &:first-of-type::first-letter {
      float: left;
      font-size: 4rem;
      line-height: 2.5rem;
      padding: 10px 10px 0px 0px;
    }
  }
`

const BoxCenter = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
`

const BoxSpaceAround = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
`
