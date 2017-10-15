module.exports = {
    siteMetadata: {
        title: `Ben Naylor - CV`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-typography`,
            options: { pathToConfigModule: `src/utils/typography.js` }
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/data/`,
            },
        },
    ],
}
