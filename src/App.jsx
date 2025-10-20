import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayouts from './layouts/MainLayouts'
import Home from './pages/Home'
import Adabiyotlar from './pages/Adabiyotlar'
import Fanlar from './pages/Fanlar'
import Materiallar from './pages/Materiallar'

function App() {
  
  const routes = createBrowserRouter([
    {
      path:"/",
      element: <MainLayouts/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path:"/adabiyotlar",
          element:<Adabiyotlar/>
        },
        {
          path:"/adabiyotlar/:id",
          element: <Fanlar/>
        },
        {
          path:"/materiallar",
          element: <Materiallar/>
        }
      ]
    }
  ])

  return <RouterProvider router={routes}/>
}

export default App
