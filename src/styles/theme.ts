import localFont from 'next/font/local';
import { extendTheme } from '@chakra-ui/react';

const pretendard = localFont({
  src: '../assets/fonts/PretendardVariable.woff2',
});

const theme = extendTheme({
  fonts: {
    body: pretendard.style.fontFamily,
    heading: pretendard.style.fontFamily,
  },
  colors: {
    black: {
      50: '#242529',
      100: '#242529',
      200: '#242529',
      300: '#242529',
      400: '#242529',
      500: '#242529',
      600: '#242529',
      700: '#242529',
      800: '#242529',
      900: '#242529',
    },
    white: '#ffffff',
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
  components: {
    Button: {
      variants: {
        primary: {
          bg: 'black',
          color: 'white',
        },
        secondary: {
          bg: 'waggle.gray.600',
          color: 'waggle.gray.800',
        },
      },
    },
  },
});

export default theme;
