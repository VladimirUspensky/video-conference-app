import Home from '@pages/Home';
import Auth from '@pages/Auth';
import Login from '@pages/Login';
import { Redirect } from 'react-router-dom';
import Conference from '@pages/Conference';

// eslint-disable-next-line import/prefer-default-export
export const routesConfig = [
  { path: '/home', exact: true, component: Home },
  { path: '/auth', exact: true, component: Auth },
  { path: '/login', exact: true, component: Login },
  { path: '/conference/:Id', exact: true, component: Conference },
  { path: '/', component: () => <Redirect to="/auth" /> },
];
