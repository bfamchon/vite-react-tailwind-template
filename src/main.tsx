import { Provider } from '@/Provider.tsx';
import { createStore } from '@/create-store';
import { FakeCompaniesGateway } from '@/modules/sinister/infrastructure/fake-companies.gateway';
import { createRouter } from '@/router';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const router = createRouter();

const companiesGateway = new FakeCompaniesGateway();

const store = createStore({
  companiesGateway
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider router={router} store={store} />
  </React.StrictMode>
);
