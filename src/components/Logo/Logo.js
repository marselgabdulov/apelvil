import React from "react"
import { Link } from "gatsby"
import "./Logo.scss"
import LogoImage from "../../assets/apelvil-origin.svg"

function Logo() {
  return (
    <div className="logo">
      <Link to="/" className="logo__link" title="Головна">
        <LogoImage />
      </Link>
    </div>
  )
}

export default Logo
