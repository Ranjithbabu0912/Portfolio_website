import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './common/ThemeContext.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './sections/About/About.jsx'
import Hero from './sections/Hero/Hero.jsx'

const router =  createBrowserRouter([
  {
    path: "/portfolio/",
    element: <App />,
    children: [{
      path: "/portfolio/",
      element: <Hero />,
    },
    {
      path: "/portfolio/About",
      element: <About/>,
    },
  ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
   
  </React.StrictMode>,
)
