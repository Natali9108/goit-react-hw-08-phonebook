import React from 'react';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/contacts/filterSlice';
import { useContacts } from 'hooks';
import { Box, Text, Input } from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();
  const { filter } = useContacts();

  const handleChangeFilter = evt => {
    dispatch(addFilter(evt.target.value));
  };

  return (
    <Box mb={5}>
      <Text
        fontSize="sm"
        fontWeight="500"
        letterSpacing="0.02em"
        paddingBottom="5px"
      >
        Find contacts by name
      </Text>
      <Input
        autoComplete="off"
        placeholder="Enter name to find contact"
        type="text"
        name="name"
        value={filter}
        onChange={handleChangeFilter}
      />
    </Box>
  );
};
