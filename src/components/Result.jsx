import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import {Link, useNavigate} from 'react-router-dom';

import axios from 'axios';

import { useState } from 'react'

import { AppStateAtom } from '../models/AppStateAtom';
import { useRecoilState } from 'recoil';

import { Loading } from './Loading';

export function Result(props) {

  const [AppState, setAppState] = useRecoilState(AppStateAtom);
  const [taskTime, setTaskTime] = useState(0);
  const [taskWeight, setTaskWeight] = useState(3);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <Loading open={isLoading} />

      <div>
        <h1>所要時間</h1>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div className='Rtime'>
            <TextField
              id="outlined-number"
              label="所要時間(分)"
              type="number"
              onChange={(e)=>{setTaskTime(e.target.value)}}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </Box>
      </div>

      <div>
        <h1>大変さ</h1>
        <Box sx={{px: "30px"}} alignItems="center" justifyItems="center">
          <Slider
            aria-label="Temperature"
            defaultValue={3}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={5}
            onChange={(e)=>{setTaskWeight(e.target.value)}}
          />
        </Box>
      </div>

      <Stack direction="row" justifyContent="center" spacing={2} sx={{py: "40px"}}>
        <Button
          onClick={ async () => {
            setIsLoading(true);
            const sendData = {
              userId: AppState.userData.userID,
              groupId: AppState.selectedGroupTaskId.gid,
              taskId: AppState.selectedGroupTaskId.id,
              evaluation: taskWeight,
              time: taskTime
            };

            console.log(sendData);
            await axios.post('/submitGroupTask', sendData)
              .then(res => {
                console.log(res.data.task);
                const taskId = res.data.task.taskId;
                const groupId = res.data.task.taskGroupID;
                AppState.userData.finishGroupTask(taskId, groupId)
              }).catch(err => {
                console.log(err)
              })
            setIsLoading(false);
            navigate('/');
          }}
          variant='contained'
          children="決定"
        />
        <Button 
          variant="contained"
          onClick={() => {navigate('/donetask');}}
          children="戻る"
        />
      </Stack>
    </>

  );
}

