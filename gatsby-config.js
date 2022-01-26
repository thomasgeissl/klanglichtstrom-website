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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Available options and their defaults:
        base64Width: 20,
        forceBase64Format: ``, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
        failOnError: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/assets/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
