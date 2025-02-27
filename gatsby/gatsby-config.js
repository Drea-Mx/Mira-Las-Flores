const siteUrl = `https://miralasflores.mx`


module.exports = {
  siteMetadata: {
    siteUrl,
    title: `Mira Las Flores`,
    description: `WEBSITE COMING SOON`,
    social: {
      twitter: `miralasflores`,
    },
    author: `miralasflores`,
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/assets/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/assets/images/"
    },
    __key: "images"
  }]
};