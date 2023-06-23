import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/contacts/contactsSelectors';
import { filter } from 'redux/contacts/contactsSlice';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const setFilter = e => dispatch(filter(e.currentTarget.value));

  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={setFilter} />
    </label>
  );
}
