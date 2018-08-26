import App, { Container } from 'next/app';

import React from 'react';

import { PageTransition } from 'next-page-transitions';

import Head from '../components/head';
import Header from '../components/header';
import Footer from '../components/footer';

export default class extends App {

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;

    const TIMEOUT = 700;

    return (
      <Container>
        <Head title="Home"></Head>

        <Header currentRoute={router.route}></Header>

        <main role="main">
          <PageTransition timeout={TIMEOUT} classNames="page">
            <Component key={router.route} {...pageProps}></Component>
          </PageTransition>
        </main>

	      <PageTransition timeout={TIMEOUT} classNames="footer">
	        <Footer></Footer>
	      </PageTransition>

        <style jsx global>
          {
          	`
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
	              font-size: 18px;
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
	              box-sizing: border-box;
	              min-height: calc(100vh - 125.071px - 198.027px);
	              padding: 1rem;
	            }

	            .page-enter {
	              opacity: 0;
	              transform: scale(0.99);
	            }

	            .page-enter-active {
	              opacity: 1;
	              transform: scale(1);
	              transition: opacity ${TIMEOUT}ms ease-out,
	                          transform ${TIMEOUT}ms ease-out;
	              will-change: opacity, transform;
	            }

	            .page-exit {
	              opacity: 1;
	              transform: scale(1);
	            }

	            .page-exit-active {
	              opacity: 0;
	              transform: scale(0.99);
	              transition: opacity ${TIMEOUT}ms ease-out,
	                          transform ${TIMEOUT}ms ease-out;
	              will-change: opacity, transform;
	            }

	            .footer-enter {
	              opacity: 0;
	            }

	            .footer-enter-active {
	              opacity: 1;
	              transition: opacity ${TIMEOUT}ms ease-out;
	              will-change: opacity;
	            }

	            .footer-exit {
	              opacity: 1;
	            }

	            .footer-exit-active {
	              opacity: 0;
	              transition: opacity ${TIMEOUT}ms ease-out;
	              will-change: opacity;
	            }

	            @media screen and (max-width: 1000px) {
	              main {
		              min-height: calc(100vh - 68.714px - 227.732px);
		            }
	            }
            `
          }
        </style>
      </Container>
    );
  }
}
