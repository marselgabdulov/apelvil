import React from "react"
import { Link } from "gatsby"
import "./Menu.scss"
import classnames from "classnames"
import { connect } from "react-redux"

function Menu({ isMenuOpened }) {
  return (
    <div
      className={classnames("menu", {
        "menu--closed": !isMenuOpened,
      })}
    >
      <div className="menu__sections">
        <div className="menu__section">
          <h3 className="menu__section--title">Про компанію</h3>
          <div className="menu__section--list">
            <Link to="/" className="menu__link">
              Чому ми?
            </Link>
            <Link to="/" className="menu__link">
              Блог
            </Link>
            <Link to="/" className="menu__link">
              Вакансии
            </Link>
          </div>
        </div>

        <div className="menu__section">
          <h3 className="menu__section--title">Контакти</h3>
          <div className="menu__section--list">
            <Link to="/" className="menu__link">
              Всі контакти
            </Link>
            <a href="tel:+380506138217" className="menu__link">
              +38 050 613 82 17
            </a>
            <a href="tel:+380999002033" className="menu__link">
              +38 099 900 20 33
            </a>
            <a href="mailto:sales@apelvil.com" className="menu__link">
              sales@apelvil.com
            </a>
          </div>
        </div>

        <div className="menu__section">
          <h3 className="menu__section--title">BAS</h3>
          <div className="menu__section--list">
            <Link to="/" className="menu__link">
              BAS ERP
            </Link>
            <Link to="/" className="menu__link">
              BAS УТ
            </Link>
            <Link to="/" className="menu__link">
              BAS Бухгалтерія
            </Link>
            <Link to="/" className="menu__link">
              BAS КУП
            </Link>
            <Link to="/" className="menu__link">
              BAS Документообіг КОРП
            </Link>
            <Link to="/" className="menu__link">
              BAS Роздріб
            </Link>
          </div>
        </div>

        <div className="menu__section">
          <h3 className="menu__section--title">1С:Підприємство</h3>
          <div className="menu__section--list">
            <Link to="/" className="menu__link">
              УТП
            </Link>
            <Link to="/" className="menu__link">
              Бухгалтерія
            </Link>
            <Link to="/" className="menu__link">
              УНФ
            </Link>
            <Link to="/" className="menu__link">
              ЗУП
            </Link>
            <Link to="/" className="menu__link">
              УПП
            </Link>
          </div>
        </div>

        <div className="menu__section">
          <h3 className="menu__section--title">Послуги</h3>
          <div className="menu__section--list">
            <Link to="/" className="menu__link">
              SERVICE DESK
            </Link>
            <Link to="/" className="menu__link">
              Консультування
            </Link>
            <Link to="/" className="menu__link">
              Розробка
            </Link>
            <Link to="/" className="menu__link">
              Iнфраструктура
            </Link>
          </div>
        </div>

        <div className="menu__section">
          <h3 className="menu__section--title">Пактум</h3>
          <div className="menu__section--list">
            <Link to="/" className="menu__link">
              Докладніше
            </Link>
          </div>
        </div>

        <div className="menu__section">
          <div className="menu__author">
            Розроблено{" "}
            <a
              href="https://marsdev.ru/"
              target="_blank"
              rel="noopener norefer"
            >
              MG
            </a>
          </div>
          <div className="menu__copy">
            2016-{new Date().getFullYear()} © Apelvil
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(
  state => ({
    isMenuOpened: state.app.isMenuOpened,
  }),
  null
)(Menu)
