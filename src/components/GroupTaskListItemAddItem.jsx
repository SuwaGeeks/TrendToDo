import { Stack, Typography } from "@mui/material"
import { Link} from 'react-router-dom';


export const GroupTaskListItemAddTask = () => {
  return (
    <Stack height="50px" justifyContent="center">
    <Link to='/addGroupTask'>
    <Typography children={"タスクを追加"} color="#A23A50" />
    </Link>
  </Stack>
  )
}