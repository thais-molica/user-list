import App from 'next/app';
import React from 'react';
import Store from '../context/Store';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Store>
        <Component {...pageProps} />
      </Store>
    );
  }
}
export default MyApp;
