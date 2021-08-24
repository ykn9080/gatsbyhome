import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"
const InterestList = ({ interests = [] }) => {
  return (
    <div className="recipes-list">
      {interests.map(interest => {
        const { id, title, image } = interest
        const pathToImage = getImage(image)
        const slug = slugify(title, { lower: true })
        return (
          <Link key={id} to={`/${slug}`} className="recipe">
            <GatsbyImage
              image={pathToImage}
              className="recipe-img"
              alt={title}
            />
            <h5>{title}</h5>
          </Link>
        )
      })}
    </div>
  )
}

export default InterestList
