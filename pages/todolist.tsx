
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {randomID} from '../utils'  
interface Object {
    [key: string]: any
}

const App = () => {
    const [Task, setTask] = useState('')
    const [taskList, setTaskList] = useState<Object[]>([])

    const [showEdit, setShowEdit] = useState<boolean>(false)
    const [updateTask, setUpdateTask] = useState<string>('')


    const addTask = () => {
        setTaskList((prev) => [...prev, {id: randomID(), value: Task}])
        setTask('')
    }

    const deleleteTask = (id: string) => {
        const updateArray = taskList.filter((task) => task.id !== id)
        setTaskList(updateArray)
    }

    const editTask = (id: string, newText: string) => {
        const currentTask: Object = taskList.filter((task) => task.id === id)
        const newTask = {
            id : currentTask.id,
            value: newText
        }
        deleleteTask(id)
        setTaskList((prev) => [...prev, newTask])
        setUpdateTask('')
        setShowEdit(false)
    }
    return (
        <>
            <input type="text" value={Task} onChange = {(e) => setTask(e.target.value)}></input>
            <button onClick={addTask}>Add</button>
            <ul>
                {taskList.map((task) => {
                    return (
                        <>
                            <li onClick={() => setShowEdit(task.id)} key={task.id}>{task.value}</li>
                            <button onClick={() => deleleteTask(task.id)}>X</button>
                        
                         {showEdit === task.id ? (
                            <>
                                <input type="text" value={updateTask} onChange={(e) => setUpdateTask(e.target.value)}></input>
                                <button onClick={() => editTask(task.id, updateTask)}>Update</button>
                            </>
                        ) : null}
                        </>
                    )
                })}
            
            </ul>
        </>
    )
   
}
export default App
