import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";import "./layout.scss"
import HomePage from "./routes/homepage/homepage";
import Layout from "./routes/layout/layout";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        // {
        //   path:"/list",
        //   element:<ListPage/>
        // },
        // {
        //   path:"/:id",
        //   element:<SinglePage/>
        // },
        // {
        //   path:"/profile",
        //   element:<ProfilePage/>
        // },
        // {
        //   path:"/login",
        //   element:<Login/>
        // },
        // {
        //   path:"/register",
        //   element:<Register/>
        // }
      ]
    }
  ]);

  return (

    <RouterProvider router={router}/>
  );
}

export default App