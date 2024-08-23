import { Box } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <Box>
            I'm Root
            <Outlet />
        </Box>
    )
}