import localFont from 'next/font/local';
import { extendTheme } from '@chakra-ui/react';
import { switchTheme } from './switch';

const pretendard = localFont({
  src: '../assets/fonts/PretendardVariable.woff2',
});

const theme = extendTheme({
  fonts: {
    body: pretendard.style.fontFamily,
    heading: pretendard.style.fontFamily,
  },
  colors: {
    black: '#242529',
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
    Switch: switchTheme,
  },
});

export default theme;
