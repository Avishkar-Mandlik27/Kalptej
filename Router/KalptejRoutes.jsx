import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../src/App'
import Home from '../src/components/Home'
import About from '../src/components/About'
import Services from '../src/components/Services'
import ContactUs from '../src/components/ContactUs'

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
            element : <Services/>
        },
        {
            path : "/portfolio",
            element : <div>Portfolio</div>
        },
        { 
            path : "/resources",
            element : <div>Resources</div>
        },
        {
            path : "/contact",
            element :<ContactUs/>
        }
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
