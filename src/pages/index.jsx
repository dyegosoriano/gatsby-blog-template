import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />

      <div className="container">
        <h1>Inovação em saúde e bem estar</h1>

        <p>
          Atendimento especializado nos segmentos de ESTÉTICA FACIAL E CORPORAL,
          MASSOTERAPIA, PSICANÁLISE, NUTRIÇÃO, FISIOTERAPIA e PALMILHAS
          ORTOPÉDICAS.
        </p>

        <h3>Agende seu horário</h3>
        <a href="tel:(61) 4103-5657">(61) 4103-5657</a>
        <a href="tel:(61) 9 9573-2090">(61) 9 9573-2090</a>
      </div>
    </Layout>
  )
}
