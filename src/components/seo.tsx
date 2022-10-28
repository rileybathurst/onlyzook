import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export const SEO = ({
  title,
  image,
  pathname,
  children
}) => {
  const {
    title: defaultTitle,
    image,
    siteUrl,
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    image: `${image}`,
    url: `${siteUrl}${pathname || ``}`
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="image" content={seo.image} />
      <meta name="og:image" content={seo.image} />
      <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🍑</text></svg>" />
      {children}
    </>
  )
}