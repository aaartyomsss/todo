import React from 'react'
import ToDoItem from './components/ToDoItem'

const todoItems = [

  {
      name: "task 1",
      done: false,
      id: 0,
  },
  {
      name: "task 2",
      done: false,
      id: 1,
  },
  {
      name: "task 3",
      done: false,
      id: 2,
  },
  {
      name: "task 4",
      done: false,
      id: 3,
  },
  {
      name: "task 5",
      done: false,
      id: 4,
  },
]

const App = () => {
  
  const arrayOfItems = todoItems.map(item => <ToDoItem todoName={item.name}/>)
  console.log(arrayOfItems)
  return (
    <div>
      <h1>ToDo List</h1>
      <form>
        {arrayOfItems}
      </form>
    </div>
  );
}

export default App
