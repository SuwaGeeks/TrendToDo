import { Stack, Divider, Typography } from '@mui/material';

import { GroupTaskListItem } from './GroupTaskListItem';
import { GroupTaskListItemAddTask } from './GroupTaskListItemAddItem';

export const GroupTaskList = (props) => {
  const sampleData = [
    {title: "タスク１", limit: "yyyy/mm/dd", eva: 1.25, meanTime: "dd日hh時間mm分"},
    {title: "タスク２", limit: "yyyy/mm/dd", eva: 1.25, meanTime: "dd日hh時間mm分"},
    {title: "タスク１タスク１タスク１タスク１タスク１タスク１タスク１", limit: "yyyy/mm/dd", eva: 1.25, meanTime: "dd日hh時間mm分"},
    {title: "タスク４", limit: null, eva: 1.25, meanTime: "dd日hh時間mm分"},
    {title: "タスク５", limit: "yyyy/mm/dd", eva: 1.25, meanTime: "dd日hh時間mm分"},
  ]

  const ListData = sampleData.map((elm, index) => {
    return (
      <GroupTaskListItem
        data={elm}
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
      <Typography children={props.className} variant='h5' sx={{py: "15px"}} />
      {ListData}
      <GroupTaskListItemAddTask />
    </Stack>
  )
}