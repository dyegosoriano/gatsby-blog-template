import React from "react"
import styled, { createGlobalStyle } from "styled-components"

import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <GlobalStyle />
    <Container>
      <SEO title="404: Not found" />
      <h1>404</h1>
      <h2>NOT FOUND</h2>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </>
)

const GlobalStyle = createGlobalStyle`
    *{
      margin:0;
      padding:0;
      font-family: 'Open Sans';
    body {
      color: #50fa7b;
      background: #282a36;
      }
    }
`

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 260px;
    font-weight: 300;
  }

  h2 {
    font-size: 74px;
    font-weight: 500;
  }

  p {
    font-size: 22px;
  }
`

export default NotFoundPage
