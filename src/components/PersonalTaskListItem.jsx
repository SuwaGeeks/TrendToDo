import { Stack, Checkbox, Typography } from '@mui/material';
import { CalendarMonth } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

import React from 'react';
import { Box } from '@mui/material';

import { UserData } from "../utils/UserData";

import { Loading } from "../components/Loading";


import { AppStateAtom } from "../models/AppStateAtom";
import { useRecoilState } from "recoil"; 

import axios from 'axios';

export const PersonalTaskListItem = (props) => {

  const [checkBoxFlag, setCheckBoxFlag] = useState(props.finishedAt != null);
  const [deleteFlag, setDeleteFlag] = useState(false);
  const [AppState, setAppState] = useRecoilState(AppStateAtom);

  function submitTask(event) {
    if(!checkBoxFlag){
      setCheckBoxFlag(true);
      console.log({
        userId: AppState.userData.userID,
        taskId: props.taskId
      });
      axios.post('/submitUserTask', {
        userId: AppState.userData.userID,
        taskId: props.taskId
      }).then(async res => {
        console.log(res.data);
        setAppState({userData: await UserData.init(AppState.userData.userID)})
      }).catch(err => {
        console.log(err);
      });
    }
  }

  function deleteTask() {
    if(!deleteFlag){
      setDeleteFlag(true);
      console.log({
        userId: AppState.userData.userID,
        taskId: props.taskId
      });
      axios.post('/deleteUserTask', {
        userId: AppState.userData.userID,
        taskId: props.taskId
      }).then(async res => {
        console.log(res.data);
        setAppState({userData: await UserData.init(AppState.userData.userID)})
        setDeleteFlag(false);
      }).catch(err => {
        console.log(err);
      });
    }
  }

  return (<>
  <Stack direction="row" alignItems="center">
  {/* チェックボックス */}
  <Checkbox checked={checkBoxFlag} onChange={submitTask} />

  {/* コンテンツ */}
  <Stack sx={{ overflow: "hidden" }}>
    {/* タスク名 */}
    <Typography
      children={props.title}
      align="left"
      noWrap
      style={{
        textDecoration: checkBoxFlag ? "line-through" : "none",
        color: checkBoxFlag ? "gray" : "inherit"
      }}
    />

    {/* タスクの期限 */}
    {props.limit && (
      <Stack direction="row" spacing={1} alignItems="center">
        <CalendarMonth fontSize="small" />
        <Typography
          variant="subtitle2"
          children={props.limit}
          style={{
            textDecoration: checkBoxFlag ? "line-through" : "none",
            color: checkBoxFlag ? "gray" : "inherit"
          }}
        />
      </Stack>
    )}
  </Stack>

  {/* DeleteIcon */}
  <Box ml="auto">
    <IconButton aria-label="delete" onClick={deleteTask}>
      <DeleteIcon />
    </IconButton>
  </Box>
</Stack>

  </>);
};
