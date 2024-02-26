import type { AppProps } from 'next/app';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { ChakraProvider } from '@chakra-ui/react';

import emotionTheme from '@/styles/emotionTheme';
import chakraTheme from '@/styles/chakraTheme';
import '@/styles/reset.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <EmotionThemeProvider theme={emotionTheme}>
      <ChakraProvider theme={chakraTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </EmotionThemeProvider>
  );
}
