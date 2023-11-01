function task1() {
  return fetch("http://localhost:3000") // TODO: replace this
}

async function task2() {
  const response = await fetch("http://localhost:3000/task2", {
    method: "PATCH",
  })
  return response.json();
}

function task3() {
  return fetch("http://localhost:3000/task3?user_id=3&role=admin", {
    method: "POST",
  })
}

function task4() {
  const data = {
    username: "admin",
    password: "password",
  };
  fetch("http://localhost:3000/task4", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  // .then((response) => response.json())
  // .then((json) => console.log(json));
}

export { task1, task2, task3, task4 };
