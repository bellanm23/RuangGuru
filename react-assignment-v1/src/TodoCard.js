function TodoCard({todo}) {
  // TODO: answer here
  const handleClick = () => {
    return (`todo dengan id ${todo.id} telah di clicked`);
  };

  return (
    <div className="todo-card" onClick={handleClick}>
      <h2>{todo.title}</h2>
      <p>{todo.completed ? "Completed" : "Not Completed"}</p>
    </div>
  )
}

export default TodoCard