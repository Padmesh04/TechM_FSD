import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

interface GameCardProps {
  title: string;
  imageUrl: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, imageUrl }) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      borderRadius="lg"
      boxShadow="lg"
      p={4}
      transition="all 0.3s"
      _hover={{ transform: "scale(1.03)", shadow: "xl" }}
      bg={useColorModeValue("gray.50", "gray.800")}
      borderColor={useColorModeValue("gray.300", "gray.700")}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={imageUrl}
        alt={title}
        borderRadius="md"
        fallbackSrc="https://via.placeholder.com/200x300?text=No+Image"
      />

      <Stack spacing={3} p={3}>
        <CardBody>
          <Heading size="md" color={useColorModeValue("blue.500", "blue.300")}>
            {title}
          </Heading>
          <Text py="2" fontSize="sm" color={useColorModeValue("gray.600", "gray.300")}>
            A popular video game from the RAWG database. Check out the latest
            details and updates!
          </Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="teal" size="sm">
            View Details
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default GameCard;