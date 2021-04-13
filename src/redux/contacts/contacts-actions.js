import { createAction } from '@reduxjs/toolkit';
import types from './contacts-types';
import shortid from 'shortid';

export const addContact = createAction(types.ADD, function prepare(data) {
  return {
    payload: {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    },
  };
});
export const deleteContact = createAction(types.DELETE);
export const changeFilter = createAction(types.CHANGE_FILTER);
