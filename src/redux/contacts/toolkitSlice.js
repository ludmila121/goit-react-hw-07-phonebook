import { createSlice } from '@reduxjs/toolkit';

const toolkitSlice = createSlice(option, {
  name: 'contacts',
  initialState: {
    contactsInitialState,
  },
  reducers: {
    increment(state) {
      state.count = state.count + 1;
    },
  },
});
