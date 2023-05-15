import { createBrowserRouter } from 'react-router-dom';
import LayoutMain from '@layouts/layout-main.tsx';
import PageHome from '@pages/home';
import PageUsers from '@pages/users';
import Page404 from '@pages/404';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutMain />,
        children: [
            {
                path: '/',
                element: <PageHome />,
            },
            {
                path: '/users',
                element: <PageUsers />,
            },
            {
                path: '*',
                element: <Page404 />,
            },
        ],
    },
]);

export default router;
