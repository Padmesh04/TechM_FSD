import React, { useState } from "react";
import logo from "../assets/gaminglogo.jpg"; // Adjust the path if necessary
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
  IconButton,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { SearchIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

interface NavbarProps {
  onSearch: (searchTerm: string) => void;
  onResetFilter?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch, onResetFilter }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleResetFilter = () => {
    if (onResetFilter) {
      onResetFilter();
    }
  };

  return (
    <Box
      as="nav"
      py={3}
      px={6}
      bgGradient={
        colorMode === "dark"
          ? "linear(to-r, gray.900, gray.800)"
          : "linear(to-r, blue.500, blue.400)"
      }
      borderBottomWidth="1px"
      boxShadow="md"
      position="sticky"
      top={0}
      zIndex={10}
    >
      <Flex align="center" justify="space-between">
        {/* Left Section - Logo */}
        <Flex align="center" cursor="pointer" onClick={handleResetFilter}>
          <Image
            src={logo}
            alt="Dragon E-Sports"
            boxSize="50px"
            borderRadius="full"
            transition="transform 0.3s"
            _hover={{ transform: "scale(1.1)" }}
            objectFit="contain"
          />
          <Text
            fontSize="xl"
            fontWeight="bold"
            ml={3}
            color={colorMode === "dark" ? "white" : "gray.100"}
            textShadow="1px 1px 2px rgba(0, 0, 0, 0.2)"
          >
          Luffy E-Sports
          </Text>
        </Flex>

        {/* Center Section - Search Bar */}
        <Flex flex="1" justify="center">
          <InputGroup maxW={{ base: "100%", md: "400px" }}>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
              placeholder="Search games..."
              value={searchTerm}
              onChange={handleSearch}
              borderRadius="full"
              bg={colorMode === "dark" ? "gray.700" : "white"}
              color={colorMode === "dark" ? "white" : "gray.900"}
              _placeholder={{ color: "gray.400" }}
              width="100%"
              boxShadow="sm"
              _focus={{ boxShadow: "0 0 8px rgba(0, 150, 255, 0.7)" }}
            />
          </InputGroup>
        </Flex>

        <Spacer />

        {/* Right Section - Dark Mode Toggle */}
        <IconButton
          aria-label="Toggle dark mode"
          icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
          onClick={toggleColorMode}
          ml={4}
          size="md"
          variant="ghost"
          color={colorMode === "dark" ? "yellow.400" : "blue.800"}
          _hover={{ transform: "scale(1.1)", transition: "0.2s ease-in-out" }}
        />
      </Flex>
    </Box>
  );
};

export default Navbar;
