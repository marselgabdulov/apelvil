import React from "react"
import { Link } from "gatsby"
import "./style/index.scss"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Button from "../components/Button/Button"
import Cube from "../components/Cube/Cube"
import SEO from "../components/seo"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <section className="intro">
      <div className="intro__text">
        <h1 className="intro__slogan">APELVIL - Ваш IT відділ</h1>
        <div className="intro__description">
          Розробляємо, впроваджуємо і підтримуємо продукти 1С:Підприємство та
          BAS ERP.
        </div>
        <div className="intro__button">
          <Button buttonTitle={"презентація pdf"} />
        </div>
        <div className="intro__image">
          <Cube />
        </div>
        <div className="intro__advantages">
          <div className="intro__advantage">
            <div className="advantage__title">Полегшуємо роботу</div>
            <p className="advantage__body">
              Ми допоможемо вам зосередитися на вирішенні завдань бізнесу, не
              відволікаючись на рішення IT проблем.
            </p>
          </div>
          <div className="intro__advantage">
            <div className="advantage__title">Підвищуємо ефективність</div>
            <p className="advantage__body">
              Ваша система "1С: Підприємство" буде підвищувати ефективність
              управління компанією, а не стягувати на себе ресурси.
            </p>
          </div>
          <div className="intro__advantage">
            <div className="advantage__title">Сприяємо зростанню</div>
            <p className="advantage__body">
              Ваша IT інфраструктура буде адаптуватися до змін внутрішнього і
              зовнішнього середовища організації і поддержівть розвиток бізнесу.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 2400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    server: file(relativePath: { eq: "server.jpg" }) {
      ...fluidImage
    }
  }
`

export default IndexPage
