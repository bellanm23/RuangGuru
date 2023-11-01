// TODO: answer here
import React from "react";
import { Link } from "react-router-dom";
import {
  Box, 
  Image,
  Heading,
} from "@chakra-ui/react"

function Card({ card }) {
  return (
  <Link to={`card/${card.id}`}>
    <Box w="100%" h="auto" className="yugioh-card">
      <Image src={card.card_images[0].image_url} alt={card.name}/>

      <Heading as="h2" size="md" mt={5} textAlign="center">
        {card.name}
      </Heading>
    </Box>
  </Link>
  ) // TODO: replace this
}

export default Card;
