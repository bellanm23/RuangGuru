// src/Detail.js
import { useEffect, useState } from "react";
import { Box, Heading, Image, Text, Button, VStack } from "@chakra-ui/react";
import { Link, useParams, useNavigate } from "react-router-dom";

const Detail = () => {
  const [cardInfo, setCardInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const { cardId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCardInfo = async () => {
      try {
        const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?id=<card id>');
        const data = await response.json();
        setCardInfo(data.data[0]);
      } catch (error) {
        console.error("Error fetching card details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCardInfo();
  }, [cardId]);

  const renderCardSets = () => {
    if (cardInfo.card_sets) {
      return cardInfo.card_sets.map((set, index) => (
        <Box key={index} p={2} borderWidth="1px" borderRadius="lg">
          <Text>Name: {set.set_name}</Text>
          <Text>Code: {set.set_code}</Text>
          <Text>Rarity: {set.set_rarity}</Text>
          <Text>Price: {set.set_price}</Text>
        </Box>
      ));
    }

    return <Text>Loading...</Text>;
  };

  const renderCardDetail = () => {
    if (cardInfo) {
      return (
        <VStack spacing={4} align="start">
          <Box>
            <Image src={cardInfo.card_images[0].image_url} alt={cardInfo.name} />
            <Heading as="h2" size="md">
              {cardInfo.name}
            </Heading>
            <Text>
              Level: {cardInfo.level} {cardInfo.attribute}
            </Text>
            <Text>
              ATK/{cardInfo.atk} DEF/{cardInfo.def}
            </Text>
            <Text>
              [ {cardInfo.type} / {cardInfo.race} ]
            </Text>
            <Text>{cardInfo.desc}</Text>
          </Box>
          <Box>
            <Heading as="h2" size="md">
              Card Sets
            </Heading>
            {renderCardSets()}
          </Box>
        </VStack>
      );
    }

    return <Text>Loading...</Text>;
  };

  return (
    <Box>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <Button onClick={() => navigate("/")} colorScheme="cyan" variant="solid" size="sm" mt={4}>
            Back
          </Button>
          {renderCardDetail()}
        </>
      )}
    </Box>
  );
};

export default Detail;
