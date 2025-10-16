import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from '../Router/KalptejRoutes.jsx';
import { PopupProvider } from './components/PopupProvider.jsx';

createRoot(document.getElementById('root')).render(
  <PopupProvider>
  <RouterProvider router={routes} >
    <App />
  </RouterProvider>
  </PopupProvider>
  ,
)
