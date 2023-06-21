import { Stack, Divider, Typography } from '@mui/material';

import { GroupTaskListItem } from './GroupTaskListItem';
import { GroupTaskListItemAddTask } from './GroupTaskListItemAddItem';

export const GroupTaskList = (props) => {

  const sampleData = props.userData.getGropuTasksFromName(props.className);

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