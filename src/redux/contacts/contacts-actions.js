import types from './contacts-types';
import shortid from 'shortid';

export const addContact = data => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name: data.name,
    number: data.number,
  },
});

export const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

export const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});
