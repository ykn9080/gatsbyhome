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
            <h2>I'm baby coloring book poke taxidermy</h2>
            <p>
              Taxidermy forage glossier letterpress heirloom before they sold
              out you probably haven't heard of them banh mi biodiesel chia.
            </p>
            <p>
              Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
              retro.
            </p>
          </article>
        </section>
        <AllWorks />
      </main>
    </Layout>
  )
}

export default Works
