import React from 'react';
import '../style/style.sass'
import TodoForm from './TodoForm';
import AddList from './AddList';

import { useState } from 'react'


function App () {
  const getlocalStorageTodo = () => {
    const todo = localStorage.getItem('todo')
    if (todo) {
      return JSON.parse(todo)
    } else {
      return []
    }
  }

  const [getTodo, setTodo] = useState(getlocalStorageTodo());

  return (
    <div className="App" >
      <div className='header'>
        <TodoForm getTodo={getTodo} setTodo={setTodo} />
        <p className='header__title'>todo List</p>
      </div>

      <AddList getTodo={getTodo} setTodo={setTodo} />
    </div>
  );
}

export default App;
