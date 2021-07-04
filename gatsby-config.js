/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Simply Recipes",
    description: "Nice and clean recipes site",
    author: "@johnsmilga",
    person: { name: "john", age: 32 },
    simpleData: ["item 1", "item 2"],
    complexData: [
      { name: "john", age: 32 },
      { name: "susan", age: 21 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ro638qvvzbwj`,
        //spaceId: `1sfeg2xcbtuz`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        //accessToken: `1nbHjd66EXSx6nNgEdRPZzTYUbDlk_oQl9OsjlkeiWA`,
        accessToken: `CUni2uDaj1f3siz91npWlaWdpSTuBAejiZn5VGKIt28`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["400"],
            },
            {
              family: "Inconsolata",
              variants: ["400", "500", "600", "700"],
            },
          ],
        },
      },
    },
    // {
    //   resolve: "gatsby-source-strapi",
    //   options: {
    //     apiURL: "http://imcmaster.iptime.org:1337",
    //     collectionTypes: [
    //       // List of the Content Types you want to be able to request from Gatsby.
    //       "recipe",
    //     ],
    //     // loginData: {
    //     //   identifier: "yknam",
    //     //   password: "ykn9080",
    //     // },
    //     queryLimit: 1000,
    //   },
    // },
    `gatsby-plugin-react-helmet`,
  ],
}
