import Header from './components/Header'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
const [tasks, setTasks] = useState([
  { id: 1, text: 'Learn JSX', done: false },
  { id: 2, text: 'Learn components', done: true },
  { id: 3, text: 'Learn props', done: true },
])
  return (
      <div className="container">
        <Header title="Minhas tarefas"/>
        {tasks.map((task) => <p key={task.id}>{task.text}</p>)}
        <Footer name="Kauã"/>
      </div>  
  )
}

export default App