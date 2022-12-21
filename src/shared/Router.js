import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePost from "../pages/CreatePost";
import Detail from "../pages/Detail";

import Home from "../pages/Home";
import Login from "../pages/Login";
import MainPost from "../pages/MainPost";
import NotFound from "../pages/NotFound";
import Signup from "../pages/Signup";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<CreatePost />} />
        <Route path="/log" element={<Login />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/main/:number" element={<MainPost />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
