import React from 'react';
import {
    BrowserRouter,
    Route,
    Routes,
    Navigate
} from 'react-router-dom';

import { Layout } from "components/molecule";

import {
    RootPage,
    RegistryPage,
    WritePage,
    SavesPage,
    DetailPage,
} from "pages";

import 'react-toastify/dist/ReactToastify.min.css';
import 'styles/index.scss';

export const routes = [
    { path: '/', element: <RootPage />},
    { path: '/recent', element: <RootPage />},
    { path: '/follow', element: <RootPage />},
    { path: '/post/:postid', element: <DetailPage />},
    { path: '/registry', element: <RegistryPage /> },
    { path: '/write', element: <WritePage /> },
    { path: '/saves', element: <SavesPage /> }
];

const routeList: React.ReactElement[] = [];

routes.forEach((route) => {
    routeList.push(
        <Route key={`/${route.path}`} path={`/${route.path}`} element={route.element} />
    );
});

const RootRouter = (): React.ReactElement => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    {routeList}
                    <Route path="*" element={<Navigate replace to="/" />}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
};

export default RootRouter;
