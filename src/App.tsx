import { ChakraProvider, Box, Heading, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import GameList from './components/GameList';
import theme from './theme';  // Custom theme (Optional for extended styling)
import Sidebar from './components/sidebar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <ChakraProvider theme={theme}>
      <Box 
        minH="100vh" 
        bgGradient="linear(to-br, gray.900, blackAlpha.800)" 
        color="white" 
        p={4}
      >
        <Flex direction={{ base: 'column', md: 'row' }} minH="100vh">
          {/* Sidebar Section */}
          <Box 
            as="aside" 
            width={{ base: '100%', md: '250px' }} 
            bg="gray.800" 
            p={4} 
            borderRadius="md" 
            boxShadow="lg"
          >
            <Sidebar /> {/* Include your Sidebar component here */}
          </Box>

          {/* Main Content Section */}
          <Box 
            flex="1" 
            p={4} 
            bgGradient="linear(to-br, gray.900, blackAlpha.800)" 
            borderRadius="md"
          >
            {/* Header Section */}
            <Heading 
              as="h1" 
              textAlign="center" 
              fontSize={{ base: '2xl', md: '4xl' }} 
              fontWeight="bold" 
              mb={6} 
              bgGradient="linear(to-r, blue.400, cyan.400)" 
              bgClip="text"
            >
              🎮 Welcome to Game Store
            </Heading>

            {/* Game List Section */}
            <GameList />
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
