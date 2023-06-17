import { Stack, Divider } from '@mui/material';

import { PersonalTaskListItem } from './PersonalTaskListItem';
import { PersonalTaskListItemAddTask } from './PersonalTaskListItemAddTask';

export const PersonalTaskList = () => {
  const sampleData = [
    {title: "タスク１", limit: "yyyy/mm/dd"},
    {title: "タスク２", limit: "yyyy/mm/dd"},
    {title: "タスク１タスク１タスク１タスク１タスク１タスク１タスク１", limit: "yyyy/mm/dd"},
    {title: "タスク４", limit: null},
    {title: "タスク５", limit: "yyyy/mm/dd"},
  ]

  const ListData = sampleData.map((elm, index) => {
    return (
      <PersonalTaskListItem
        title={elm.title}
        limit={elm.limit}
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