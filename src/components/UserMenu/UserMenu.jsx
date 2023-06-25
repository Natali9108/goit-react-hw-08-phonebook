import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { logOut } from 'redux/auth/authOperations';
import { Box, Text, Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <Box display="flex" gap={3} textAlign="center">
      <Text
        fontSize="md"
        fontWeight="semibold"
        color="#ffdef5"
      >{`Welcome ${user.name} `}</Text>
      <Button
        type="button"
        onClick={() => dispatch(logOut())}
        padding={2}
        leftIcon={<ArrowBackIcon />}
        color="#EDF2F7"
        variant="outline"
      >
        Logout
      </Button>
    </Box>
  );
};
