import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";import "./layout.scss"
import HomePage from "./routes/homepage/homepage";
import Layout from "./routes/layout/layout";
import ListPage from "./routes/listPage/listPage";
import SinglePage from "./routes/singlePage/singlePage";
import ProfilePage from "./routes/profilePage/profilePage";
import Login from "./routes/login/login";
import Register from "./routes/register/register";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";
import NewPostPage from "./routes/newPostPage/newPostPage";
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
         {
           path:"/list",
           element:<ListPage/>
         },
         {
          path:"/:id",
          element:<SinglePage/>
         },
          {
            path:"/profile",
            element:<ProfilePage/>
          },
          {
            path:"/login",
            element:<Login/>
          },
          {
            path: "/profile/update",
            element: <ProfileUpdatePage />,
          },
          {
            path: "/add",
            element: <NewPostPage />,
          },
          {
            path:"/register",
            element:<Register/>
          }
      ]
    }
  ]);

  return (

    <RouterProvider router={router}/>
  );
}

export default App