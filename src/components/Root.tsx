import {
  Box,
  Button,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import { FaAirbnb, FaLock, FaMoon, FaUserNinja } from "react-icons/fa";
import SocialLogin from "./SocialLogin.tsx";

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
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Log in</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack>
                <InputGroup>
                  <InputLeftElement
                    children={
                      <Box color="gray.500">
                        <FaUserNinja />
                      </Box>
                    }
                  />
                  <Input variant={"filled"} placeholder={"Username"} />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement
                    children={
                      <Box color="gray.500">
                        <FaLock />
                      </Box>
                    }
                  />
                  <Input
                    type={"password"}
                    variant={"filled"}
                    placeholder={"Password"}
                  />
                </InputGroup>
                <Button mt={4} colorScheme={"red"} w="100%">
                  Log in
                </Button>
                <SocialLogin />
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </HStack>
      <Outlet />
    </Box>
  );
}
