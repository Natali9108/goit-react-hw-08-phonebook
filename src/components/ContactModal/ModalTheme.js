import { modalAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  overlay: {
    bg: 'blackAlpha.200',
  },
  dialog: {
    width: '60%',
    padding: '5',
    borderRadius: 'md',
    bg: `white`,
  },
});

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
});
