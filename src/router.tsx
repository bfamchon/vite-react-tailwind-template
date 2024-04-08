import { Home } from '@/pages/Home';
import { Sinister } from '@/pages/Sinister';
import { createBrowserRouter } from 'react-router-dom';

export const createRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/declarer-sinistre',
      element: <Sinister />
    }
  ]);

export type AppRouter = ReturnType<typeof createRouter>;
