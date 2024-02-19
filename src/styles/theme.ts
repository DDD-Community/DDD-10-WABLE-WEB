import localFont from 'next/font/local';
import { extendTheme } from '@chakra-ui/react';
import { switchTheme } from './switch';
import { dividerTheme } from './divider';
import colors from './colors';

const pretendard = localFont({
  src: '../assets/fonts/PretendardVariable.woff2',
});

const theme = extendTheme({
  fonts: {
    body: pretendard.style.fontFamily,
    heading: pretendard.style.fontFamily,
  },
  colors: {
    ...colors,
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
    Divider: dividerTheme,
  },
});

export default theme;
