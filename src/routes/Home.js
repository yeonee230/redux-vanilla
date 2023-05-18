import React, { useState } from 'react';

export default function Home() {
  const [todo, setTodo] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setTodo('')
  }
  function handleChange(e) {
    const todo = e.target.value
    setTodo(todo)
  }
  return (
    <>
      <h1>To Dos</h1>
      <form onSubmit={handleSubmit}>
        <input value={todo} onChange={handleChange} placeholder='Write toDos ... ' />
        <button>Add</button>
      </form>
    </>
  );
}
