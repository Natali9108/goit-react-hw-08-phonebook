import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
      },
      body: {
        color: 'black.800',
        backgroundColor: 'white.800',
      },
    },
  },
  colors: {
    black: {
      800: 'RGBA(0, 0, 0, 0.80)',
    },
    white: {
      800: 'RGBA(255, 255, 255, 0.80)',
    },
    gray: '#718096',
    red: {
      200: '#FEB2B2',
    },
    blue: '#e7e7e7',
  },
  fontSizes: {
    xs: '16px',
    sm: '18px',
    md: '24px',
    lg: '32px',
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    normal: 'normal',
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: '2',
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  space: {
    px: '1px',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
  },
  sizes: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
  },
  breakpoints: {
    sm: '30em', // 480px
    md: '48em', // 768px
    lg: '62em', // 992px
    xl: '80em', // 1280px
    '2xl': '96em', // 1536px
  },
});

export const formContainerStyle = {
  p: '7',
  mt: '7',
  boxShadow: 'xl',
  border: '1px',
  borderColor: 'blue',
  borderRadius: 'base',
};
