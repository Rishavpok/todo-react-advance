import { useReducer, useState } from 'react'
import AddTaskForm from '../components/AddTaskForm'
import FilterBar from '../components/FilterBar'
import Header from '../components/Header/Header'
import TaskList from '../components/TaskList'
import UndoRedoButton from '../components/UndoRedoButton'
import './Home.css'
import tasksReducer from '../reducers/taskReducer'

export default function Home() {

    const [tasks, dispatch] = useReducer(tasksReducer, []);

    function addTask(title:string) {
        dispatch({
            type : 'add',
            payload : title
        })
    }

    function deleteTask(id : number) {
          dispatch({ type: 'delete', payload: id });
    }

    function onToggle(event: boolean, id: number) {
        dispatch({ type: 'toggle', payload: id });      
    }

    return (
        <div className="home-container">

            <Header />
            <FilterBar />
            <AddTaskForm add={addTask} />
            <TaskList 
            tasks={tasks}
             onDelete={deleteTask}
             onToggle={onToggle}
              />
            <div className="undo-redo-buttons">
                <UndoRedoButton label="Undo" />
                <UndoRedoButton label="Redo" />
            </div>
        </div>
    )
}