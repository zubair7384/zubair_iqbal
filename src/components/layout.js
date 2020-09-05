/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Loader from "../components/loader"
import Menu from "./sideBar"
import Header from "./header"
import Footer from "./footer"
import "./layout.scss"

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    // setTimeout(() => {
    setLoading(false)
    // }, 3000)
  }, [])
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Menu />
          <Header />
          <div>
            <main>{children}</main>
          </div>
          <Footer />
        </div>
      )}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
