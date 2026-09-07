import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
  const heading = "To Do App";
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Go to market",
      isCompleted: false
    },
    {
      id: 2,
      text: "Meet a friend",
      isCompleted: false
    },
    {
      id: 3,
      text: "Talk about course",
      isCompleted: false
    }
  ])

  return (
    <div>
      {/* <Counter /> */}
      <h3>{heading} - {9 + 19}</h3>
      <form action="">
        <input type="text" placeholder="Enter todo" />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {
          todos.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default App;