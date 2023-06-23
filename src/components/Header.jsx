import { Stack, Typography, IconButton } from '@mui/material';
import { Login, Logout } from '@mui/icons-material';

import { LoginStateAtom } from "../models/LoginStateAtom";
import { useRecoilState } from "recoil"; 
import Cookies from 'js-cookie';

export const Header = () => {
  const [loginState, setLoginState] = useRecoilState(LoginStateAtom);

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