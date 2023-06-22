import { Stack, Typography } from "@mui/material"
import { Task } from "@mui/icons-material"

import { PersonalTaskList } from "../components/PersonalTaskList"
import { Footer } from "../components/Footer"

import { AppStateAtom } from '../models/AppStateAtom';
import { useRecoilState } from 'recoil';

export const PersonalTaskListPage = () => {

  const [AppState, _] = useRecoilState(AppStateAtom);

  return (
    <>
      <Stack spacing={2} sx={{ px: "20px", py: "40px" }}>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
        >
          <Task />
          <Typography variant='h5' children="個人タスク" />
        </Stack>
        <Typography children={AppState.userData.getNumOfPersonalTasks()+'つのタスクが残っています。'} align='left' />
        <PersonalTaskList userData={AppState.userData} />
      </Stack>
      <Footer />
    </>
  )
}