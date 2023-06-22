import React from 'react';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/contacts/filterSlice';

// import { FilterBox, FilterText, FilterField } from './Filter.styled';
import { useContacts } from 'hooks';

export const Filter = () => {
  const dispatch = useDispatch();
  const { filter } = useContacts();

  const handleChangeFilter = evt => {
    dispatch(addFilter(evt.target.value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        autoComplete="off"
        type="text"
        name="name"
        value={filter}
        onChange={handleChangeFilter}
      />
    </div>
  );
};
