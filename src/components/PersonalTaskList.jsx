import { Stack, Divider } from '@mui/material';

import { PersonalTaskListItem } from './PersonalTaskListItem';
import { PersonalTaskListItemAddTask } from './PersonalTaskListItemAddTask';

export const PersonalTaskList = (props) => {

  const sampleData = props.userData.getPersonalTasks();

  const ListData = sampleData.map((elm, index) => {
    return (
      <PersonalTaskListItem
        title={elm.title}
        limit={elm.limit}
        taskId={elm.id}
        finishedAt={elm.finishedAt}
        key={elm.title}
      />
    )
  }); 

  return (
    <Stack
      divider={<Divider orientation='horizontal' flexItem />}
      spacing={1}
      sx={{bgcolor: "#F8EBEB", py: "10px", borderRadius: "10px", px: "15px"}}
    >
      {ListData}
      <PersonalTaskListItemAddTask />
    </Stack>
  )
}