import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from 'react-router-dom';

import { AppStateAtom } from '../models/AppStateAtom';
import { useRecoilState } from 'recoil';


export function DoneTask(props) {

  const [AppState, setAppState] = useRecoilState(AppStateAtom);
  const task = AppState.userData.getGropuTaskFromId(AppState.selectedGroupTaskId);

  return (
    <div className='Dmenu'>
      <div className='Dback'>
        <Stack spacing={2} direction="row">
          <Stack direction="row" spacing={2}>
            <a href='/' onClick={(e) => {
              e.preventDefault();
              props.ValueChange(0);
            }}><Button variant="text">< ArrowBackIcon /></Button>{ }</a>
            </Stack>
          </Stack>
      </div>
      <div className='Dtitle'>{task.taskName}</div>
      <div className='Ddetail'>
      <div className='DDD'>
        <div>
          <h3>内容</h3>
          <div className='D'>{task.taskContent}</div>
        </div>

        <div>
          <h3>期限</h3>
          <div>{task.taskLimit}</div>
        </div>
        </div>

      <div className='Dline'></div>
      <div className='Dbutton'>
      <Stack direction="row" spacing={2}>
      <Link to='/result'>
        <Button variant="contained" >
          タスク完了
        </Button>
      </Link>
      <Link to='/personal_task'>
        <Button variant="contained" >
          キャンセル
        </Button>
      </Link>
      </Stack>
      </div>
      </div>
    </div>

  )


}

