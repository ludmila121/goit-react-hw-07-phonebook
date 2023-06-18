import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contactsAction';
import { getFilter } from '../../redux/contacts/contactsSelectors';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const setFilter = e => dispatch(changeFilter(e.currentTarget.value));

  return (
    <label>
      Find contacts by name
      <input type="text" value={filter} onChange={setFilter} />
    </label>
  );
}
