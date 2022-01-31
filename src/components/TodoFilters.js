import React from "react";

function TodoFilters ({ getInput, setinput, currentStatus, setCurrentStatus }) {

    function TodoFilters (status) {
        console.log(status);
        if (status === 'all') {
            setCurrentStatus(getInput)
        } else {
            console.log(getInput);
            const newTodo = [...getInput].filter(item => (item.status === status))
            setCurrentStatus(newTodo)
        }
    }

    return (
        <div className="filters">
            <div className="filters__btn" onClick={() => TodoFilters('all')}>All task</div>
            <div className="filters__btn" onClick={() => TodoFilters(false)}>Сompleted tasks</div>
            <div className="filters__btn" onClick={() => TodoFilters(true)}>Unfinished tasks</div>
        </div >
    )
}


export default TodoFilters