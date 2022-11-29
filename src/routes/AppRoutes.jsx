import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Layout } from "../components/Layout";
import { Home, Posts, Post, Todos, Albums, Album, NotFound } from "../containers";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<Post />} />
          <Route path="todos" element={<Todos />} />
          <Route path="albums" element={<Albums />} />
          <Route path="albums/:id" element={<Album />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
