import React, { useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import '../../style/todoForm.sass'

function TodoForm ({ getTodo, setTodo }) {

    function keyDown (ev) {
        if (ev.keyCode === 13) {
            name()
        }
    }

    let textInput = useRef()
    function name () {
        if (textInput.current.value) {
            setTodo([...getTodo, {
                title: textInput.current.value,
                id: uuidv4(),
                status: true
            }])
        }
        textInput.current.value = ''
    }
    return (
        <div className="form" onKeyDown={keyDown}>
            <input className="form__input" ref={textInput} />
            <div className="form__button"
                onClick={name}

                type="">add task</div>
        </div>
    )
}


export default TodoForm