import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Menu from "./Menu/Menu"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import "./layout.scss"

const Layout = ({ children }) => {
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
    <div className="layout">
      <div className="turn">
        <span>Будь ласка, переверніть</span>
      </div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Menu />
      <main className="main">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
