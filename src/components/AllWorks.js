import React from "react"
import TagsList from "./TagsList"
import ContentList from "./ContentList"
import { graphql, useStaticQuery } from "gatsby"
const query = graphql`
  {
    allContentfulWork {
      nodes {
        description {
          description
        }
        title
        type
        tag
        path
        image {
          gatsbyImageData(width: 400, placeholder: BLURRED, layout: CONSTRAINED)
        }
        id
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

const AllWorks = () => {
  const data = useStaticQuery(query)
  console.log(data)
  const recipes = data.allContentfulRecipe.nodes
  const works = data.allContentfulWork.nodes
  return (
    <section>
      <ContentList lists={works} />
    </section>
  )
}

export default AllWorks
