import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { switchAnatomy } from '@chakra-ui/anatomy';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle({
  track: {
    _checked: {
      bg: 'black',
    },
  },
});

export const switchTheme = defineMultiStyleConfig({ baseStyle });
