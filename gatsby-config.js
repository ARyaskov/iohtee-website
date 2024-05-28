module.exports = {
  pathPrefix: '__GATSBY_IPFS_PATH_PREFIX__',
  siteMetadata: {
    title: 'Machinomy – micropayments on Ethereum',
    links: {
      twitter: 'https://twitter.com/machinomy',
      gitter: 'https://gitter.im/machinomy/machinomy',
      github: 'https://github.com/machinomy/machinomy',
      medium: 'https://medium.com/machinomy'
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-emotion',
    'gatsby-transformer-remark',
    'gatsby-plugin-ipfs',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`,
      },
    },
    {
      resolve: "gatsby-plugin-svgr-loader",
      options: {
        rule: {
          include: "/src/pages/indexPage/"
        }
      }
    }
  ]
}
