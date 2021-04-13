import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import types from './contacts-types';

const itemsReducer = createReducer([], {
  [types.ADD]: (state, action) => [...state, action.payload],
  [types.DELETE]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const filterReducer = createReducer('', {
  [types.CHANGE_FILTER]: (state, action) => action.payload,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default contactsReducer;
