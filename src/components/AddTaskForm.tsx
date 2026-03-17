import { useState } from 'react'
import './AddTaskForm.css'
export default function AddTaskForm({ add }) {

    const [title, setTitle] = useState('')

    function handleTitleChange(e: any) {
        setTitle(e.target.value)
    }

    function handleSubmit(e: any) {
        e.preventDefault();
        if (!title.trim()) return
        add(title.trim())
        setTitle('')  // clear input
    }

    return (
        <form onSubmit={handleSubmit} className="add-task-form">
            <input
                type="text"
                value={title}
                onChange={handleTitleChange}
                placeholder="Add new task..." />
            <button type="submit">Add</button>
        </form>
    )
}