// import { useState } from "react";

const App = () => {
  return (
    <div>
      <Student name={"Djarot Purnomo"} isStudent={true} />
    </div>
  );
};

function Student({ name, isStudent }) {
  let student = "";
  if (isStudent === true){
    student = "Student";
  } else {
    student = "Not student"
  }

  let names = name.split(" ")[0];

  return (
    <div>
      <p className="fullName">Name: {name}</p>
      <p className="firstName">First name: {names}</p>
      <p className="status">Status: {student}</p>
    </div>
  )
}

export default App;
export { Student };
