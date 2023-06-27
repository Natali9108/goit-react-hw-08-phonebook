import { Navigation, AuthNav, UserMenu } from 'components';
import { useAuth } from 'hooks';
import { Box } from '@chakra-ui/react';
import { headerStyles } from './AppBarStyles';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box as="header" sx={headerStyles}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Box>
  );
};
