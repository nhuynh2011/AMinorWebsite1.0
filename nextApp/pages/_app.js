import App, { Container } from 'next/app'
import React from 'react'
import { PageTransition } from 'next-page-transitions'
import Header from '../components/header'
import Footer from '../components/footer'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Header />
        <PageTransition timeout={300} classNames="page-transition">
          <Component {...pageProps} />
        </PageTransition>
        <Footer />

        <style jsx global>
          {`
            @font-face {
              font-family: "Din";
              src: url("../static/fonts/DIN.ttf");
            }

            @font-face {
              font-family: "Din";
              src: url("../static/fonts/DIN_Black.ttf");
              font-weight: 900;
            }

            body {
              font-family: "DIN";
              font-feature-settings: "kern" 1, "liga" 1;
              line-height: 1.414;
              margin: 0;
              text-rendering: optimizeLegibility;
              word-spacing: .125rem;
            }

            .page-transition-enter {
              opacity: 0;
            }

            .page-transition-enter-active {
              opacity: 1;
              transition: opacity 1s;
            }

            .page-transition-exit {
              opacity: 1;
            }

            .page-transition-exit-active {
              opacity: 0;
              transition: opacity 1s;
            }
          `}
        </style>
      </Container>
    )
  }
}