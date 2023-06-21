import { Stack, Typography } from "@mui/material"
import { Task } from "@mui/icons-material"

import { PersonalTaskList } from "../components/PersonalTaskList"
import { Footer } from "../components/Footer"

import { UserData } from "../utils/UserData";

export const PersonalTaskListPage = () => {

  const userData = new UserData('hogehoge');
  const groupList = userData.getGropuList(userData);

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
        <Typography children={userData.getNumOfPersonalTasks()+'つのタスクが残っています。'} align='left' />
        <PersonalTaskList userData={userData} />
      </Stack>
      <Footer />
    </>
  )
}