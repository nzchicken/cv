module.exports = {
    siteMetadata: {
        title: `Ben Naylor - CV`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
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
