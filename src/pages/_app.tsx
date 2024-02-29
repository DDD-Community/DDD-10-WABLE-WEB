import type { AppProps } from 'next/app';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { ChakraProvider } from '@chakra-ui/react';
import emotionTheme from '@/styles/emotionTheme';
import chakraTheme from '@/styles/chakraTheme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();
import '@/styles/reset.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <EmotionThemeProvider theme={emotionTheme}>
        <ChakraProvider theme={chakraTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </EmotionThemeProvider>
    </QueryClientProvider>
  );
}
