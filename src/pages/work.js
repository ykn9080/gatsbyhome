import React from "react"
import Layout from "../components/Layout"
import AllWorks from "../components/AllWorks"
import SEO from "../components/SEO"

const Works = () => {
  return (
    <Layout>
      <SEO title="Recipes" />
      <main className="page">
        <section className="work-page">
          <article>
            <h2>Project Output Collection</h2>
            <p>
              프로젝트 산출물을 isolate해서 모듈화한 것. npm module화하여 npm
              install할 수 있도록 만들거나 dockerize하여 docker-compose로
              사용할수 있도록 하였음.
            </p>
          </article>
        </section>
        <AllWorks />
      </main>
    </Layout>
  )
}

export default Works
