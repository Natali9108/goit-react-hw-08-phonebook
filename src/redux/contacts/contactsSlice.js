import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './contactsOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const isPending = action =>
  action.type.endsWith('/pending') && action.type.includes('contacts');

const handleFulfilledFetchContacts = (state, action) => {
  state.isLoading = false;
  state.items = action.payload;
};

const handleFulfieldAddContacts = (state, { payload }) => {
  state.isLoading = false;
  state.items.push(payload);
};

const handleFulfieldDeleteContact = (state, { payload }) => {
  state.items = state.items.filter(contact => contact.id !== payload.id);
  state.isLoading = false;
};

const handleFulfieldUpdateContact = (state, { payload }) => {
  state.items = state.items.map(item => {
    if (item.id === payload.id) {
      return item === payload;
    } else return item;
  });
  state.isLoading = false;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
const isRejected = action =>
  action.type.endsWith('/rejected') && action.type.includes('contacts');

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledFetchContacts)
      .addCase(addContact.fulfilled, handleFulfieldAddContacts)
      .addCase(deleteContact.fulfilled, handleFulfieldDeleteContact)
      .addCase(updateContact.fulfilled, handleFulfieldUpdateContact)
      .addMatcher(isPending, handlePending)
      .addMatcher(isRejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
