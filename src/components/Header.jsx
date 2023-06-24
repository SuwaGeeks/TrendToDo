import { useEffect } from 'react';
import { Stack, Typography, IconButton } from '@mui/material';
import { Login, Logout } from '@mui/icons-material';

import { LoginStateAtom } from "../models/LoginStateAtom";
import { useRecoilState } from "recoil"; 
import Cookies from 'js-cookie';

import { UserGroupsAtom } from '../models/UserGroupsAtom';
import { UserTasksAtom } from "../models/UserTasksAtom";
import axios from "axios";

export const Header = () => {
  const [loginState, setLoginState] = useRecoilState(LoginStateAtom);
  const [UserGroups, setUserGroups] = useRecoilState(UserGroupsAtom);
  const [UserTasks, setUserTasks] = useRecoilState(UserTasksAtom);

  const updateAppData = async () => {
    if(!loginState.userId) return;
  
    if(UserGroups.userGroups.length == 0) {
      console.log("call endpoint");
      await axios.post('/getAppData', { userId: loginState.userId })
        .then(res => {
          setUserGroups({userGroups: res.data.userGroups});
          setUserTasks({userTasks: res.data.userTasks});
          console.log(res);
        })
        .catch(err => {console.log(err)});
    }
    console.log(UserGroups);
    console.log(UserTasks);
  }

  useEffect(() => {
    console.log(UserGroups);
    console.log(UserTasks);
    if(UserGroups.userGroups.length == 0) updateAppData();
  }, [])


  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
      sx={{px: "15px", py: "15px", bgcolor: "#A23A50"}}
    >
      <IconButton />
      <Typography variant='h4' color="white">TrendToDo</Typography>

      {
        loginState.userId != null ?
        <IconButton 
          color='default'
          onClick={() => {
            Cookies.remove('userId');
            setLoginState({userId: null});
          }}
          children={<Logout />}
        /> :
        <IconButton 
          color='default'
          onClick={() => {  }}
          children={<Login />}
        />
      }

    </Stack>
  );
};