import { useEffect, useState } from "react";
import {
  Card,
  HStack,
  CardHeader,
  CardBody,
  Heading,
  Box,
  Badge,
  Button,
  CardFooter,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";
import { useSearchParams, useNavigate } from "react-router-dom";


const Pagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  let currentPage = searchParams.get("page");
  const Navigate = useNavigate();

  if (currentPage === null){
    currentPage = 1; // TODO: replace this
  }

  const moveTo = (direction) => {
    if (direction === "prev") {
      if(currentPage > 1) {
        Navigate(`/pokemon?page=${parseInt(currentPage) - 1}`);
      }
    } else if (direction === "next") {
      Navigate(`/pokemon?page=${parseInt(currentPage) + 1}`);
    }
  };

  return (
    <HStack direction='row' spacing={4}>
      {/* TODO: render Prev and Next button */}
      {/* TODO: answer here */}
      <Button onClick={() => moveTo("prev")} disabled={currentPage <= 1} colorScheme='cyan' variant='solid' size='sm'>
        Prev
      </Button>

      <Button onClick={() => moveTo("next")} colorScheme='cyan' variant='solid' size='sm'>
        Next
      </Button>
    </HStack>
  );
};

const PokemonList = ({ pokemons }) => {
  return (
    pokemons &&
    pokemons.length > 0 && (
      <Box role="pokemon-list">
        {pokemons.map((pokemon) => (
          <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
            <Card>
              <CardHeader>
                <Heading as="h3" size="md">
                  {pokemon.name}
                </Heading>
              </CardHeader>
              {/* TODO: render pokemon images & type here */}
              <CardBody display={"flex"}>
                <Image src={pokemon.sprites["front_default"]} alt="Front Default" />
                <Image src={pokemon.sprites["back_default"]} alt="Back Default" />
                <Image src={pokemon.sprites["front_shiny"]} alt="Front Shiny" />
                <Image src={pokemon.sprites["back_shiny"]} alt="Back Shiny" />
              </CardBody>

              <CardFooter>
                {pokemon.types.map((type) => (
                  <Badge key={type.slot} colorScheme="green" mr={1}>
                    {type.type.name}
                  </Badge>
                ))}
              </CardFooter>
            </Card>
          </Link>
        ))}
      </Box>
    )
  );
};
const Home = () => {
  //get list
  const fetchPokemons = async (page) => {
    //get pokemon list with image
    const displayPerPage = 20;
    const offset = (page - 1) * 20;
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${displayPerPage}&offset=${offset}`;

    const response = await fetch(url);
    const data = await response.json();
    const pokemonList = data.results.map(async (pokemon) => {
      const pokemonResponse = await fetch(pokemon.url);
      const pokemonData = await pokemonResponse.json();
      return pokemonData;
    });

    //set pokemonList to state
    setPokemons(await Promise.all(pokemonList));
  };

  const [pokemons, setPokemons] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const page = parseInt(searchParams.get("page") || 1);
    fetchPokemons(page);
  }, [searchParams]);

  return (
    <>
      <Heading as="h2" size="lg">
        Pokemon List
      </Heading>
      <Pagination />
      <PokemonList pokemons={pokemons} />
    </>
  );
};

export default Home;
