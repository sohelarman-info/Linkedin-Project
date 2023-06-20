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
import NonLoggedUser from "./authentication/NonLoggedUser";
import LoggedinUser from "./authentication/LoggedinUser";
import Forgot from "./pages/forgot";
import Profile from "./pages/profile";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<LoggedinUser />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Route>
        <Route element={<NonLoggedUser />}>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/forgot" element={<Forgot />}></Route>
        </Route>
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
