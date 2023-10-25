import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
        <Notifications position="top-right"/>
            <Provider store={store}>
              <App />
            </Provider>
    </MantineProvider>
  </React.StrictMode>
);


