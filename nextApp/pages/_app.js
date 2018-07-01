import App, { Container } from 'next/app'
import React from 'react'
import { PageTransition } from 'next-page-transitions'
import Head from '../components/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Router from 'next/router'

export default class MyApp extends App {

  constructor(props) {
    super(props)
    this.state = {
      isPageEnteringFromLeft: true
    }
  }

	/**
   * Add an event listener to get the page transition direction when the route changes
	 */
	componentDidMount() {
    Router.onRouteChangeStart = url => {
      this.setPageTransitionDirection(url)
    }
  }

	/**
   * Remove the route event listener
	 */
	componentWillUnmount() {
    Router.onRouteChangeStart = null
  }

	/**
   * Given an new route, compare the new route with the old route and determine the direction the page transition
	 * @param newRoute - new route to be taken
	 */
  setPageTransitionDirection(newRoute) {
    let currRoute = this.props.router.route
    if (currRoute.localeCompare(newRoute) === -1) {
      this.setState({
        isPageEnteringFromLeft: false
      })
    }
    else if (currRoute.localeCompare(newRoute) === 1) {
      this.setState({
	      isPageEnteringFromLeft: true
      })
    }
  }


	/**
   * Return the direction of the transition for the page coming in
	 * @returns {string} - '' means the left direction, '-' means the right direction
	 */
	getPageInDirection() {
    return this.state.isPageEnteringFromLeft ? '' : '-'
  }

  getPageOutDirection() {
    return this.state.isPageEnteringFromLeft ? '-' : ''
  }


  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  render() {
    const { Component, pageProps, router } = this.props

    const TIMEOUT = 600

    return (
      <Container>
        <Head title="Home"></Head>

        <Header isPageMovingRight={this.state.isPageEnteringFromLeft}></Header>

        <main>
          <PageTransition timeout={TIMEOUT} classNames="page-transition">
            <Component key={router.route} {...pageProps}></Component>
          </PageTransition>
        </main>

        <Footer></Footer>

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

            html {

              --page-transition: ${2 * TIMEOUT}ms;
            }

            body {
              font-family: 'Titillium Web', sans-serif;
              font-feature-settings: "kern" 1, "liga" 1;
              line-height: 1.414;
              margin: 0;
              text-rendering: optimizeLegibility;
              word-spacing: .125rem;
            }

            main {
              overflow: hidden;
            }

            .page-transition-enter {
              transform: translateX(${this.getPageInDirection()}100vw);
              opacity: 0;
            }

            .page-transition-enter-active {
              opacity: 1;
              transform: translateX(0);
            }

            .page-transition-enter-active, .page-transition-exit-active {
              transition: opacity ${TIMEOUT}ms ease-in-out,
                          transform ${TIMEOUT}ms ease-in-out;
              will-change: opacity, transform;
            }

            .page-transition-exit {
              opacity: 1;
              transform: translateX(0);
            }

            .page-transition-exit-active {
              opacity: 0;
              transform: translateX(${this.getPageOutDirection()}100vw);
            }
          `}
        </style>
      </Container>
    )
  }
}