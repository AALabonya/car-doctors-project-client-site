import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes.jsx'
import AuthProvider from './AuthProvider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='max-w-7xl mx-auto'>
   <AuthProvider>
   <RouterProvider router={Routes}></RouterProvider>
   </AuthProvider>
   </div>
  </React.StrictMode>
)
