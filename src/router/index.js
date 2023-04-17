import { useRoutes }from "react-router-dom";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import MovieDetail from "../pages/MovieDetail";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import Login from "../pages/Login";
import MainLayout from "../layouts/MainLayout";
import News from "../pages/News";

const Router = ()=>{
  const elements = useRoutes([
    {
      path : '/',
      element : <MainLayout />,
      children : [{
        path : '/',
        element : <Home />
      },
      {
        path : '/movieDetail/:movieId',
        element : <MovieDetail />
      },
      {
        path : "/contact",
        element : <Contact />
      },
      {
        path : "/news",
        element : <News />
      },
    ]
    },
    {
      path : '/register',
      element : <Register />
    },
    {
      path : '/login',
      element : <Login />
    },
    {
      path : '*',
      element : <NotFound />
    },
  ])
  return elements
} 

export default Router