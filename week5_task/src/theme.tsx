import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        bgGradient: "linear(to-r, #1a202c, #2d3748)",
        color: "white",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        transition: "background-color 0.3s ease, color 0.3s ease",
        lineHeight: "1.5",
        overflowY: "scroll",
        textRendering: "optimizeLegibility",
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
        backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px)`, // Added background pattern here
        backgroundSize: `40px 40px`,
      },
      html: {
        height: "100%",
        scrollBehavior: "smooth",
      },
      "#root": {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      },
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
      "::-webkit-scrollbar": {
        width: "8px",
      },
      "::-webkit-scrollbar-thumb": {
        background: "linear-gradient(to bottom,rgb(196, 2, 2),rgb(194, 24, 36))",
        borderRadius: "4px",
        border: "2px solid #2d3748",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "linear-gradient(to bottom,rgb(195, 23, 23),rgb(187, 28, 38))",
      },
      "::-webkit-scrollbar-track": {
        background: "#2d3748",
      },
      "*:focus": {  
        outline: "none",
        boxShadow: "0 0 0 2px rgba(66, 153, 225, 0.5)",
      },
      "a:hover, button:hover, [role='button']:hover": {
        transition: "transform 0.2s ease-in-out",
        transform: "scale(1.02)",
      },
      ".chakra-card, .chakra-container, .chakra-modal__content": {
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        transition: "box-shadow 0.3s ease",
      },
      ".chakra-card:hover, .chakra-container:hover, .chakra-modal__content:hover": {
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.4)",
      },
      "*, *::before, *::after": {
        transition: "background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
      },
    },
  },
  fonts: {
    heading: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    body: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    mono: "'Courier New', Courier, monospace",
  },
  colors: {
    brand: {
      50: "#e6f7ff",
      100: "#b3e0ff",
      200: "#80ccff",
      300: "#4dabff",
      400: "#1e90ff",
      500: "#187bcd",
      600: "#1565c0",
      700: "#114996",
      800: "#0d356e",
      900: "#09244c",
    },
  },
  breakpoints: {
    sm: "480px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  components: {
    Button: {
      variants: {
        "brand-gradient": {
          bgGradient: "linear(to-r, brand.400, brand.300)",
          color: "white",
          _hover: {
            bgGradient: "linear(to-r, brand.300, brand.200)",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
          },
          _active: {
            bgGradient: "linear(to-r, brand.500, brand.400)",
          },
        },
      },
    },
    Link: {
      baseStyle: {
        color: "brand.300",
        _hover: {
          textDecoration: "underline",
          color: "brand.200",
        },
      },
    },
    Card: {
      baseStyle: {
        background: "#283142",
      },
    },
  },
});

export default theme;