module.exports = {
  pathPrefix: `cv`,
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ben Naylor CV`,
        short_name: `BenCV`,
        start_url: `/`,
        background_color: ``,
        theme_color: ``,
        display: `standalone`,
        icon: `static/favicon.png`,
        include_favicon: true
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/data/`,
      },
    },
  ],
}
