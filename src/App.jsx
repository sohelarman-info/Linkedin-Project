import { useState } from "react";
import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Registration from "./pages/register";
import Home from "./pages/home/home";
import Login from "./pages/login";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
