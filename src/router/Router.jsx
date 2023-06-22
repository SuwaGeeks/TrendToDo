import { BrowserRouter, Routes, Route , useNavigate } from "react-router-dom";

// Pages
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { LoginByGitHub } from "../components/LoginByGitHub";
import { PersonalTaskListPage } from "../pages/PersonalTaskListPage";
import { GroupTaskListPage } from "../pages/GroupTaskListPage";
import { AddPersonalTask} from "../components/AddPersonalTask";
import { DoneTask } from "../components/DoneTask";
import {Result}from "../components/Result";

import { useRecoilState } from "recoil";
import { LoginStateAtom } from "../models/LoginStateAtom";

export const Router = () => {
  const [loginState, _] = useRecoilState(LoginStateAtom);

  if(!loginState.userId) {
    return <LoginPage />
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route  path={'/'} Component={HomePage} />
          <Route path={'/personal_task'} Component={PersonalTaskListPage} />
          <Route path={'/group_task'} Component={GroupTaskListPage} />
          <Route path={'/addPersonalTask'} Component={AddPersonalTask} />
          <Route path={'/donetask'} Component={DoneTask} />
          <Route path={'/result'} Component={Result} />
        </Routes>
      </BrowserRouter>
    );
  }
};