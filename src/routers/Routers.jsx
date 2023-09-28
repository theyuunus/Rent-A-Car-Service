import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Login from "../pages/Login";

export const routers = [
  {id: "about", path: "/About", element: <About />},
  {id: "car", path: "/cars", element: <CarListing />},
  {id: "blog", path: "/blog", element: <Blog />},
  {id: "contact", path: "/contact", element: <Contact />},
  {id: "blogDetails", path: "/blog/:title/", element: <BlogDetails />},
  {id: "login", path: "/Login", element: <Login />},
  {id: "notFound", path: "*", element: <NotFound />},
  {id: "carDetails", path: "/cars/:title", element: <CarDetails />},
]