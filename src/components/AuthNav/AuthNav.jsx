import { NavLink } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { boxLinkStyles, linkStyles, activeLink, textStyles } from 'styles';

export const AuthNav = () => {
  return (
    <>
      <Text as="span" sx={textStyles}>
        Phonebook
      </Text>
      <Box as="nav" sx={boxLinkStyles}>
        <Link
          as={NavLink}
          sx={linkStyles}
          _activeLink={activeLink}
          to="/register"
        >
          Register
        </Link>
        <Link as={NavLink} sx={linkStyles} _activeLink={activeLink} to="login">
          Login
        </Link>
      </Box>
    </>
  );
};
