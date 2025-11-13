import {
  AdDetailsPage,
  AdListPage,
  ModeratorStatsPage,
  NotFoundPage,
} from '@/pages';
import { createBrowserRouter, redirect } from 'react-router-dom';
import { RootLayout } from '../layouts';

export const ROUTES_PATHS = {
  HOME: '/',
  AD_LIST: '/list',
  AD_DETAILS: '/item/:id',
  MODERATOR_STATS: '/stats',
} as const;

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        index: true,
        loader: () => redirect(ROUTES_PATHS.AD_LIST),
      },
      {
        path: ROUTES_PATHS.AD_LIST,
        element: <AdListPage />,
      },
      {
        path: ROUTES_PATHS.AD_DETAILS,
        element: <AdDetailsPage />,
      },
      {
        path: ROUTES_PATHS.MODERATOR_STATS,
        element: <ModeratorStatsPage />,
      },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
]);
