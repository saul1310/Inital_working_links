import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
 
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ProfilePage from './pages/ProfilePage';
import ProfilesPage from './pages/ProfilesPage';
import Register from './pages/Register';

import './index.css';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/profiles',
    element: <ProfilesPage />,
    children: [
      {
        path: ':profileId',
        element: <ProfilePage />,
      },
    ],
  },
  
  {
    path: '/register', // Absolute path without nesting
    element: <Register />,
  },

  {
    path: '/login',
    element: <Login/>,
  },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
