import TaskItem from './TaskItem'

function TaskList({ tasks , onToggle, onDelete}) {
    return (
        <ul>
            {tasks.map((task) => <TaskItem onToggle={onToggle} onDelete={onDelete} key={task.id} task={task}/>)}
        </ul>
    )
}


export default TaskList