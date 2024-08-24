import {
  Box,
  Button,
  Grid,
  HStack,
  VStack,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";

export default function Room() {
  const gray = useColorModeValue("gray.600", "gray.300");
  return (
    <VStack alignItems={"flex-start"}>
      <Box position={"relative"} overflow={"hidden"} rounded="2xl" mb={3}>
        <Image
          minH="280"
          src="https://www.coralmagazine.com/wp-content/uploads/2023/02/Paracanthurus-hepatus-1-of-1-14.jpg"
        />
        <Button
          variant={"unstyled"}
          position={"absolute"}
          color="white"
          top={0}
          right={0}
        >
          <FaRegHeart size="20px" />
        </Button>
      </Box>
      <Box>
        <Grid gap={1} templateColumns={"6fr 1fr"}>
          <Text as="b" noOfLines={1} fontSize="md">
            jasdlkfjlksadjlkfjklsadjflkjskdaljflkjaslk
            djfkljasdklfjklajsdklfjklas
          </Text>
          <HStack spacing={1}>
            <FaStar size={15} />
            <Text>5.0</Text>
          </HStack>
        </Grid>
        <Text fontSize={"sm"} color={gray}>
          Seoul, S, Korea
        </Text>
      </Box>
      <Text fontSize={"sm"} color={gray}>
        <Text as="b">$72</Text> / night
      </Text>
    </VStack>
  );
}
