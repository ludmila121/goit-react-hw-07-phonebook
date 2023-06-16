import React from 'react';
import ContactListItem from './ContactListItem';
import { useSelector, useDispatch } from 'react-redux';
import { Contacts } from './ContactList.styled';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import { getVisibleContacts } from 'redux/contacts/contactsSelectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const deleteContactItem = contactId => dispatch(deleteContact(contactid));
  const contacts = useSelector(getVisibleContacts);
  return (
    <Contacts>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onDeleteContact={() => deleteContactItem(id)}
        />
      ))}
    </Contacts>
  );
};
export default ContactList;
