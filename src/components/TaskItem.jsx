import { Trash2 } from 'lucide-react'

function TaskItem({ task , onToggle , onDelete}){
    return (
            <li className={ task.done ? 'task-item done' : 'task-item'}>
            <input type="checkbox" checked={task.done} onChange={() => onToggle(task.id)}/>  
            <span>{task.text}</span>
            <button onClick={() => onDelete(task.id)}><Trash2 size={16}/></button>
            </li>
    )
}


export default TaskItem