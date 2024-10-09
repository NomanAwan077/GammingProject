import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import NotFound from "../components/common/PageNotFound";
import GameDetailPage from "../pages/GameDetailPage";
import RegionDetailPage from "../pages/RegionDetailPage";
const CustomRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/region/:region" element={<RegionDetailPage />} />
        <Route path="/game/:id" element={<GameDetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default CustomRoutes;
