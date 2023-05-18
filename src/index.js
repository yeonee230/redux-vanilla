import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Detail from './routes/Detail';
import Home from './routes/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>Not Found!</h1>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: '/:id', element: <Detail /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
