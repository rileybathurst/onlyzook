import * as React from "react"
import { Link, HeadFC } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Tony&apos;s Ten</h1>
      <ol style={paragraphStyles}>
        <li>Become a snowboarder</li>
        <li>Realize snowboarding isn&apos;t as fun as skiing and convert full time</li>
        <li>Wait 10 years</li>
        <li>Rediscover how fun snowboarding actually is and the culture around it.</li>
        <li>Make a lot of snowboard friends.</li>
        <li>Have a global pandemic that forces you closer to home and use safe terrain</li>
        <li>buy a pow surfer. Blow your mind</li>
        <li>Get invited to an all snowboarder hut trip and use a split for the first time ever</li>
        <li>Drink beer and smoke weed while enjoying steps 4-8</li>
        <li>Nirvana achieved</li>
      </ol>
    </main >
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
