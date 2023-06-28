import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Signup = React.lazy(() => import("pages/Signup"));
const Login = React.lazy(() => import("pages/Login"));
const ForgotPassword = React.lazy(() => import("pages/ForgotPassword"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/styling-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
