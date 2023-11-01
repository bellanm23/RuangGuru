import { useState } from "react";

function Task1() {
  return (
  <div className="basic_component">
    <h1>Halo dunia!</h1>
  </div>
  )
}

function Task1_1(props) {
  return <h1>{props.name}</h1>
}

function Task2() {
  const [elemen, setElemen] = useState("Klik tombol di bawah");

  return (
    <div>
      <h1>{elemen}</h1>  {/* TODO: replace this */}
        <button onClick={() => setElemen("Tombol telah di-klik!")}>  {/* TODO: replace this */}
        Klik saya!
      </button>
    </div>
  );
}

const students = [
  {
    name: "John Doe",
    age: 20,
    dropout: false,
  },
  {
    name: "Jane Doe",
    age: 21,
    dropout: true,
  },
  {
    name: "John Smith",
    age: 22,
    dropout: false,
  },
  {
    name: "Jane Smith",
    age: 23,
    dropout: true,
  },
];

function Task3() {
  return (
  <div>
    {
      students.map((student) =>( 
      <h2>{student.name} - {student.age}</h2>
      ))
    }
  </div>
  )
}

function Task3_1() {
  const siswa = students.filter((dropout) => dropout.dropout === false);
  return (
    <div>
      {
        siswa.map((siswa) => (
          <h2>{siswa.name} - {siswa.age}</h2>
        ))
      }
    </div>
  )
}

function Task4() {
  // const [isElemen, setElemen] = useState(true);

  // return (
  //   <div>
  //     {isElemen ? <p><p>Klik tombol di-bawah untuk menghapus elemen ini</p></p> : ""}

  //     <button onClick={() => setElemen(!isElemen)}>Hapus</button>  {/* TODO: replace this */}

  //   </div>
  // );
  const [isElemen, setElemen] = useState(true);

  return (
    <div>
      {isElemen && <p>Klik tombol di-bawah untuk menghapus elemen ini</p>}

      <button onClick={() => setElemen(!isElemen)}>Hapus</button>  {/* TODO: replace this */}

    </div>
  );
}




export { Task1, Task1_1, Task2, Task3, Task3_1, Task4 };
