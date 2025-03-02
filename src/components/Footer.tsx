import { Box, Text, Center } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" py={4} bg="gray.900" color="gray.300" mt={8}>
      <Center>
        <Text 
          fontSize="sm" 
          fontWeight="medium" 
          letterSpacing="wide"
          _hover={{ color: "white", transition: "color 0.3s ease-in-out" }}
        >
          © {new Date().getFullYear()} Viper E-Sports. All Rights Reserved.
        </Text>
      </Center>
    </Box>
  );
};

export default Footer;
