import React, { useState } from 'react';
import { connect } from 'react-redux';

function Home({ toDos }) {
  const [todo, setTodo] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
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
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Home);
