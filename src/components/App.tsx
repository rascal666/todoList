/** @format */

import React from 'react';
import '../style/style.sass';
import TodoForm from './TodoForm';
import AddList from './AddList';
import TodoFilters from './TodoFilters';

const App = () => {

	return (
		<div className='App'>
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
};

export default App;
