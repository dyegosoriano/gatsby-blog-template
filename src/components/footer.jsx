import React from "react"
import styled from "styled-components"

export default function Footer() {
  return (
    <Container>
      <Copyright>
        Copyright © {new Date().getFullYear()} - All Rights Reserved.
      </Copyright>
      <Developer>
        feito por{" "}
        <a href="https://github.com/dyegosoriano" target="blank">
          Dyego Soriano
        </a>{" "}
        com{" "}
        <a href="https://www.gatsbyjs.org/" target="blank">
          {" "}
          Gatsby
        </a>{" "}
      </Developer>
    </Container>
  )
}

const Container = styled.footer`
  text-align: center;
`

const Copyright = styled.p`
  font-size: 14px;
`

const Developer = styled.p`
  font-size: 12px;
`
