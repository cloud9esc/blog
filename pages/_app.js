import React from 'react';
import App, { Container } from 'next/app';

import './_app.scss';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <div className="global_background" />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;