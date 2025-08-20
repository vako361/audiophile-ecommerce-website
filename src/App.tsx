import Home from './pages/Home'
import Category from './pages/Category'
import Product from './pages/Product'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/:category",
      element: <Category />,
     
    },
        {
          path: "/:category/:productId", // <-- relative path
          element: <Product />,
        },
      
  ])

  return <RouterProvider router={router} />
}

export default App
