/** @format */

import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';
import { v4 as uuidv4 } from 'uuid';

class Todo {
	todos = [];
	todosFilter = [];
	inputValue: string = '';

	// getlocalStorageTodo = () => {
	//     const todo = localStorage.getItem('todo')
	//     if (todo) {
	//         return JSON.parse(todo)
	//     } else {
	//         return []
	//     }
	// }

	constructor() {
		makeAutoObservable(this);
	}
	TodoFilters(status) {
		if (status == 'true') {
			status = true;
		}
		if (status == 'false') {
			status = false;
		}
		if (status === 'all') {
			this.todosFilter = this.todos;
		} else {
			this.todosFilter = this.todos.filter((item) => item.status === status);
		}
	}

	addTask() {
		if (this.inputValue != '') {
			this.todos.push({
				title: this.inputValue,
				id: uuidv4(),
				status: true,
			});
			this.todosFilter = this.todos;
			this.inputValue = '';
		}
	}
	keyDown(ev) {
		if (ev.keyCode === 13) {
			this.addTask();
		}
	}

	handleChange(e) {
		this.inputValue = e;
	}

	statusTask(id) {
		this.todos.filter((item) => {
			if (item.id === id) {
				item.status = !item.status;
			}
			return item;
		});
	}

	deliteTask(id) {
		this.todos = this.todos.filter((item) => item.id !== id);
		this.todosFilter = this.todos;
	}
}

export default new Todo();
