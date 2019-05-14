import React from 'react';

const menus = [
    {
        label: () => {
            return (<span>&nbsp;&nbsp;Dashboard</span>);
        },
        to: '/',
        exact: true,
        classTag: 'fa fa-dashboard',
        classTreeView: ''
    },
    {
        label: () => {
            return (<span>&nbsp;&nbsp;User Management</span>);
        },
        to: '/user-management',
        exact: false,
        classTag: 'fa fa-users',
        classTreeView: ''
    },
    {
        label: () => {
            return (<span>&nbsp;&nbsp;Config</span>);
        },
        to: '/config',
        exact: false,
        classTag: 'fa fa-wrench',
        classTreeView: ''
    }
];

export default menus;