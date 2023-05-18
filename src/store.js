import { legacy_createStore } from 'redux';
import { createAction } from '@reduxjs/toolkit';

const addTodo = createAction('ADD');
const deleteTodo = createAction('DELETE');

function reducer(state = [], action) {
  console.log('action: ', action);
  switch (action.type) {
    case addTodo.type:
      return [{ text: action.payload.text, id: action.payload.id }, ...state];
    case deleteTodo.type:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

export const actionCreators = {
  addTodo,
  deleteTodo,
};
const store = legacy_createStore(reducer);

export default store;
