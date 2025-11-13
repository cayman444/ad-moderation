import { Button } from 'antd';
import { createBrowserRouter, redirect } from 'react-router-dom';

export const ROUTES_PATHS = {
  HOME: '/',
  AD_LIST: '/list',
  AD_DETAILS: '/item/:id',
  MODERATOR_STATS: '/stats',
} as const;

export const router = createBrowserRouter([
  {
    path: ROUTES_PATHS.HOME,
    loader: () => redirect(ROUTES_PATHS.AD_LIST),
  },
  {
    path: ROUTES_PATHS.AD_LIST,
    element: (
      <div>
        ad list <Button type="primary">button</Button>
      </div>
    ),
  },
  {
    path: ROUTES_PATHS.AD_DETAILS,
    element: <div>details ad</div>,
  },
  {
    path: ROUTES_PATHS.MODERATOR_STATS,
    element: <div>stats</div>,
  },
  { path: '*', element: <div>Not found page</div> },
]);
