import React from 'react';
import { useState } from 'react';
import { Typography, Button, TextField, Stack } from '@mui/material';
import { ErrorDialog } from './ErrorDialog';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "../FirebaseConfig"

import Cookies from 'js-cookie';

import { useRecoilState } from "recoil"; 
import { LoginStateAtom } from "../models/LoginStateAtom";
import { AppStateAtom } from "../models/AppStateAtom";
import { UserData } from "../utils/UserData";

export function SignUp(props) {
  const auth = new getAuth();

  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loginState, setLoginState] = useRecoilState(LoginStateAtom);
  const [AppState, setAppState] = useRecoilState(AppStateAtom);

  const handleClose = () => {
    setDialogOpen(false);
  }

	return (
    <>
      <Typography children={"アカウント登録"} align='left' variant='h4' sx={{py: "20px"}} />

      <Stack spacing={2} alignItems="center" sx={{py: "20px"}}>
        <TextField
          label="メールアドレス"
          variant='outlined'
          autoComplete='email'
          type="email"
          onChange={e => {
            setUserEmail(e.target.value);
          }}
        />
        <TextField
          label="パスワード"
          type="password"
          autoComplete='current-password'
          onChange={e => {
            setPassword(e.target.value);
          }}
        />

        <Button
          variant="contained"
          onClick={async () => {
            console.log(userEmail);
            await createUserWithEmailAndPassword(auth, userEmail, password)
              .then( async (userCredential) => {
                const user = userCredential.user;

                Cookies.set('userId', user.uid);
                console.log(user.uid);

                props.handleClick();
              })
              .catch((err) => {
                console.log(err);
                setDialogOpen(true);
              })
          }}
          children={"登録"}
          sx={{width: "50%"}}
        />

        <Button onClick={props.handleClick}>
          既にアカウントをお持ちの方はこちら
        </Button>
        <ErrorDialog
          open={dialogOpen}
          handleClose={handleClose}
          title={"アカウントの作成に失敗しました"}
        />

      </Stack>
  </>
	)
}