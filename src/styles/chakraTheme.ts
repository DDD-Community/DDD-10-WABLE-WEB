import localFont from 'next/font/local';
import { extendTheme } from '@chakra-ui/react';
import { switchTheme } from './switch';
import { dividerTheme } from './divider';

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
        100: '#f8f9fa',
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
          _hover: {
            opacity: 0.8,
          },
        },
        secondary: {
          bg: 'waggle.gray.600',
          color: 'waggle.gray.800',
        },
        solid: {
          bg: 'white',
          border: '1px solid black',
        },
      },
    },
    Switch: switchTheme,
    Divider: dividerTheme,
  },
});

export default theme;
