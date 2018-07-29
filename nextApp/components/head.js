import NextHead from 'next/head'
import { string } from 'prop-types'

const defaultDescription = ''

const Head = (props) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || ''}</title>
    <meta name="description" content={props.description || defaultDescription} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="../static/favicon.ico" />
    <link href="https://fonts.googleapis.com/css?family=Titillium+Web:200,400,600,700" rel="stylesheet"/>
	  <link rel="stylesheet" href="../static/carousel.min.css"/>
  </NextHead>
)

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default Head
