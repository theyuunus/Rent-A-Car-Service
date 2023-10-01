import React from "react";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const routers = [
  {id: "about", path: "/About", element: <About />},
  {id: "car", path: "/cars", element: <CarListing />},
  {id: "blog", path: "/blog", element: <Blog />},
  {id: "contact", path: "/contact", element: <Contact />},
  {id: "blogDetails", path: "/blog/:title/", element: <BlogDetails />},
  {id: "login", path: "/login", element: <Login />},
  {id: "Register", path: "/Register", element: <Register />},
  {id: "notFound", path: "*", element: <NotFound />},
  {id: "carDetails", path: "/cars/:title", element: <CarDetails />},
]