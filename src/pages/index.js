import React from "react"
import { Link } from "gatsby"
import "./style/index.scss"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Button from "../components/Button/Button"
import Cube from "../components/Cube/Cube"
import SEO from "../components/seo"
import Img from "gatsby-image"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <div className="index-page">
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
                зовнішнього середовища організації і поддержівть розвиток
                бізнесу.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="partners">
        <div className="partners__title">Партнери</div>
        <div className="partners__list">
          <a
            href="https://www.microsoft.com/uk-ua/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              fluid={props.data.microsoft.childImageSharp.fluid}
              className="partner"
            ></Img>
          </a>
          <a
            href="https://elitamoda.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              fluid={props.data.elita.childImageSharp.fluid}
              className="partner"
            ></Img>
          </a>
          <a
            href="https://frontback.org/services/landing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              fluid={props.data.front.childImageSharp.fluid}
              className="partner"
            ></Img>
          </a>
          <a
            href="https://gigacloud.ua/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              fluid={props.data.giga.childImageSharp.fluid}
              className="partner"
            ></Img>
          </a>
          <a
            href="https://www.mhp.com.ua/ru/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              fluid={props.data.mhp.childImageSharp.fluid}
              className="partner"
            ></Img>
          </a>
          <a
            href="https://www.mhp.com.ua/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              fluid={props.data.np.childImageSharp.fluid}
              className="partner"
            ></Img>
          </a>
          <a
            href="https://rearden.group/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              fluid={props.data.rearden.childImageSharp.fluid}
              className="partner"
            ></Img>
          </a>
          <a
            href="https://svitagro.com.ua/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              fluid={props.data.sa.childImageSharp.fluid}
              className="partner"
            ></Img>
          </a>
          <a
            href="https://tucha.ua/ru"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              fluid={props.data.tucha.childImageSharp.fluid}
              className="partner"
            ></Img>
          </a>
          <a
            href="https://stv.group/ru/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              fluid={props.data.stv.childImageSharp.fluid}
              className="partner"
            ></Img>
          </a>
          <a
            href="https://www.ukrcard.com.ua/ru/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              fluid={props.data.ukrcard.childImageSharp.fluid}
              className="partner"
            ></Img>
          </a>
        </div>
      </section>
    </div>
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
    elita: file(relativePath: { eq: "partners/elita_shop.png" }) {
      ...fluidImage
    }
    front: file(relativePath: { eq: "partners/front.png" }) {
      ...fluidImage
    }
    giga: file(relativePath: { eq: "partners/giga.png" }) {
      ...fluidImage
    }
    mhp: file(relativePath: { eq: "partners/mhp.png" }) {
      ...fluidImage
    }
    microsoft: file(relativePath: { eq: "partners/microsoft.png" }) {
      ...fluidImage
    }
    np: file(relativePath: { eq: "partners/np.png" }) {
      ...fluidImage
    }
    rearden: file(relativePath: { eq: "partners/rearden.png" }) {
      ...fluidImage
    }
    sa: file(relativePath: { eq: "partners/sa.png" }) {
      ...fluidImage
    }
    stv: file(relativePath: { eq: "partners/stv.png" }) {
      ...fluidImage
    }
    tucha: file(relativePath: { eq: "partners/tucha.png" }) {
      ...fluidImage
    }
    ukrcard: file(relativePath: { eq: "partners/ukrcard.png" }) {
      ...fluidImage
    }
  }
`

export default IndexPage
