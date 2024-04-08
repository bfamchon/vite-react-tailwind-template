import { AppStore } from '@/create-store';
import { AppRouter } from '@/router';
import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

export const Provider = ({ router, store }: { router: AppRouter; store: AppStore }) => (
  <ReduxProvider store={store}>
    <RouterProvider router={router} />
  </ReduxProvider>
);
