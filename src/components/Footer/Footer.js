import React from "react"
import "./Footer.scss"
import { Link } from "gatsby"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__menu">
          <div className="footer__section">
            <div className="section__title">BAS</div>
            <Link className="footer__link" to="/bas-erp">
              BAS ERP
            </Link>
            <Link className="footer__link" to="/bas-ut">
              BAS УТ
            </Link>
            <Link className="footer__link" to="/bas-accounting">
              BAS Бухгалтерія
            </Link>
            <Link className="footer__link" to="/bas-kup">
              BAS КУП
            </Link>
            <Link className="footer__link" to="/bas-docs-flow">
              BAS Документообіг
            </Link>
            <Link className="footer__link" to="/bas-retail">
              BAS Роздріб
            </Link>
          </div>
          <div className="footer__section">
            <div className="section__title">1С:Підприємство</div>
            <Link className="footer__link" to="/utp">
              УТП
            </Link>
            <Link className="footer__link" to="/accounting">
              Бухгалтерія
            </Link>
            <Link className="footer__link" to="/unf">
              УНФ
            </Link>
            <Link className="footer__link" to="/zup">
              ЗУП
            </Link>
            <Link className="footer__link" to="/upp">
              УПП
            </Link>
          </div>
          <div className="footer__section">
            <div className="section__title">Пактум</div>
            <Link to="/paktum" className="footer__link">
              Докладніше
            </Link>
          </div>
          <div className="footer__section">
            <div className="section__title">Послуги</div>
            <Link className="footer__link" to="/service-desk">
              Service Desk
            </Link>
            <Link className="footer__link" to="/consulting">
              Консультування
            </Link>
            <Link className="footer__link" to="/development">
              Розробка
            </Link>
            <Link className="footer__link" to="/infrastructure">
              Iнфраструктура
            </Link>
          </div>
          <div className="footer__section">
            <div className="section__title">Про нас</div>
            <Link className="footer__link" to="/contacts">
              Контакти
            </Link>
            <Link className="footer__link" to="/jobs">
              Вакансії
            </Link>
            <Link className="footer__link" to="/blog">
              Блог
            </Link>
          </div>
        </div>
        <div className="footer__copy">
          {" "}
          2016-{new Date().getFullYear()} © Apelvil
        </div>
      </div>
    </footer>
  )
}

export default Footer
