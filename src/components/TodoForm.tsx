import React from "react";
import '../style/todoForm.sass'
import todo from "../store/todo";
import { observer } from "mobx-react-lite";
import {  action } from "mobx";


const TodoForm:React.FC = observer(() => {

    return (
        <div className="form" onKeyDown={todo.keyDown}>
            <input className="form__input" value={todo.inputValue} onChange={action((evt) => todo.inputValue = evt.target.value)} placeholder="add task" />
            <div className="form__button"
                onClick={() => todo.addTask()}
                >add task</div>
        </div>
    )
})

export default TodoForm