import React from 'react';
import {
    BrowserRouter,
    Route,
    Routes,
    RouteProps,
    Navigate
} from 'react-router-dom';

import { Layout } from "components/molecule";

import {
    RootPage
} from "pages/v1";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/index.scss';

type RoutesProp = {
    [key: string]: RouteProps[];
};

export const routes: RoutesProp = {
    v1: [
        { path: '/', element: <RootPage />}
    ]
};

const routeList: React.ReactElement[] = [];

Object.entries(routes).forEach(([key, value]) =>
    value.forEach((route) => {
        routeList.push(
            <Route key={`/${key}${route.path}`} path={`/${key}${route.path}`} element={route.element} />
        );
    }),
);

const RootRouter = (): React.ReactElement => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    {routeList}
                    <Route path="*" element={<Navigate replace to="/v1/" />}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
};

export default RootRouter;
