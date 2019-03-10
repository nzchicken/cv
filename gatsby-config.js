module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ben Naylor CV`,
        short_name: `BenCV`,
        start_url: `/`,
        background_color: `#d9e2e1`,
        theme_color: `#d9e2e1`,
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
