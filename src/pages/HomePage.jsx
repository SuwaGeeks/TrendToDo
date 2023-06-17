import { Stack, Divider, Box, Typography } from '@mui/material';
import { Task } from '@mui/icons-material';

import { Footer } from '../components/Footer';
import { PersonalTaskList } from '../components/PersonalTaskList';

export function HomePage(props) {
  return (
    <>
      <Stack 
        divider={<Divider orientation='horizontal' flexItem />}
        spacing={5}
        sx={{ px: "20px", py: "40px" }}
      >
        {/* 個人タスク */}
        <Stack spacing={2}>
          <Stack
            direction="row"
            spacing={3}
            alignItems="center"
          >
            <Task />
            <Typography variant='h5' children="個人タスク" />
          </Stack>
          <Typography children="3つのタスクが残っています。" align='left' />
          <PersonalTaskList />
        </Stack>

        {/* グループタスク */}
        <Stack spacing={2}>
          <Stack
            direction="row"
            spacing={3}
            alignItems="center"
          >
            <Task />
            <Typography variant='h5' children="グループタスク" />
          </Stack>
          <Typography children="3つのタスクが残っています。" align='left' />
          <Stack spacing={3}>
            <Box sx={{height: "300px", bgcolor: "blue"}} />
            <Box sx={{height: "300px", bgcolor: "blue"}} />
          </Stack>
        </Stack>
      </Stack>
      
      <Footer />
    </>
  );
}