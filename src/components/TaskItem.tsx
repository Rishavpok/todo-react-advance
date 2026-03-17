import type { Task } from '../types/task';
import './TaskItem.css'

interface TaskItemProps {
    task: Task
    onDelete: (id: number) => void
    onToggle: (val: boolean, id: number) => void
}

export default function TaskItem({ task, onDelete, onToggle }: TaskItemProps) {


    return (
        <div className={`task-item ${task.completed ? 'completed' : ''}`}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onToggle(e.target.checked, task.id)}
            />
            <span className="task-title">{task.title}</span>
            <button className="delete-btn" type='button' onClick={() => onDelete(task.id)} >Delete</button>
        </div>
    )
}