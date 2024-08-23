import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root.tsx";
import React from "react";
import Home from "./routes/Home.tsx";
import NotFound from "./routes/NotFound.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            {
                path: "",
                element: <Home />
            }
        ]
    }
])

export default router