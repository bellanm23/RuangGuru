import { useEffect, useState } from "react";
import "./App.css";
import TodoCard from "./TodoCard";
// TODO: answer here

const App = () => {
  // TODO: answer here
  // const url = "https://jsonplaceholder.typicode.com/todos";
  
  const [todis, setTodis] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => setTodis(data));
  }, []);

  if (todis === null) {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      {todis.map((todo) =>(
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default App;