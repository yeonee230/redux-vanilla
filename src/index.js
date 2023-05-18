import { legacy_createStore } from 'redux';
const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD = 'ADD';
const REMOVE = 'REMOVE';

/** 
✅ state는 single source of truth이며, read-only이다
✅ store을 수정할 수 있는 유일한 방법은 action을 보내는 방법뿐이다.
✅ state를 mutate하지 말아야한다.
  ▷ mutating state하는 대신에 new state objects를 리턴해야 한다. */

const reducer = (state = [], action) => { // ✅ 🆁 2. make function reducer (state, action)
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: action.id }, ...state];
    case REMOVE:
      return state;
    default:
      return state;
  }
};

const store = legacy_createStore(reducer); // ✅ 🆁 1. createStore

const paintTodos = () => {
  const toDos = store.getState(); //array
  ul.innerHTML = ''; // 이거 안하면 중복해서 list가 만들어짐
  toDos.forEach((toDo) => {
    const li = document.createElement('li');

    li.id = toDo.id;
    li.innerText = toDo.text;
    ul.appendChild(li);
  });
};

store.subscribe(paintTodos); // ✅ 🆁 4. subscribe(func)

const addTodo = (toDo) => {
  store.dispatch({ type: ADD, text: toDo, id: Date.now() }); // ✅ 🆁 3. dispatch(action)
};
const handleSubmit = (e) => {
  e.preventDefault(); //새로고침 막고
  const toDo = input.value; //input의 값 받아서
  input.value = ''; //초기화
  //createTodo(toDo); // 화면에 띄운다.
  addTodo(toDo);
};

form.addEventListener('submit', handleSubmit);
