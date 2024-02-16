import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const dashboard = defineStyle({
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: 'rgba(113, 128, 150, 0.2)',
});

export const dividerTheme = defineStyleConfig({
  variants: { dashboard },
});
