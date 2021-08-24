import React from "react"
import TagsList from "./TagsList"
import RecipesList from "./RecipesList"
import InterestList from "./InterestList"
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

const AllRecipes = () => {
  const data = useStaticQuery(query)
  console.log(data)
  const recipes = data.allContentfulRecipe.nodes
  const interests = data.allContentfulInterest.nodes
  return (
    <section className="recipes-container">
      <TagsList recipes={recipes} />
      {/* <RecipesList recipes={recipes} /> */}
      <InterestList interests={interests} />
    </section>
  )
}

export default AllRecipes
