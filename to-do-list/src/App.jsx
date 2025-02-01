import './App.css'
import { useState } from 'react'

function App() {
  const [text, setText] = useState("")
  const [tasks, setTasks] = useState([])

  const handleAddTask = () => {
    if (text.trim() !== "") {
      setTasks([...tasks, text])
      setText("") // Clear input after adding
    }
  }

  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index)
    setTasks(newTasks)
  }

  return (
    <>
      <h1>TO DO LIST</h1>
      <input
        type="text"
        name="task"
        id="task"
        placeholder='Add a task'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      
      {tasks.map((task, index) => (
        <div className='task' key={index}>
          <p>{task}</p>
          <button onClick={() => handleRemoveTask(index)}>Remove</button>
        </div>
      ))}
    </>
  )
}

export default App
