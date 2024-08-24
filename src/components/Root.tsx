import { Box } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header.tsx";

export default function Root() {
  return (
    <Box>
      <Header />
      <Outlet />
    </Box>
  );
}
