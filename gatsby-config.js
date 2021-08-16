module.exports = {
  siteMetadata: {
    title: 'GitHub Android Card',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'GitHub Android Card',
        short_name: 'GitHub Android Card',
        start_url: '/',
        icon: 'src/images/gatsby-icon.png',
      },
    },
  ],
};
