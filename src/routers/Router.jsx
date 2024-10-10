import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../pages/Home";

const Router = () => {
  // use protected routes for authenticated users (i.e: UserRoute & AdminRoute or make more if you've to)..

  return (
    <Routes>
      {/* Default Layout routes */}
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

    </Routes>
  );
};

export default Router;
