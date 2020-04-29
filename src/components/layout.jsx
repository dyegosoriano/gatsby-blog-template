/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"

import Footer from "./footer"
import Header from "./header"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <Footer />
      </>
    )}
  />
)

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans';
    font-weight: 300;
    color: #212121;
    body {
      .container {
        max-width: 960px;
        margin: 0 auto;
      }
      a {
        transition-duration: 0.5s;
        text-decoration: none;
        &:hover {
          transition-duration: 0.5s;
          color: #791313;
        }
      }
    }
  }

  .container {
    max-width: 960px;
    margin: 0 auto;
  }
`

Layout.propTypes = { children: PropTypes.node.isRequired }

export default Layout
