import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Root from './Root';
import Home from './screens/Home';
import Coin from './screens/Coin';
import NotFound from './screens/NotFound';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: ':coinId',
                element: <Coin />
            }
        ],
        errorElement: <NotFound />
    }

]);

export default router;