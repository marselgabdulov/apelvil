import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import "./Header.scss"
import classnames from "classnames"
import Logo from "../../assets/apelvil-origin.svg"

function Header() {
  const [changed, setChanged] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [])

  function handleScroll() {
    const isChanged = window.pageYOffset > 0
    setChanged(isChanged)
  }

  return (
    <header
      className={classnames("header", {
        "header--changed": changed,
      })}
    >
      <div className="header__logo">
        <Link to="/" className="header__logo--link">
          <Logo />
        </Link>
      </div>
      <nav
        className={classnames("nav", {
          "nav--changed": changed,
        })}
      >
        <div className="nav__item">
          <span>BAS</span>
        </div>
        <div className="nav__item">
          <span>1С:Підприємство</span>
        </div>
        <div className="nav__item">Пактум</div>
        <div className="nav__item">Послуги</div>
        <div className="nav__item">Про нас</div>
        <div className="nav__item">Контакты</div>
      </nav>
      <div className="header__menu-button">
        <span>меню</span>
        <div className="circle"></div>
      </div>
    </header>
  )
}

export default Header
