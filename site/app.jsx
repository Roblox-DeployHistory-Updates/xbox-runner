import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { motion } from "framer-motion";
import {
  ChakraProvider,
  SimpleGrid,
  Box,
  Image,
  Text,
  useDisclosure,
  Center,
  useColorMode,
  IconButton,
  extendTheme,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

function RobloxXboxReleases() {
  const [clients, setClients] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    fetch("./clients.json")
      .then((res) => res.json())
      .then((data) => setClients(data));
  }, []);

  const formatSize = (bytes) => `${(bytes / (1024 * 1024)).toFixed(2)} MB`;

  // Open modal and set index
  function openModal(index) {
    setOpenIndex(index);
    onOpen();
  }

  // Close modal and clear index
  function closeModal() {
    setOpenIndex(null);
    onClose();
  }

  const selectedClient = openIndex !== null ? clients[openIndex] : null;

  // Inline SVG icons for sun and moon
  const SunSVG = (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="5" />
      <g>
        <line x1="12" y1="2" x2="12" y2="5" stroke="currentColor" strokeWidth="2" />
        <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="2" />
        <line x1="2" y1="12" x2="5" y2="12" stroke="currentColor" strokeWidth="2" />
        <line x1="19" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2" />
        <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" stroke="currentColor" strokeWidth="2" />
        <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" />
        <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" stroke="currentColor" strokeWidth="2" />
        <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" />
      </g>
    </svg>
  );
  const MoonSVG = (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
    </svg>
  );

  return (
    <>
      {/* Header */}
      <Box
        as="header"
        bg={colorMode === "dark" ? "gray.800" : "white"}
        color={colorMode === "dark" ? "white" : "gray.900"}
        py={4}
        px={6}
        mb={2}
        borderRadius="xl"
        textAlign="center"
      >
        <Text
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          color={colorMode === "dark" ? "gray.300" : "blue.700"}
          mb={1}
        >
          Roblox Xbox Releases
        </Text>
        <Text fontSize="md" color={colorMode === "dark" ? "gray.400" : "gray.500"} mb={1}>
          made by yakov &lt;3
        </Text>
        <Box mt={1} display="flex" alignItems="center" justifyContent="center" gap={2}>
          <a
            href="https://github.com/Roblox-DeployHistory-Updates/xbox-runner"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Box
              as="span"
              display="inline-flex"
              alignItems="center"
              bg={colorMode === "dark" ? "blue.900" : "blue.50"}
              px={3}
              py={1}
              borderRadius="md"
              fontWeight="semibold"
              color={colorMode === "dark" ? "blue.200" : "blue.700"}
              border="1px solid"
              borderColor={colorMode === "dark" ? "blue.800" : "blue.200"}
              _hover={{ bg: colorMode === "dark" ? "blue.800" : "blue.100" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
                style={{ marginRight: "8px" }}
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              GitHub
            </Box>
          </a>
          <a
            href="https://ko-fi.com/Yakov5776"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Box
              as="span"
              display="inline-flex"
              alignItems="center"
              bg={colorMode === "dark" ? "pink.900" : "pink.50"}
              px={3}
              py={1}
              borderRadius="md"
              fontWeight="semibold"
              color={colorMode === "dark" ? "pink.200" : "pink.700"}
              border="1px solid"
              borderColor={colorMode === "dark" ? "pink.800" : "pink.200"}
              _hover={{ bg: colorMode === "dark" ? "pink.800" : "pink.100" }}
              ml={0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
                style={{ marginRight: "8px" }}
              >
                <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"/>
              </svg>
              Support me
            </Box>
          </a>
          <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === "dark" ? SunSVG : MoonSVG}
            onClick={toggleColorMode}
            size="sm"
            variant="ghost"
            color={colorMode === "dark" ? "gray.300" : "gray.600"}
          />
        </Box>
      </Box>

      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
        spacing={6}
        p={6}
      >
        {clients.map((client, index) => (
          <Box
            key={client.versionName}
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            cursor="pointer"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            _hover={{ shadow: "2xl" }}
            onClick={() => openModal(index)}
            p={4}
            textAlign="center"
          >
            <motion.div whileHover={{ scale: 1.1 }}>
              <Box
                borderRadius="2xl"
                overflow="hidden"
                mx="auto"
                mb={4}
                boxSize="96px"
              >
                <Image
                  src={client.appIconUrl}
                  alt="App Icon"
                  objectFit="cover"
                  boxSize="100%"
                />
              </Box>
            </motion.div>
            <Text fontWeight="semibold" fontSize="sm" isTruncated>
              {client.versionName}
            </Text>
            <Text fontSize="xs" color="gray.500">
              {new Date(client.updatedOn).toLocaleDateString()}
            </Text>
          </Box>
        ))}
      </SimpleGrid>

      {/* Modal */}
      {selectedClient && (
        <Modal isOpen={isOpen} onClose={closeModal} isCentered size="md">
          <ModalOverlay />
          <ModalContent p={6} borderRadius="xl">
            <ModalCloseButton />
            <ModalBody textAlign="center">
              <Box
                borderRadius="2xl"
                overflow="hidden"
                mx="auto"
                mb={4}
                boxSize="128px"
              >
                <Image
                  src={selectedClient.appIconUrl}
                  alt="App Icon"
                  objectFit="cover"
                  boxSize="100%"
                />
              </Box>
              <Text fontWeight="bold" fontSize="lg" mb={2}>
                {selectedClient.versionName}
              </Text>
              <Text
                fontSize="sm"
                color={colorMode === "dark" ? "gray.300" : "gray.600"}
                mb={1}
              >
                Updated On: {new Date(selectedClient.updatedOn).toLocaleString()}
              </Text>
              <Text
                fontSize="sm"
                color={colorMode === "dark" ? "gray.300" : "gray.600"}
                mb={4}
              >
                File Size: {formatSize(selectedClient.xvcSize)}
              </Text>
              <Box
                as="a"
                href={selectedClient.xvcUrl}
                rel="noopener noreferrer"
                bg="blue.600"
                color="white"
                py={2}
                px={4}
                borderRadius="md"
                _hover={{ bg: "blue.700" }}
                display="inline-block"
                fontWeight="semibold"
              >
                Download XVC
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}

const config = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({ config });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <RobloxXboxReleases />
  </ChakraProvider>
);

export default RobloxXboxReleases;
