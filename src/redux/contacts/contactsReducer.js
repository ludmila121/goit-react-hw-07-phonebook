import {
  fetchContacts,
  postContact,
  deleteContact,
} from './contactsOperations';
import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { changeFilter } from './contactsAction';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [postContact.fulfilled]: (state, { payload }) => [payload, ...state],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload.id),
});
const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});
const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
});
export default combineReducers({
  items,
  filter,
  isLoading,
  error,
});
