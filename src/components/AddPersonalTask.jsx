import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link} from 'react-router-dom';

import { AppStateAtom } from '../models/AppStateAtom';
import { useRecoilState } from 'recoil';

import axios from 'axios';

//const label = { inputProps: { 'aria-label': 'Switch demo' } };

export function AddPersonalTask(props) {

    const [AppState, setAppState] = useRecoilState(AppStateAtom);

    const [taskName, setTaskName] = useState('');
    const [taskDetail, setTaskDetail] = useState('');
    const [deadLineD, setDeadLineD] = useState('');
    const [deadLineT, setDeadLineT] = useState('');

    return (
      <div className="add_personal_task">
        <h1>個人タスクの追加</h1>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="outlined-required"
              label="タスク名"
              onChange={(e)=>{setTaskName(e.target.value)}}
            />
          </div>

          <div>
            <TextField
              required
              id="outlined-required"
              label="詳細"
              onChange={(e)=>{setTaskDetail(e.target.value)}}
            />
          </div>
          <div className='shimekiri'>
            <FormGroup>
              <FormControlLabel control={<Switch defaultChecked />} label="締め切りを設定する" />
            </FormGroup>
          </div>

          <div>
          </div>
          <div>
            <TextField
              required
              id="outlined-required"
              label="日付"
              onChange={(e)=>{setDeadLineD(e.target.value)}}
            />
          </div>

          <div>
            <TextField
              required
              id="outlined-required"
              label="日時"
              onChange={(e)=>{setDeadLineT(e.target.value)}}
            />
          </div>
        </Box>

        <div className="submit">
          <Stack direction="row" spacing={2}>
          <Link to='/personal_task'>{<Button variant="outlined" startIcon={<DeleteIcon />}>
              キャンセル
            </Button>}
            </Link>

            <Link to='/personal_task' onClick={(e) => {
              // 新しい個人タスクの追加
              axios.post('/addUserTask', {
                taskName: taskName,
                taskContent: taskDetail,
                taskLimit: `${deadLineD}:${deadLineT}`,
                addUserId: AppState.userData.userID
              }).then(res => {
                const newTask = res.data;
                console.log(newTask)
                AppState.userData.addPersonalTaskIntoUserData(newTask);
              }).catch((err) => {
                console.log(err);
              });
            }}>{<Button variant="contained" endIcon={<SendIcon />}>
              決定
            </Button>}
            </Link>

          </Stack>
        </div>

      </div>
    );

}