import React from "react"
import TagInterest from "./TagInterest"
import RecipesList from "./RecipesList"
import ContentList from "./ContentList"
import { graphql, useStaticQuery } from "gatsby"
const query = graphql`
  {
    allContentfulInterest {
      nodes {
        id
        description {
          raw
        }
        tag
        title
        type
        path
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 400)
        }
        code {
          code
        }
      }
    }
    allContentfulRecipe {
      nodes {
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 400)
        }
        title
        servings
        prepTime
        id
        cookTime
        content {
          tags
        }
      }
    }
  }
`

const AllInterest = () => {
  const data = useStaticQuery(query)
  console.log(data)
  const recipes = data.allContentfulRecipe.nodes
  const interests = data.allContentfulInterest.nodes
  return (
    <section className="recipes-container">
      <TagInterest recipes={interests} />
      {/* <RecipesList recipes={recipes} /> */}
      <ContentList lists={interests} />
    </section>
  )
}

export default AllInterest
