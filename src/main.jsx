import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from '../Router/KalptejRoutes.jsx';
import { PopupProvider } from './components/PopupProvider.jsx';
import { WhatsAppProvider } from './components/WhatsAppContext.jsx';

createRoot(document.getElementById('root')).render(
  <PopupProvider>
    <WhatsAppProvider>
      <RouterProvider router={routes} >
        <App />
      </RouterProvider>
    </WhatsAppProvider>
  </PopupProvider>
  ,
)
