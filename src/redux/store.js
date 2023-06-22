import { configureStore } from '@reduxjs/toolkit';
import slice from './contacts/contactsSlice';

export const store = configureStore({
  reducer: slice.reducer,
});
