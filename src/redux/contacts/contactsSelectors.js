import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;
export const isLoading = state => state.isLoading;
export const getError = state => state.error;

export const getVisibleContacts = createSelector(
  getContacts,
  getFilter,
  (contacts, value) => {
    const normalizedFilter = value.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);
