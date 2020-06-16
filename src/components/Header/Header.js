import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import "./Header.scss"
import Subnav from "./Subnav/Subnav"
import classnames from "classnames"
import Logo from "../../assets/apelvil-text-black.svg"
import OpenMenu from "../../assets/open-menu.svg"
import CloseMenu from "../../assets/close-menu.svg"
import { toggleMenu } from "../../state/app"
import { connect } from "react-redux"

function Header({ isMenuOpened, dispatch }) {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <Logo />
        </div>

        <div
          className="header__menu-button"
          onClick={() => dispatch(toggleMenu(!isMenuOpened))}
        >
          {isMenuOpened ? <CloseMenu /> : <OpenMenu />}
        </div>

        <nav className="header__nav">
          <div className="nav__item">
            <Subnav
              mainLinkName="BAS"
              mainLinkAddress="bas"
              items={[
                { name: "BAS ERP", link: "bas-erp" },
                { name: "BAS УТ", link: "bas-ut" },
                { name: "BAS Бухгалтерія", link: "bas-accounting" },
                { name: "BAS КУП", link: "bas-kup" },
                { name: "BAS Документообіг", link: "bas-docs-flow" },
                { name: "BAS Роздріб", link: "bas-retail" },
              ]}
            />
          </div>
          <div className="nav__item">
            <div className="header__dropdown">
              <Subnav
                mainLinkName="1С:Підприємство"
                mainLinkAddress="1S-Enterprise"
                items={[
                  { name: "УТП", link: "utp" },
                  { name: "Бухгалтерія", link: "accounting" },
                  { name: "УНФ", link: "unf" },
                  { name: "ЗУП", link: "zup" },
                  { name: "УПП", link: "upp" },
                ]}
              />
            </div>
          </div>
          <div className="nav__item">
            <Link to="/paktum">Пактум</Link>
          </div>
          <div className="nav__item">
            <div className="header__dropdown">
              <Subnav
                mainLinkName="Послуги"
                mainLinkAddress="services"
                items={[
                  { name: "Service Desk", link: "service-desk" },
                  { name: "Консультування", link: "consulting" },
                  { name: "розробка", link: "development" },
                  { name: "інфраструктура", link: "infrastructure" },
                ]}
              />
            </div>
          </div>
          <div className="nav__item">
            <Link to="/blog">Блог</Link>
          </div>
          <div className="nav__item">
            <Link to="/blog">Вакансии</Link>
          </div>
          <div className="nav__item">
            <Link to="/blog">Контакты</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default connect(
  state => ({
    isMenuOpened: state.app.isMenuOpened,
  }),
  null
)(Header)
