import React from 'react';
import MasterPage from './pages/master-page/master.page';
import NotFoundPage from './pages/not-found-page/not-found.page';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <MasterPage page='dashboard' />
    },
    {
        path: '/user-management',
        exact: false,
        main: () => <MasterPage page='user-management'/>
    },
    {
        path: '/config',
        exact: false,
        main: () => <MasterPage page='config' />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
];

export default routes;