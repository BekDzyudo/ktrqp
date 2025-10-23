import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayouts from './layouts/MainLayouts'
import Home from './pages/Home'
import Adabiyotlar1 from './pages/Adabiyotlar1'
import Adabiyotlar from './pages/Adabiyotlar'
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
          path:"/adabiyotlar1",
          element:<Adabiyotlar1/>
        },
        {
          path:"/adabiyotlar",
          element: <Adabiyotlar/>
        },
        {
          path:"/adabiyotlar/:id",
          element: <Materiallar/>
        }
      ]
    }
  ])

  return <RouterProvider router={routes}/>
}

export default App
