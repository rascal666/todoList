import React, { useState, useEffect } from "react";
import '../../style/todoList.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'


function AddList ({ getTodo, setTodo }) {


    const [currentStatus, setCurrentStatus] = useState(getTodo);
    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(getTodo))
    }, [getTodo])

    useEffect(() => {
        setCurrentStatus(getTodo)
    }, [getTodo])

    function deliteTask (id) {
        let newTodo = [...getTodo].filter(item => item.id !== id)
        setTodo(newTodo)
    }

    function statusTask (id) {
        let newTodo = [...getTodo].filter(item => {
            if (item.id === id) {
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)
    }
    function TodoFilters (status) {

        if (status === 'all') {
            setCurrentStatus(getTodo)
        } else {
            let newTodo = [...getTodo].filter(item => (item.status === status))
            setCurrentStatus(newTodo)
        }
    }



    return (
        <div className="taskWrapper content">
            <div className="taskWrapper__todo">

                <div className="task">
                    {
                        currentStatus.map((item) => (

                            <div className={!item.status ? 'task__item task__close' : 'task__item task__open'} key={item.id}>
                                <div>
                                    <p className="task__name"  >{item.title}</p>
                                </div>
                                <div className="task__btns btn">
                                    <div className="btn__status" onClick={() => statusTask(item.id)} type="">
                                        {
                                            item.status === false ? <FontAwesomeIcon className="btn__statusDone" icon={faCheck} /> : <FontAwesomeIcon icon={faCheck} />}
                                    </div>
                                    <div className="btn__delite" onClick={() => deliteTask(item.id)} type=""><FontAwesomeIcon icon={faTrash} /></div>
                                </div>
                            </div>

                        ))
                    }

                </ div >
            </div>

            <div className="filters">
                <div className="filters__btn" onClick={() => TodoFilters('all')}>All task</div>
                <div className="filters__btn" onClick={() => TodoFilters(false)}>Сompleted tasks</div>
                <div className="filters__btn" onClick={() => TodoFilters(true)}>Unfinished tasks</div>
            </div >
        </div>

    )
}


export default AddList