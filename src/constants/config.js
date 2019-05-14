// export const API_URL = 'http://localhost:4000';
export const API_URL = 'https://localhost:90/api';
export const PAGE = {
    'dashboard' : {
        'baseUrl' : 'dashboard',
        'pageHeader' : {
            'page': 'Dashboard',
            'icon': 'fa fa-dashboard'
        },
        'description' : '',
        'level' : {
            'url' : '/',
            'pageHeader' : {
                'page': '',
                'parent': 'Dashboard'
            },
            'endPoint' : {},
            'data' : {}
        }
    },
    'user' : {
        'baseUrl' : 'user-management',
        'pageHeader' : {
            'page': 'User Management',
            'icon': 'fa fa-users'
        },
        'description' : '',
        'level' : {
            'url' : '/user-management',
            'pageHeader' : {
                'page': 'Search',
                'parent': 'User Management'
            },
            'endPoint' : {
                'url' : '/view',
                'pageHeader' : {
                    'page': 'View',
                    'parent': 'Search'
                },
                'endPoint' : {
                    'url' : '',
                    'pageHeader' : {},
                    'endPoint' : {},
                    'data' : {
                        
                    }
                },
                'data' : {}
            },
            'data' : {}
        }
    },
    'config' : {
        'baseUrl' : 'config',
        'pageHeader' : {
            'page': 'System Configuration',
            'icon': 'fa fa-wrench'
        },
        'description' : '',
        'level' : {
            'url' : '/config',
            'pageHeader' : {
                'page' : 'Search',
                'parent': 'System Configuration'
            },
            'endPoint' : {
                'url' : '/view',
                'pageHeader' : {
                    'page': 'View',
                    'parent': 'Search'
                },
                'endPoint' : {
                    'url' : '',
                    'pageHeader' : {},
                    'endPoint' : {},
                    'data' : {
                        
                    }
                },
                'data' : {}
            },
            'data' : {}
        }
    }
}