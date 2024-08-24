import {
  Box,
  Grid,
  Image,
  VStack,
  Text,
  HStack,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";

export default function Home() {
  return (
    <Grid
      mt={10}
      px={{
        sm: "1fr",
        md: "1fr 1fr",
        lg: "repeat(3, 1fr)",
        xl: "repeat(4, 1fr)",
        "2xl": "repeat(5, 1fr)",
      }}
      columnGap={4}
      rowGap={8}
      templateColumns={{
        base: "1fr",
        lg: "repeat(5, 1fr)",
      }}
    >
      {[
        1,
        23,
        12,
        3,
        21,
        3,
        213,
        12,
        ,
        1,
        1,
        11,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
      ].map((index) => (
        <VStack key={index} alignItems={"flex-start"}>
          <Box position={"relative"} overflow={"hidden"} rounded="2xl" mb={3}>
            <Image
              // h="280"
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
            <Text fontSize={"sm"} color="gray.600">
              Seoul, S, Korea
            </Text>
          </Box>
          <Text fontSize={"sm"} color="gray.600">
            <Text as="b">$72</Text> / night
          </Text>
        </VStack>
      ))}
    </Grid>
  );
}
