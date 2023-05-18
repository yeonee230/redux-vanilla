import { legacy_createStore } from 'redux';

const ADD = 'ADD';
const DELETE = 'DELETE';

export const addTodo = (todo) => ({ type: ADD, text: todo, id: new Date.now() });
export const deleteTodo = (id) => ({ type: DELETE, id });

function reducer(state = [], action) {
  switch (action.type) {
    case ADD:
      return [{ text: action.text }, ...state];
    case DELETE:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}
const store = legacy_createStore(reducer);

export default store;
