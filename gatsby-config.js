module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
      'gatsby-plugin-react-helmet',
      {
        resolve: 'gatsby-transformer-remark',
        options: {
          plugins: ["gatsby-remark-autolink-headers"]
        }
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/pages/documents`,
          name: "markdown-pages",
        },
      }
]
};
