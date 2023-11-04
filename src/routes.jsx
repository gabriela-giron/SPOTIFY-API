import { createBrowserRouter, redirect } from 'react-router-dom'
import InicioSesion from './views/auth/login'
import home from './views/app/home'

const routes = createBrowserRouter([
    {
      path: '/',
      loader: () => redirect('/app')
    },
    {
      path: '/app',
      children: [
        {
          path: '',
          loader: () => redirect('home')
        },
        {
          path: 'home',
          Component: home
        },
      ]
    },
    {
      path: '/auth',
      children: [
        {
          path: '',
          loader: () => redirect('login')
        },
        {
          path: 'login',
          Component: InicioSesion
        }
      ]
    }
  ])
  
  export default routes