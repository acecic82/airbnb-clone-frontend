import {
  Box,
  Button,
  HStack,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import { FaAirbnb, FaMoon } from "react-icons/fa";
import LoginModal from "./LoginModal.tsx";

export default function Root() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box>
      <HStack
        justifyContent={"space-between"}
        py={5}
        px={10}
        borderBottomWidth={1}
      >
        <Box color={"red.500"}>
          <FaAirbnb size={"48"} />
        </Box>
        <HStack spacing={2}>
          <IconButton
            aria-label="Toggle dark mode"
            variant={"ghost"}
            icon={<FaMoon />}
          />
          <Button onClick={onOpen}>Log in</Button>
          <Button colorScheme="red">Sign up</Button>
        </HStack>
        <LoginModal isOpen={isOpen} onClose={onClose} />
      </HStack>
      <Outlet />
    </Box>
  );
}
