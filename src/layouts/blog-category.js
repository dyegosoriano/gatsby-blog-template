import React from "react"
import kebabCase from "lodash.kebabcase"
import styled from "styled-components"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Pagination from "../components/pagination"
import renderList from "../components/renderList"

const BlogCategory = ({ data, pageContext }) => {
  const { allMarkdownRemark } = data
  const { currentPage, numPages, category, allCategories } = pageContext

  return (
    <Layout>
      <Seo title={category} />
      <div className="container">
        <Title>Categorias:</Title>

        <AllTags>
          {allCategories.map(cat => (
            <Tag to={`/blog/category/${kebabCase(cat)}`}>{cat}</Tag>
          ))}
        </AllTags>

        {allMarkdownRemark.edges.map(renderList)}

        <Pagination
          currentPage={currentPage}
          numPages={numPages}
          contextPage={`category/${kebabCase(category)}`}
        />
      </div>
    </Layout>
  )
}

export default BlogCategory

export const query = graphql`
  query blogPostsListByCategory($category: String, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$category] } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            author
            category
            image {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`

const Title = styled.h2`
  font-size: 42px;
  text-align: center;
`
const AllTags = styled.div`
  margin: 50px 0;
`
const Tag = styled(Link)`
  background: #000;
  color: #fff;
  padding: 2px 5px;
  margin: 0px 5px;
  border-radius: 3px;
  &:hover {
    color: #fff;
    background: #919191;
  }
`
