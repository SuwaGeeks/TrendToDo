import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Link} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import InputLabel from '@mui/material/InputLabel';
import { AppStateAtom } from '../models/AppStateAtom';
import { useRecoilState } from 'recoil';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

//const label = { inputProps: { 'aria-label': 'Switch demo' } };

export function AddGroupTask(props) {

  const [AppState, _] = useRecoilState(AppStateAtom);
  const groupList = AppState.userData.getGropuList();

  const [groupId, setGroupId] = useState('');
  const [taskName, setTaskName] = useState('');
  const [detail, setDetail] = useState('');
  const [dateStr, setDateStr] = useState('');
  const [timeStr, setTimeStr] = useState('');

    return (
      <div className="add_personal_task">
        <h1>グループタスクの追加</h1>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            {/* <TextField
              required
              id="outlined-required"
              label="対象グループ"
              onChange={(e)=>{setGroupName(e.target.value)}}
            /> */}
            <FormControl onChange={(e)=>{setGroupId(e.target.value)}}>
            <InputLabel id="select-label">グループを選択してください</InputLabel>
            <Select defaultValue = "">
              {
                groupList.map((elem) => {
                  return (
                    <MenuItem value={elem.groupID} key={elem.groupID}>{elem.className}</MenuItem>
                  )
                })
              }
            </Select>
            </FormControl>
          </div>
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
              onChange={(e)=>{setDetail(e.target.value)}}
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
              label="日付(MM/DD)"
              onChange={(e)=>{setDateStr(e.target.value)}}
            />
          </div>

          <div>
            <TextField
              required
              id="outlined-required"
              label="日時(HH:MM)"
              onChange={(e)=>{setTimeStr(e.target.value)}}
            />
          </div>
        </Box>

        <div className="submit">

        <Stack direction="row" spacing={2}>
          <Link to='/group_task'>{<Button variant="outlined" startIcon={<DeleteIcon />}>
            キャンセル
          </Button>}
          </Link>

          <Link to='/personal_task' onClick={(e) => {

            console.log({
              groupId: groupId,
              taskName: taskName,
              taskContent: detail,
              taskLimit: `${dateStr} ${timeStr}`,
              addUserId: AppState.userData.userID
            });

              // 新しいグループタスクの追加
              axios.post('/addGroupTask', {
                groupId: groupId,
                taskName: taskName,
                taskContent: detail,
                taskLimit: `${dateStr} ${timeStr}`,
                addUserId: AppState.userData.userID
              }).then(res => {
                const newTask = res.data;
                const userID = AppState.userData.userID;
                console.log(newTask);
                AppState.userData.addGroupTaskIntoUserData(newTask, userID);
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