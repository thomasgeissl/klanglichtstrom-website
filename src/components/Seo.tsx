import React from "react"
import type { HelmetProps } from "react-helmet"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

type SeoImage = {
  src: string
  height: number
  width: number
}

type SeoProps = {
  description?: string
  lang?: string
  meta?: NonNullable<HelmetProps["meta"]>
  title: string
  image?: SeoImage
  pathname?: string
}

type SiteMetadataQuery = {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: string
      keywords: string[]
      siteUrl: string
    }
  }
}

export default function SEO({
  description = "",
  lang = "en",
  meta = [],
  image: metaImage,
  title,
  pathname,
}: SeoProps) {
  const { site } = useStaticQuery<SiteMetadataQuery>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
          }
        }
      }
    `
  )
  const metaDescription = description || site.siteMetadata.description
  const image =
    metaImage && metaImage.src
      ? `${site.siteMetadata.siteUrl}${metaImage.src}`
      : null
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null

  const metaTags: NonNullable<HelmetProps["meta"]> = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      name: "keywords",
      content: site.siteMetadata.keywords.join(","),
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ]

  if (metaImage && image) {
    metaTags.push(
      {
        property: "og:image",
        content: image,
      },
      {
        property: "og:image:width",
        content: String(metaImage.width),
      },
      {
        property: "og:image:height",
        content: String(metaImage.height),
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      }
    )
  } else {
    metaTags.push({
      name: "twitter:card",
      content: "summary",
    })
  }

  metaTags.push(...meta)

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
            ]
          : []
      }
      meta={metaTags}
    />
  )
}
