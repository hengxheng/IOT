import Home from './public/src/js/pages/HomePage';
import LED from './public/src/js/pages/LEDPage';
import Device from './public/src/js/pages/DevicePage';
import Terminal from './public/src/js/pages/TerminalPage';

const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/led',
        exact: true,
        component: LED
    },
    {
        path: '/devices',
        exact: true,
        component: Device
    },
    {
        path: '/device/:name',
        component: Terminal,
        fetchInitialData: (path = '') => path.split('/').pop()
    }
];

export default routes;