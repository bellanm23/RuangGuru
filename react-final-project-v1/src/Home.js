// TODO: answer herez
import { 
  SimpleGrid, 
  Container, 
  Select,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import Card from "./Cards";

function Home() {
  // TODO: answer here

  const[data, setData] = useState(null);

  const[loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg&level=4")
    .then((response) => response.json())
    .then(result => setData(result.data)) 
    .finally(() => setLoading(false))
  },[])

  if (loading) return <h2>Loading...</h2>

  function sortData(type) {
    // TODO: answer here
    if(type === "nama"){
      const sortingDatas = [...data].sort((a,b) => a.nama.localeCompare(b.nama))
      
      setData(sortingDatas)
    }
    else {
      const sortingDatas = [...data].sort((a,b) => a[type] > b[type] ? 1 : -1)
      
      setData(sortingDatas)
    }
  }

  return (
    <Container mx="auto" my={7} maxW="1000px">
      <Select name="sort" placeholder="Sort by" onChange={(e) => sortData(e.target.value)}>
        <option value="name">name</option>
        <option value="atk">attack</option>
        <option value="def">defence</option>
      </Select>
      {
        <SimpleGrid column="3" mt={5} spacingY="40px" spacingX="20px">
          {
            data.map(data => <Card card={data} />)
          }
        </SimpleGrid>
      }
    </Container>
  )
}

export default Home;
