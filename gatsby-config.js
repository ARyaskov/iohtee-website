module.exports = {
  pathPrefix: '__GATSBY_IPFS_PATH_PREFIX__',
  siteMetadata: {
    title: 'Machinomy – micropayments on Ethereum',
    links: {
      twitter: 'https://twitter.com/machinomy',
      gitter: 'https://',
      github: 'https://github.com/ARyaskov/iohtee',
      medium: 'https://medium.com/machinomy'
    }
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-emotion',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/api`,
      },
    },
    {
      resolve: "gatsby-plugin-svgr-loader",
      options: {
        rule: {
          include: "/src/pages/indexPage/"
        }
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": `${__dirname}/icons/android-chrome-512x512.png`
      }
    },
  ]
}
