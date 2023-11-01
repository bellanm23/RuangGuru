import { useState, useEffect } from "react";

const App = () => {
  const url = "https://ghibliapi.fly.dev/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49";
  
  // state untuk menyimpan data
  const [data, setData] = useState(null);

  // state untuk menyimpan status loading
  const [loading, setLoading] = useState(true);
  
  const[filter, setFilter] = useState("All");

  const filters = {
    All: url,
    Basic: `${url}?fields=title,description`,
    "Basic with Creator": `${url}?fields=title,description,director,producer`
  };

  // useEffect akan dijalankan ketika komponen pertama kali di-mount
  useEffect(() => {
    setLoading(true)
    fetch(filters[filter])
    .then((response) => response.json())
    .then((data) => {
      setData(data);
      setLoading(false);
    })
    .catch((error) => console.log(error));
  }, [filter])

  
  // jika sedang loading, tampilkan loading
  if (loading) return <h2>Loading...</h2>;
  
  // jika terjadi error, tampilkan error
  // if (error) return "Error!";
  
  // Jika data sudah ada, tampilkan data
  return (
  <div>
    <select onChange={(e) => setFilter(e.target.value)}>
      <option value="All">All</option>
      <option value="Basic">Basic</option>
      <option value="Basic with Creator">Basic with Creator</option>
    </select>
    {
      filter === "All" ? (<img src={data.image} alt=" " />): null
    }
    <h2>{data.title}</h2>
    {
      filter === "All" ? (
      <>
        <h4>{data.original_title}</h4>
        <p>{data.release_date}</p>
        <p>Rating: {data.rt_score}</p>
      </>
      ) : null
    }
    {
      filter === "All" || filter === "Basic with Creator" ? (
        <>
          <p>Director: {data.director}</p>
          <p>Producer: {data.producer}</p>
        </>
      ) : null
    }
    <p>{data.description}</p>
  </div>
  );
};

export default App;