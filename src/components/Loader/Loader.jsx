import { Box } from '@chakra-ui/react';
import { ColorRing } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <ColorRing
        visible={true}
        height="50"
        width="50"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#1a46bb', '#1a46bb', '#1a46bb', '#1a46bb', '#1a46bb']}
      />
    </Box>
  );
};
