import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../src/App'
import Home from '../src/components/Home'
import About from '../src/components/About'

export let routes = createBrowserRouter([{

    path : "/",
    element : <App/>,
    children : [
        {
            path : "/",
            element : <Home/>
        }
        ,{
            path : "/home",
            element : <Home/>
        },
        {
            path : "/about",
            element : <About/>
        },
        {
            path : "/services",
            element : <div>Services</div>
        },
        {
            path : "/portfolio",
            element : <div>Portfolio</div>
        },
        { 
            path : "/resources",
            element : <div>Resources</div>
        },
    ]
},
])

const KalptejRoutes = () => {
  return (
    <div>
      
    </div>
  )
}

export default KalptejRoutes
