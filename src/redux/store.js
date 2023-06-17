import { configureStore } from '@reduxjs/toolkit';
import contacts from './contacts/contactsReducer';

export const store = configureStore({
  reducer: {
    contacts,
  },
});
