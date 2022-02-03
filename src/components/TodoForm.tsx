import React from "react";
import '../style/todoForm.sass'
import todo from "../store/todo";
import { observer } from "mobx-react-lite";


const TodoForm = observer(() => {

    return (
        <div className="form" onKeyDown={(key) => todo.keyDown(key)}>
            <input className="form__input" value={todo.inputValue} onChange={(e) => todo.handleChange(e.target.value)} />
            <div className="form__button"
                onClick={() => todo.addTask()}
                >add task</div>
        </div>
    )
})


export default TodoForm