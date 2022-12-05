import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `onlyzook`,
    siteUrl: `https://www.onlyzook.com`,
    image: `https://onlyzook.s3.us-west-1.amazonaws.com/onlyzook-og_image.jpg`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Only Zook`,
      short_name: `Only Zook`,
      start_url: `/`,
      background_color: `#f7f0eb`,
      theme_color: `#a2466c`,
      display: `standalone`,
      icon: `src/images/icon.png`,
    },
  },
  {
    resolve: `gatsby-plugin-csp`,
    options: {
      mergeSecurityHeaders: true, // ? testing june 18 2022 csp issue // boolean to turn off the default security headers
      mergeScriptHashes: false, // you can disable scripts sha256 hashes
      mergeStyleHashes: false, // you can disable styles sha256 hashes
      directives: {
        "image-src": "'self' https://onlyzook.s3.us-west-1.amazonaws.com/onlyzook-og_image.jpg",
        "script-src": "'self' 'unsafe-inline' use.typekit.net www.google-analytics.com https://d3ey4dbjkt2f6s.cloudfront.net/",
        "style-src": "'self' 'unsafe-inline' use.typekit.net https://d3ey4dbjkt2f6s.cloudfront.net/",
        "font-src": "'self' 'unsafe-inline' use.typekit.net data:",
        "img-src": "'self' p.typekit.net https://www.google-analytics.com data: about:", // I think use.typekit.net is a tracking pixel
        "connect-src": "'self' data:  https://www.google-analytics.com/"
        // you can add your directives or override defaults
      }
    }
  },
]
};

export default config;
