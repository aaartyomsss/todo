import React , {useState, useEffect} from 'react'
import ToDoItem from './components/ToDoItem'
import ToDoInput from './components/ToDoInput'
import nodeServices from './services/promises'




const App = () => {
  const [todoValue, setToDoValue] = useState('')
  const [todos, setToDos] = useState([])
  const handleInputChange = (event) => {
    setToDoValue(event.target.value)
  }

  // Getting all todos from the server
  
  useEffect(() => {
    nodeServices
    .getAll()
    .then(todos => {
      console.log(todos)
      setToDos(todos)
    })
  }, [])


  // Adding todos
  const addToDo = (event) => {
    event.preventDefault()
    const todo = {
      todo: todoValue,
      done: false, 
    }
    
    nodeServices
    .addTodo(todo)
    .then(serverTodo => {
      console.log(serverTodo)
      setToDos(todos.concat(serverTodo))
      setToDoValue('')
    })
    .catch(e => console.log(e))

    console.log(todos)
    setToDoValue('')

  }

  // Completing / Deleting todo
  // TODO Add functionality for deleting todo
  const completeToDo = (i) => {
    const newToDos = [...todos]
    newToDos.splice(i, 1)
    setToDos(newToDos)
  }

  // Changing importance of todo
  const changeImportance = (i) => {
    const newToDos = [...todos]
    newToDos[i].important = !newToDos[i].important
    nodeServices.updateTodo(newToDos[i].id, newToDos[i])
      .then(res => {
        console.log(res)
        setToDos(newToDos)
      })

  }
  
  const arrayOfItems = todos.map((item, i) => <ToDoItem todoName={item.todo} key={i} important={item.important} i={i} completeToDo={completeToDo} changeImportance={changeImportance}/>)
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
