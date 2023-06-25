import { Navigation, AuthNav, UserMenu } from 'components';
import { useAuth } from 'hooks';
import { Box } from '@chakra-ui/react';

const headerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  p: 5,
  bg: 'gray',
  height: '80px',
  boxShadow: 'md',
};

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box as="header" sx={headerStyles}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Box>
  );
};
