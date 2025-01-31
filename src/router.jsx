import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ResearchPage from "./pages/ResearchPage";
import InfluencerPage from "./pages/InfluencerPage";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/research" element={<ResearchPage />} />
      <Route path="/influencer/:name" element={<InfluencerPage />} />
    </Routes>
  </Router>
);

export default AppRouter;
