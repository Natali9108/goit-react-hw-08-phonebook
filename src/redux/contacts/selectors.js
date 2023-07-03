import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (items, filter) => {
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const selectSortContacts = createSelector(
  [selectVisibleContacts],
  items => {
    return items.sort((first, second) => first.name.localeCompare(second.name));
  }
);
