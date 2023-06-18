import { Stack, Divider, Typography } from '@mui/material';
import { Task } from '@mui/icons-material';

import { Footer } from '../components/Footer';
import { GroupTaskList } from '../components/GroupTaskList';

export const GroupTaskListPage = () => {
  const groupList = [
    {className: "授業A"}, {className: "授業B"}
  ];

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
          <Typography children="3つのタスクが残っています。" align='left' />
          <Stack spacing={3}>
            {
              groupList.map((elm) => {
                return (
                  <GroupTaskList className={elm.className} key={elm.className} />
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