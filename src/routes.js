import React from "react";
import { Navigate } from 'react-router-dom';
import MainLayout from "./Layout/MainLayout";
import Account from "./component/Account";
import User from "./component/Account/users";
import Form from "./component/forms/form";
import TableTime from "./component/TimeKeeping/table";
import Configure from "./Configure/configure";
import Item from "./Item/item";
import Lotus from "./component/Lotus/lotus";
import Technosoft from "./component/Technosoft/technosoft";
import Monitor from "./component/Monitor/monior";
import Details from "./component/Account/users/detail";

const routes = [
    {
        path: 'app',
        element: <MainLayout/>,
        children: [
            {path: 'user', element: <Account/>},
            {path: 'monitor', element: <Monitor/>},
            {path: 'form', element: <Form/>},
            {path: 'TimeKeeping', element: <TableTime/>},
            {path: 'configuration', element: <Configure/>},
            {path: 'item', element: <Item/>},
            {path: 'lotus', element: <Lotus/>},
            {path: 'technosoft', element: <Technosoft/>},
            {path: 'detail', element: <Details/>}
        ]
    },
]

export default routes;