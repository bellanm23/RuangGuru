import { useEffect, useState } from "react";
import { Badge, Tr, Td, HStack, VStack, Heading, Box } from "@chakra-ui/react";

import { Image } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Table, Text } from "@chakra-ui/react";
import { Tbody } from "@chakra-ui/react";

const Detail = ({ pokemon }) => {
  return (
    <Box>
      {pokemon && (
        <Box role="pokemon-detail">
          {/* TODO: display pokemon name here */}
          {/* TODO: answer here */}
          <Heading as="h2" size="md">
            {pokemon.name}
          </Heading>
          

          {/* TODO: display pokemon type here */}
          {/* TODO: answer here */}
          <HStack>
            {pokemon.types.map((type) => (
              <Badge key={type.slot} colorScheme="purple">
                {type.type.name}
              </Badge>
            ))}
          </HStack>

          {/*Display Pokemon Imagae */}
          <HStack>
            <Image src={pokemon.sprites.front_default} alt="Front Default" />
            <Image src={pokemon.sprites.back_default} alt="Back Default" />
            <Image src={pokemon.sprites.front_shiny} alt="Front Shiny" />
            <Image src={pokemon.sprites.back_shiny} alt="Back Shiny" />
          </HStack>

          {/* TODO: render pokemon height, weight, base_experience, abilities, and stats here */}
          {/* TODO: answer here */}

          <VStack align="start">
            <Text>
              <strong>Height:</strong> {pokemon.height}
            </Text>

            <Text>
              <strong>Weight:</strong> {pokemon.weight}
            </Text>

            <Text>
              <strong>Abilities:</strong> {" "}
              {pokemon.abilities.map((ability) => ability.ability.name).join(", ")}
            </Text>

            <Table>
              <Tbody>
                {pokemon.stats.map((stat) => (
                  <Tr key={stat.stat.name}>
                    <Td>{stat.stat.name}</Td>
                    <Td>{stat.base_stat}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </VStack>
        </Box>
      )}
    </Box>
  );
};
const Page = () => {
  //TODO: read pokemonId from parameter
  const { pokemonId } = useParams(); // TODO: replace this
  // { pokemonId: 100 }
  const [pokemon, setPokemon] = useState(null);

  const fetchPokemon = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const data = await response.json();
    setPokemon(data);
  };

  useEffect(() => {
    // TODO: answer here
    fetchPokemon(pokemonId)
  }, [pokemonId]);

  return <Detail pokemon={pokemon} />;
};

export default Page;
