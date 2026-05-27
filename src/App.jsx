import Header from './components/Header'
import Footer from './components/Footer'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import { useState } from 'react'

function App() {

  const [tasks, setTasks] = useState([  
  { id: 1, text: 'Learn JSX', done: false },
  { id: 2, text: 'Learn components', done: true },
  { id: 3, text: 'Learn props', done: true },])

    function addTask(text) {
      const newTask = { id: Date.now(), text: text, done: false }
      setTasks([...tasks, newTask])
  }

  return (
      <div className="container">
        <Header title="Minhas tarefas"/>
        <TaskForm onAdd={addTask}/>
        <TaskList tasks={tasks}/>
        <Footer name="Kauã"/>
      </div>  
  )
}

export default App