import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllInterests from "../components/AllInterests"
import SEO from "../components/SEO"

const Interests = () => {
  return (
    <Layout>
      <SEO title="Interest Area" />
      <main className="page">
        <section className="interest-page">
          <article>
            <h2>Web,Container,CI/CD,Reusable components</h2>
            <p>
              web개발분야는 빠르게 변화하고 있고, 새롭게 습득할 지식도
              기하급수적으로 늘어나는 것같다. 수많은 분야중 필수적인 기술을
              취사선택하는 것이 더욱 중요한 일이 되었다.
            </p>
            <p>
              나의 관심분야는 MERN stack과 관련된 CI/CD기술과 재사용가능한
              isolation기술로 아래와 같이 나열해 본다.
            </p>
          </article>
          <div style={{ paddingTop: 100 }} className="zoom">
            <StaticImage
              src="../assets/images/My_Skills.png"
              alt="My interest area and skill set "
              className="about-img"
              width={600}
              placeholder="blurred"
            />
          </div>
        </section>
        <AllInterests />
      </main>
    </Layout>
  )
}

export default Interests
