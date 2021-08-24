import React, { useState } from "react"
import "../assets/css/antd.css"
import { Button } from "antd"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Code from "../components/Code"
import TagInterest from "../components/TagInterest"
import { makeStyles } from "@material-ui/core/styles"
import Dialog from "@material-ui/core/Dialog"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import Slide from "@material-ui/core/Slide"
import { AiOutlineClose } from "react-icons/ai"

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
    color: "white",
  },
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})
const InterestTemplate = ({ data }) => {
  const classes = useStyles()
  const {
    title,
    tag,
    type,
    path,
    image,
    description,
    code,
  } = data.contentfulInterest
  const pathToImage = getImage(image)
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  // const { tags, instructions, ingredients, tools } = content
  return (
    <>
      <Layout>
        <SEO title={title} />

        <main className="page">
          <div className="recipe-page">
            <div style={{ marginBottom: 10 }}>
              <TagInterest tagtitle={title} />
            </div>
            <section className="recipe-hero">
              <GatsbyImage
                image={pathToImage}
                alt={title}
                className="about-img"
              />
              <article>
                <h2>{title}</h2>
                {path && (
                  <Button type="primary" onClick={handleClickOpen}>
                    Show Demo
                  </Button>
                )}
                <p>{description?.raw}</p>
              </article>
            </section>
          </div>
          <div>{code && <Code text={code?.code} />}</div>
        </main>
      </Layout>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <AiOutlineClose />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Close
            </Button>
          </Toolbar>
        </AppBar>
        <iframe
          src={path}
          loading="lazy"
          width="100%"
          height="800px"
          frameBorder="0"
          scrolling="no"
          allowfullscreen
        ></iframe>
      </Dialog>
    </>
  )
}

export const query = graphql`
  query getSingleInterest($title: String) {
    contentfulInterest(title: { eq: $title }) {
      tag
      title
      type
      path
      id
      description {
        raw
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, height: 700)
      }
      code {
        code
      }
    }
  }
`

export default InterestTemplate
