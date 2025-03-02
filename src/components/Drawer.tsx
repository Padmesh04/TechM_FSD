import { 
  Button, 
  Drawer as ChakraDrawer, // Renamed to avoid conflicts with file name
  DrawerBody, 
  DrawerContent, 
  DrawerHeader, 
  DrawerOverlay, 
  useDisclosure,
  List,
  ListItem,
  Flex,
  Image,
  Text,
  Box,
  Spinner,
  Center
} from "@chakra-ui/react";
import { FaGamepad } from "react-icons/fa"; // Gamepad icon for a stylish look
import React, { useEffect, useState } from "react";
import { getGenres, Genre } from "./Genres"; // Import from Genres.ts

interface GenreDrawerProps {
  onSelectGenre?: (genreId: number) => void;
}

function GenreDrawer({ onSelectGenre }: GenreDrawerProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
      const fetchGenres = async () => {
          setLoading(true);
          const genreData = await getGenres();
          setGenres(genreData);
          setLoading(false);
      };
      fetchGenres();
  }, []);

  const handleGenreClick = (genreId: number) => {
      if (onSelectGenre) {
          onSelectGenre(genreId);
      }
      onClose();
  };

  return (
      <>
          <Button 
              bgGradient="linear(to-r, blue.400, blue.600)" 
              _hover={{ bgGradient: "linear(to-r, blue.500, cyan.500)", transform: "scale(1.05)" }} 
              color="white" 
              onClick={onOpen} 
              leftIcon={<FaGamepad />}
              fontSize="lg"
              fontWeight="bold"
              px={6}
              py={3}
              borderRadius="lg"
              transition="all 0.2s ease-in-out"
          >
              Browse Genres
          </Button>
          
          <ChakraDrawer placement="left" onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent bg="gray.900" color="gray.100">
                  <DrawerHeader 
                      borderBottomWidth="1px" 
                      fontSize="2xl" 
                      fontWeight="bold" 
                      bgGradient="linear(to-r, blue.400, cyan.400)"
                      bgClip="text"
                  >
                      Game Genres 🎮
                  </DrawerHeader>
                  <DrawerBody padding={0}>
                      {loading ? (
                          <Center h="100px">
                              <Spinner color="blue.400" size="xl" />
                          </Center>
                      ) : (
                          <List spacing={0}>
                              {genres.map((genre) => (
                                  <ListItem 
                                      key={genre.id} 
                                      onClick={() => handleGenreClick(genre.id)}
                                      cursor="pointer"
                                      _hover={{ bg: "gray.700", transform: "scale(1.02)" }}
                                      transition="all 0.2s ease-in-out"
                                      borderBottomWidth="1px"
                                  >
                                      <Flex p={4} align="center">
                                          <Image 
                                              src={genre.image_background} 
                                              alt={genre.name}
                                              boxSize="65px"
                                              objectFit="cover"
                                              borderRadius="md"
                                              mr={4}
                                          />
                                          <Box>
                                              <Text fontWeight="bold" fontSize="lg" color="whiteAlpha.900">
                                                  {genre.name}
                                              </Text>
                                              <Text fontSize="sm" color="gray.400">
                                                  {genre.games_count.toLocaleString()} games
                                              </Text>
                                          </Box>
                                      </Flex>
                                  </ListItem>
                              ))}
                          </List>
                      )}
                  </DrawerBody>
              </DrawerContent>
          </ChakraDrawer>
      </>
  );
}

export default GenreDrawer;
