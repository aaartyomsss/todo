import React , {useState} from 'react'
import ToDoItem from './components/ToDoItem'
import ToDoInput from './components/ToDoInput'

const todoItems = [

  {
      name: "task 1",
      important: false,
      id: 0,
  },
  {
      name: "task 2",
      important: false,
      id: 1,
  },
  {
      name: "task 3",
      important: false,
      id: 2,
  },
  {
      name: "task 4",
      important: false,
      id: 3,
  },
  {
      name: "task 5",
      important: false,
      id: 4,
  },
]

const App = () => {
  const [todoValue, setToDoValue] = useState('')
  const [todos, setToDos] = useState(todoItems)
  const handleInputChange = (event) => {
    setToDoValue(event.target.value)
  }

  const addToDo = (event) => {
    event.preventDefault()
    const todo = {
      name: todoValue,
      done: false, 
      id: todos.length - 1
    }
    setToDos(todos.concat(todo))
    console.log(todos)
    setToDoValue('')

  }


  const completeToDo = (i) => {
    const newToDos = [...todos]
    newToDos.splice(i, 1)
    setToDos(newToDos)
  }

  const changeImportance = (i) => {
    const newToDos = [...todos]
    todos[i].important = !todos[i].important
    setToDos(newToDos)

  }
  
  const arrayOfItems = todos.map((item, i) => <ToDoItem todoName={item.name} key={i} important={item.important} i={i} completeToDo={completeToDo} changeImportance={changeImportance}/>)
  return (
    <div>
      <h1>ToDo List</h1>
      <form onSubmit={addToDo}>
        <ToDoInput value={todoValue} handleChange={handleInputChange}/>
        <button type="submit">Add ToDo</button>
      </form>
      <ul>
        {arrayOfItems}
      </ul>
    </div>
  );
}

export default App
