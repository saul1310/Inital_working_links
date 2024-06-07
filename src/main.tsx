import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
 
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ProfilePage from './pages/ProfilePage';
import ProfilesPage from './pages/ProfilesPage';
import Register from './pages/Register';
import Report from './pages/Report';
import FAQ from './pages/FAQ';
import HowtoHelp from './pages/HowtoHelp';
import Login from './pages/Login';
import Support from './pages/Support';

import './index.css';

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

  {
    path: '/report',
    element: <Report/>
  },

  {
    path: '/turtlefaq',
    element: <FAQ/>
  },

  {
    path: '/howtohelp',
    element: <HowtoHelp/>
  },
  
  {
    path: '/support',
    element: <Support/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
