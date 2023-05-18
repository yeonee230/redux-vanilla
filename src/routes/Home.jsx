import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import ToDo from '../components/ToDo';
import { add } from '../store';

// function Home({ toDos, addToDo }) {
export default function Home() {
  const [todo, setTodo] = useState('');
  
  const toDos = useSelector(state => state);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    // addToDo(todo);
    dispatch(add({ text: todo, id: Date.now() }));
    setTodo('');
  }
  function handleChange(e) {
    const todo = e.target.value;
    setTodo(todo);
  }
  return (
    <>
      <h1>To Dos</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={todo}
          onChange={handleChange}
          placeholder='Write toDos ... '
        />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo
            {...toDo}
            key={toDo.id}
          />
        ))}
      </ul>
    </>
  );
}

// function mapStateToProps(state) {
//   //store에서 getState하는 함수 // prop를 바꿀 수 있음
//   return { toDos: state };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     addToDo: (text) => dispatch(add({text, id: Date.now()})),
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
