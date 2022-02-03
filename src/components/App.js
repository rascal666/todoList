import React from 'react';
import '../style/style.sass'
import TodoForm from './TodoForm';
import AddList from './AddList';
import TodoFilters from './TodoFilters';
import todo from '../store/todo';
import { observer } from 'mobx-react-lite';

import { useState } from 'react'


function App () {




  return (
    <div className="App" >
      <div className='header'>
        <TodoForm />
        <p className='header__title'>todo List</p>
      </div>

      <div className='taskWrapper content'>
        <AddList />
        <TodoFilters />
      </div>
    </div>
  );
}

export default observer(App);
