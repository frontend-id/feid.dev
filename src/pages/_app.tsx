import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { CacheProvider } from '@emotion/core';
import { cache } from 'emotion';
import { ChakraProvider } from '@chakra-ui/core';
import theme from '~/theme';

import 'typeface-inter';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cache}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Frontend Indonesia</title>
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </CacheProvider>
  );
}
