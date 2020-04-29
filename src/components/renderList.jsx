import React from "react"
import kebabCase from "lodash.kebabcase"
import styled from "styled-components"
import { Link } from "gatsby"

import ConcatWords from "../utils/ConcatWords"
import formatDate from "../utils/formatDate"

const renderList = ({ node }) => {
  const imageSource = node.frontmatter.image.childImageSharp.fluid.src

  return (
    <Article>
      <Banner to={node.fields.slug}>
        <Image src={imageSource} alt={node.frontmatter.title} />
      </Banner>

      <BoxRight>
        <Link to={node.fields.slug}>
          <Title>{node.frontmatter.title}</Title>
        </Link>

        <BoxCenter>
          <Author>
            Autor{" "}
            <Link to={`/blog/author/${kebabCase(node.frontmatter.author)}`}>
              {node.frontmatter.author}
            </Link>
          </Author>

          <Time>{formatDate(node.frontmatter.date)}</Time>
        </BoxCenter>

        {node.frontmatter.category.map((cat, index, arr) => (
          <ConcatWords arrCount={arr.length} index={index} key={cat}>
            <Link to={`/blog/category/${kebabCase(cat)}`}>{cat}</Link>
          </ConcatWords>
        ))}
      </BoxRight>
    </Article>
  )
}

export default renderList

const Article = styled.article`
  display: grid;
  grid-template-columns: 400px 1fr;
  margin-bottom: 50px;
  width: 100%;
`
const Image = styled.img`
  width: 100%;
`
const Banner = styled(Link)`
  grid-column: 1;
`
const BoxRight = styled.div`
  grid-column: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  font-size: 44px;
  text-align: center;
`
const BoxCenter = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
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
