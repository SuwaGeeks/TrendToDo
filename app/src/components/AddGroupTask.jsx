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
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

//const label = { inputProps: { 'aria-label': 'Switch demo' } };

export function AddGroupTask(props) {

  const [groupName, setGroupName] = useState('');
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
            <TextField
              required
              id="outlined-required"
              label="対象グループ"
              onChange={(e)=>{setGroupName(e.target.value)}}
            />
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
            <Button variant="outlined" startIcon={<DeleteIcon />} onClick={()=>{
              props.ValueChange(0);
            }}>
              キャンセル
            </Button>
            <Button variant="contained" endIcon={<SendIcon />} onClick={()=>{
              console
              props.ValueChange(0);
            }} >
              決定
            </Button>
          </Stack>
        </div>

      </div>
    );

}