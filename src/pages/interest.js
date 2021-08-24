import React from "react"
import Layout from "../components/Layout"
import AllInterests from "../components/AllInterests"
import SEO from "../components/SEO"

const Interests = () => {
  return (
    <Layout>
      <SEO title="Interest Area" />
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
        <AllInterests />
      </main>
    </Layout>
  )
}

export default Interests
