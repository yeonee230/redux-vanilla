import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ToDo from '../components/ToDo';
import { actionCreators } from '../store';

function Home({ toDos, addToDo }) {
  const [todo, setTodo] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    addToDo(todo);
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

function mapStateToProps(state) {
  //store에서 getState하는 함수 // prop를 바꿀 수 있음
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) =>
      dispatch(actionCreators.addTodo({ text, id: Date.now() })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
