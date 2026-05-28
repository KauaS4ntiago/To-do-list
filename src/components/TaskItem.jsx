function TaskItem({ task , onToggle , onDelete}){
    return (
            <li>
            <input type="checkbox" checked={task.done} onChange={() => onToggle(task.id)}/>  
            {task.text}
            <button onClick={() => onDelete(task.id)}>Remover</button>
            </li>
    )
}


export default TaskItem