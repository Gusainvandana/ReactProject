import React from 'react'

import { Link,RouterProvider } from 'react-router-dom'
import { globalRoute } from './routing/GlobalRouting' 
import { Toaster } from 'react-hot-toast'
import GlobalContext from './globalContext/GlobalContext'




const App = () => {
  return (
    <GlobalContext>
    <Toaster/>
    <RouterProvider router={globalRoute}/>
    </GlobalContext>
  )
}

export default App
