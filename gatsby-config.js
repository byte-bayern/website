module.exports = {
  siteMetadata: {
    description: `Wir sind byte - die Bayerische Agentur für Digitales. Als starker Digitalisierungspartner unterstützen und beraten wir die bayerischen Ministerien und die ihnen nachgeordneten, staatlichen Institutionen beim Management digitaler Projekte und Produkte.`,
    siteUrl: `https://byte.bayern/`,
    keywords: `Bayerische Staatsregierung, Offiziell, Freistaat Bayern, Bayern, Freistaat, Bavaria, Free State of Bavaria, Politik, Politikthemen, aktuelle Meldungen, Meldungen, Staatsregierung`
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/img/components/brand/favicon.svg",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
  ],
};
