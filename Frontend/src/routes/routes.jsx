
import {createBrowserRouter} from 'react-router-dom'
import App from '../App';

import { LuLogIn } from 'react-icons/lu';

import GuestPage from '../pages/GuestPage';
import RegisterPage from '../pages/Admin/RegisterPage';
import LoginPage from '../pages/Admin/LoginPage';
import { Dashboard } from '../pages/Admin/Dashboard';

export const routes=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<GuestPage/>
      },
      {
        path:'/admin/register',
        element:<RegisterPage/>
      },
      {
        path:'/admin/login',
        element:<LoginPage/>
      },
      {
        path:'/admin/dashboard',
        element:<Dashboard/>
      }

    ]
  }
]);

