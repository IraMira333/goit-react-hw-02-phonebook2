import React from 'react';

import PropTypes from 'prop-types';

const ContactList = ({ contacts, removeContact }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <span>{contact.name} </span>
            <span>{contact.number}</span>
            <button onClick={() => removeContact(contact.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  removeContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;
