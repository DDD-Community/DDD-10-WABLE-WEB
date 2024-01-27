import type { AppProps } from 'next/app';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    black: '#242529',
    point: '#ffe867',
    waggle: {
      gray: {
        600: '#dcdcdd',
        700: '#5c6873',
        800: '#4d4f57',
        900: '#36373f',
      },
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
