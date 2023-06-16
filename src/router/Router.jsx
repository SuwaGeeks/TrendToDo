import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} Component={HomePage} />
        <Route path={'/login'} Component={LoginPage} />
      </Routes>
    </BrowserRouter>
  );
};