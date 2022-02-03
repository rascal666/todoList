import React, { useEffect } from "react";
import '../style/todoList.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'
import { observer } from "mobx-react-lite";
import todo from "../store/todo";


const AddList = observer(() => {


    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todo.todos))
    }, [todo.todos])



    return (
        <div className="task">
            {
                todo.todosFilter.map((item) => (

                    <div className={!item.status ? 'task__item task__close' : 'task__item task__open'} key={item.id}>
                        <div>
                            <p className="task__name"  >{item.title}</p>
                        </div>
                        <div className="task__btns btn">
                            <div className="btn__status" onClick={() => todo.statusTask(item.id)} type="">
                                {
                                    item.status === false ? <FontAwesomeIcon className="btn__statusDone" icon={faCheck} /> : <FontAwesomeIcon icon={faCheck} />}
                            </div>
                            <div className="btn__delite" onClick={() => todo.deliteTask(item.id)} type=""><FontAwesomeIcon icon={faTrash} /></div>
                        </div>
                    </div>

                ))
            }
        </div>
    )
})


export default AddList