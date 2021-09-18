import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Skills from "../components/skills"
// import Promotion from "../components/Promotion"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Gabriel Gonzales | Full Stack Software Developer" />
    <Header></Header>
    <Work></Work>
    <About></About>
    <Skills></Skills>
    {/* <Promotion></Promotion> */}
    <Contact></Contact>
  </Layout>
)

export default IndexPage
