import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { PersonalTaskListPage } from "../pages/PersonalTaskListPage";
import { GroupTaskListPage } from "../pages/GroupTaskListPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} Component={HomePage} />
        <Route path={'/login'} Component={LoginPage} />
        <Route path={'/personal_task'} Component={PersonalTaskListPage} />
        <Route path={'/group_task'} Component={GroupTaskListPage} />
      </Routes>
    </BrowserRouter>
  );
};