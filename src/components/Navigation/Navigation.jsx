import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';
import { linkStyles, activeLink } from 'styles';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      {/* <NavLink to="/">Pnonebook</NavLink> */}
      {isLoggedIn && (
        <Link
          as={NavLink}
          sx={linkStyles}
          _activeLink={activeLink}
          to="/contacts"
        >
          Contacts
        </Link>
      )}
    </nav>
  );
};
