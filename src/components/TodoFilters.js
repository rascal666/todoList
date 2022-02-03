import React from "react";
import todo from "../store/todo";


function TodoFilters () {

    return (
        <div>
            <select className="optionsFilters" onChange={(e) => {
                const optin = e.target.value
                todo.TodoFilters(optin)
            }}>
                <option value='all'>All task</option>
                <option value='false' >Сompleted tasks</option>
                <option value='true'>Unfinished tasks</option>
            </select>


            <div className="filters">
                <div className="filters__btn" onClick={() => todo.TodoFilters('all')}>All task</div>
                <div className="filters__btn" onClick={() => todo.TodoFilters(false)}>Сompleted tasks</div>
                <div className="filters__btn" onClick={() => todo.TodoFilters(true)}>Unfinished tasks</div>
            </div >
        </div>

    )
}


export default TodoFilters