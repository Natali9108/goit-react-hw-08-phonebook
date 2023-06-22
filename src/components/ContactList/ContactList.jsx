import React from 'react';
import { PropTypes } from 'prop-types';
import { ContactsItem } from './ContactItem';
// import { ContactsList } from './ContactList.styled';
import { useContacts } from 'hooks';

export const ContactList = () => {
  const { sortContacts } = useContacts();

  return (
    <>
      <ul>
        {sortContacts.map(({ id, name, number }, index) => (
          <ContactsItem
            key={id}
            id={id}
            index={index}
            name={name}
            number={number}
          />
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  key: PropTypes.string,
};
