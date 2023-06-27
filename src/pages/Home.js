import { Box, Heading } from '@chakra-ui/react';
import phoneImg from 'img/phonebook.png';

const Home = () => {
  return (
    <Box padding={6} display="flex" alignItems="center" flexDirection="column">
      <Heading mb={7}>Welcome to the Phonebook</Heading>
      <img src={phoneImg} alt="phonebook" />
    </Box>
  );
};

export default Home;
