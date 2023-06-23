import { Stack, Checkbox, Typography } from '@mui/material'
import { CalendarMonth, SentimentSatisfiedAlt, AccessTime } from '@mui/icons-material';
import {Link} from 'react-router-dom';

import { AppStateAtom } from '../models/AppStateAtom';
import { useRecoilState } from 'recoil';

export const GroupTaskListItem = (props) => {
  const data = props.data;
  const [AppState, setAppState] = useRecoilState(AppStateAtom);

  return (
    <Link to='/donetask' onClick={(e) => {
      if(data.isFinished)e.preventDefault();
      setAppState({selectedGroupTaskId: {id:data.id, gid:data.gid}, userData:AppState.userData});
    }}>
    <Stack>
      {/* タスク名 */}
      <Typography
        children={(data.isFinished)?`${data.title}【完了】`:`${data.title}`}
        align='left'
        sx={{py: "5px"}}
        noWrap
      />
      <Stack direction="row" sx={{pl: "10px"}} spacing={2}>
        <Stack sx={{overflow: "hidden"}} justifyContent="center" >
          {/* タスクの評価 */}
          <Stack direction="row" spacing={1} alignItems="center">
            <SentimentSatisfiedAlt sx={{fontSize: 15}}  />
            <Typography
              variant='body2'
              children={data.eva}
            />
          </Stack>

          {/* タスクの平均時間 */}
          <Stack direction="row" spacing={1} alignItems="center">
            <AccessTime sx={{fontSize: 15}} />
            <Typography
              variant='body2'
              children={data.meanTime}
              noWrap
            />
          </Stack>
        </Stack>
        <Stack sx={{overflow: "hidden", maxWidth: "50%"}} justifyContent="center">

          {/* タスクの期限 */}
          {
            data.limit &&
            <Stack direction="row" spacing={1} alignItems="center">
              <CalendarMonth fontSize='small' />
              <Typography
                variant='subtitle2'
                children={data.limit}
              />
            </Stack>
          }
        </Stack>
      </Stack>
    </Stack>
    </Link>
  )
}