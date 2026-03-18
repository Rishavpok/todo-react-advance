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

    const [type, setType] = useState('all')
    const [sortBy, setSortBy] = useState('date')

    function filterTask(type: string) {
        setType(type)
    }

    function sortTask(type : string) {
         setSortBy(type)
    }

    const filteredTasks = tasks.filter(task => {
        if (type === 'completed') return task.completed;
        if (type === 'pending') return !task.completed;
        return true;
    });

    function addTask(title: string) {
        dispatch({
            type: 'add',
            payload: title
        })
    }

    function deleteTask(id: number) {
        dispatch({ type: 'delete', payload: id });
    }

    function onToggle(event: boolean, id: number) {
        dispatch({ type: 'toggle', payload: id });
    }

    return (
        <div className="home-container">

            <Header />
            <FilterBar type={type} filterTask={filterTask} />
            <AddTaskForm add={addTask} />
            <TaskList
                tasks={filteredTasks}
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