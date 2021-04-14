module.exports = {
  siteMetadata: {
    title: `Nicky Yim | Full Stack Developer`,
    description: `Nicky Yim is a full stack developer from Toronto.`,
    author: `Nicky Yim`,
    email: `nicky.yim@outlook.com`,
    github: `https://github.com/nicky-yim`,
    linkedin: `https://www.linkedin.com/in/nicky-yim`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nicky Yim | Full Stack Developer`,
        short_name: `NYIM`,
        start_url: `/`,
        background_color: `#1E1E1E`,
        theme_color: `#1E1E1E`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        stages: ['develop'],
        extensions: ['js', 'jsx'],
        exclude: ['node_modules', '.cache', 'public'],
        // Any eslint-webpack-plugin options below
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Poppins'],
        },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `mdx`,
        path: `${__dirname}/src/mdx/`,
      },
    },
    `gatsby-plugin-mdx`,
  ],
};
