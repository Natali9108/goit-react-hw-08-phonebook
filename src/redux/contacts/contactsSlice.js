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

const isPending = action => action.type.endsWith('/pending');

const handleFulfilledFetchContacts = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload;
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
  // const find = state.items.find(contact => contact.id === payload.id);
  // find = payload;
  state.items = payload;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
const isRejected = action => action.type.endsWith('/rejected');

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
