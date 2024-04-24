import { app } from '@/App';
import { DependenciesProvider } from '@/DependenciesProvider';
import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

export const Provider = () => (
  <ReduxProvider store={app.store}>
    <DependenciesProvider dependencies={app.dependencies}>
      <RouterProvider router={app.router} />
    </DependenciesProvider>
  </ReduxProvider>
);
