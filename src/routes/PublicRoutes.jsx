import MainLayout from '../layouts/MainLayout';
import Home from '../pages/main/Home';
import { ROUTES } from '../constants/routes';

export const PublicRoutes = {
  path: ROUTES.Entry,
  element: <MainLayout />,
  children: [
    {
      index: true,
      element: <Home />,
    },
  ],
};
