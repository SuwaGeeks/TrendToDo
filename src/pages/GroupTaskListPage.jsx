import { Stack, Divider, Typography } from '@mui/material';
import { Task } from '@mui/icons-material';

import { Footer } from '../components/Footer';
import { GroupTaskList } from '../components/GroupTaskList';
import { AddGroup } from '../components/addGroup';

import { AppStateAtom } from '../models/AppStateAtom';
import { useRecoilState } from 'recoil';

export const GroupTaskListPage = () => {

  const [AppState, _] = useRecoilState(AppStateAtom);
  const groupList = AppState.userData.getGropuList();

  return (
    <>
      <Stack 
      divider={<Divider orientation='horizontal' flexItem />}
      spacing={5}
      sx={{ px: "20px", py: "40px" }}
      >
        <Stack spacing={2}>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
          >
            <Task />
            <Typography variant='h5' children="グループタスク" />
          </Stack>
          <AddGroup/>
          <Typography children={AppState.userData.getNumOfGroupTasks()+'つのタスクが残っています。'} align='left' />
          <Stack spacing={3}>
            {
              groupList.map((elm) => {
                return (
                  <GroupTaskList userData={AppState.userData} className={elm.className} key={elm.className} />
                )
              })
            }
          </Stack>
        </Stack>
      </Stack>
      <Footer />
    </>
  )
}