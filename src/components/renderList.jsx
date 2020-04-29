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

        <BoxCenter>
          <Span>Tags:</Span>
          {node.frontmatter.category.map((cat, index, arr) => (
            <ConcatWords arrCount={arr.length} index={index} key={cat}>
              <Tag to={`/blog/category/${kebabCase(cat)}`}>{cat}</Tag>
            </ConcatWords>
          ))}
        </BoxCenter>
      </BoxRight>
    </Article>
  )
}

export default renderList

const Article = styled.article`
  display: grid;
  grid-template-columns: 400px 1fr;
  margin-bottom: 100px;
  width: 100%;
  height: 250px;
`
const Banner = styled(Link)`
  grid-column: 1;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
`
const BoxRight = styled.div`
  grid-column: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.h1`
  font-weight:bold;
  font-size: 2rem;
  text-align: center;
`
const BoxCenter = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom:40px;
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