import { legacy_createStore } from 'redux';

const ADD = 'ADD';
const DELETE = 'DELETE';

const addTodo = (todo) => ({ type: ADD, text: todo, id: Date.now() });
const deleteTodo = (id) => ({ type: DELETE, id });

function reducer(state = [], action) {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: action.id }, ...state];
    case DELETE:
      return state.filter((todo) => todo.id !== action.id);
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
