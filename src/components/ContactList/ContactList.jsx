import React from 'react';
import { PropTypes } from 'prop-types';
import { ContactsItem } from './ContactItem';
import { useContacts } from 'hooks';
import { List } from '@chakra-ui/react';

export const ContactList = () => {
  const { sortContacts } = useContacts();

  return (
    <>
      <List display="flex" gap={1} flexDirection="column">
        {sortContacts.map(({ id, name, number }, index) => (
          <ContactsItem
            key={id}
            id={id}
            index={index}
            name={name}
            number={number}
          />
        ))}
      </List>
    </>
  );
};

ContactList.propTypes = {
  key: PropTypes.string,
};
