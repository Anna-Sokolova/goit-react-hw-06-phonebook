import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ol className={styles.list}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={styles.item} >
      <p>
        {name}
        <span className={styles.divider}>:</span>
        <span className={styles.tel}>{number}</span>
      </p>
      <button type="button" className={styles.btnDelete} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
    ))}
  </ol>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
