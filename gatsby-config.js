module.exports = {
  siteMetadata: {
    title: `Klang-/Licht STROM`,
    description: ``,
    author: `Bengler/Geissl`,
    siteUrl: `https://klanglichtstrom.de`,
    keywords: [
      "audio",
      "visual",
      "performance",
      "lights",
      "light bulbs",
      "dmx",
      "eurorack",
      "modular",
      "soundscape",
    ],
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/src/assets/fonts/`,
      },
    },
    `gatsby-plugin-sass`,
  ],
}
