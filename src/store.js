import { legacy_createStore } from 'redux';
import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';

const addTodo = createAction('ADD');
const deleteTodo = createAction('DELETE');

/**
툴킷 사용하지 않았을 때 reducer 코드 
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

툴킷 사용할 때 reducer 코드 
const reducer = createReducer([], {
  [addTodo]: (state, action) => { //push()는 mutate할 뿐 새로운 array를 리턴하지 않음..! 그래서 return 해주면 안됨.
    state.push({ text: action.payload.text, id: action.payload.id });
  },
  [deleteTodo]: (state, action) => { //return 할 때는 반드시 새로운 state여야함. 
    return state.filter((todo) => todo.id !== action.payload);
  },
}); 
*/

// bulider 함수 사용! 
const reducer = createReducer([], (builder) => {
  builder.addCase(addTodo,(state, action) => {
    state.push({ text: action.payload.text, id: action.payload.id })
  })
  .addCase(deleteTodo, (state, action) => {
    return state.filter((todo) => todo.id !== action.payload);
  })
}); 

export const actionCreators = {
  addTodo,
  deleteTodo,
};
const store = configureStore({reducer});

export default store;
