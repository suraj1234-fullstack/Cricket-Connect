import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Auth0Provider
      domain="dev-3yqhwxv73vvycozd.us.auth0.com"
      clientId="BLZX4poAb4sixjMJHtlrMSXWTlK8ooKO"
      authorizationParams={{ redirect_uri: window.location.origin }}
      cacheLocation="localstorage"
    >
    <App/>
    </Auth0Provider>
    
   
  </StrictMode>,
)
