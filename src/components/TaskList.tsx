import type { Task } from '../types/task'
import TaskItem from './TaskItem'
import './TaskList.css'

interface TaskListProps {
    tasks : Task[]
     onDelete:(id : number) => void
    onToggle: (val: boolean, id: number) => void
}

export default function TaskList({ tasks , onDelete , onToggle } : TaskListProps ) {
    return (
        <div className="task-list">
              {
                !tasks.length ? <p>No task added</p>  
                : 
                ( tasks.map((task:Task) => <TaskItem task={task} onDelete={onDelete} onToggle={onToggle} /> ) )
              }
        </div>
    )
}

