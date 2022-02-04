/** @format */
import React from "react";
import { makeAutoObservable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';


export interface TodoProps{
		title: string
		id: string
		status:boolean
		}

class Todo {
	todos: TodoProps [] = [];
	todosFilter:TodoProps[] = [];
	inputValue: string = '';

	constructor() {
		makeAutoObservable(this);
	}

	TodoFilters(status: any) {
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

	keyDown(event: React.KeyboardEvent) {
		if (event.keyCode === 13) {
			this.addTask();
		}
	}

	statusTask(id:string) {
		this.todos.filter((item) => {
			if (item.id === id) {
				item.status = !item.status;
			}
			return item;
		});
	}

	deliteTask(id:string) {
		this.todos = this.todos.filter((item) => item.id !== id);
		this.todosFilter = this.todos;
	}
}

export default new Todo();
