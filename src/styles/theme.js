import { extendTheme } from '@chakra-ui/react';
import { modalTheme } from 'components/ContactModal/ModalTheme';

export const theme = extendTheme({
  components: { Modal: modalTheme },
  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
      },
      body: {
        color: 'black.800',
        backgroundColor: 'white.800',
      },

      _placeholder: {
        color: 'RGBA(0, 0, 0, 0.5)',
        opacity: '1',
        fontSize: 'xs',
        fontStyle: 'oblique',
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
    blue: '#2157a5',
    cyan: { 700: '#0987A0' },
  },
  fontSizes: {
    //   xs: '16px',
    xs: '18px',
    sm: '20px',
    md: '22px',
    lg: '32px',
  },
});

export const boxLinkStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 3,
};
export const linkStyles = {
  fontSize: 'sm',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  color: '#EDF2F7',
};

export const activeLink = {
  bgGradient: 'linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)',
  bgClip: 'text',
  fontSize: 'md',
};

export const textStyles = {
  mr: 'auto',
  fontSize: 'sm',
  fontWeight: 'bold',
  fontStyle: 'italic',
  color: '#EDF2F7',
};

export const formContainerStyle = {
  p: '7',
  mt: '7',
  boxShadow: 'xl',
  border: '1px',
  borderColor: 'blue',
  borderRadius: 'base',
};
