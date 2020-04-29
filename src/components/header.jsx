import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export default function Header() {
  return (
    <Container>
      <Menu>
        <Link to="/">Home</Link>
        <nav>
          <Link to="/blog">Blog</Link>
          <Link to="/servicos">Serviços</Link>
        </nav>
      </Menu>
    </Container>
  )
}

const Container = styled.section`
  max-width: 960px;
  margin: 0 auto;
`

const Menu = styled.header`
  height: 80px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    font-weight: 500;
    margin-left: 20px;
  }
`
