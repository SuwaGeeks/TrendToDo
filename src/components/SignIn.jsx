import React, { useState } from 'react';
import { Typography, Button, TextField, Stack } from '@mui/material';
import { ErrorDialog } from './ErrorDialog';

import { getAuth, GithubAuthProvider, signInWithEmailAndPassword, signInWithRedirect } from "firebase/auth";
import "../FirebaseConfig"

import Cookies from 'js-cookie';

import { useRecoilState } from "recoil"; 
import { LoginStateAtom } from "../models/LoginStateAtom";
import { AppStateAtom } from "../models/AppStateAtom";
import { UserData } from "../utils/UserData";

export function SignIn(props){
  const provider = new GithubAuthProvider();
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
      <Typography children={"ログイン"} align='left' variant='h4' sx={{py: "20px"}} />
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
            await signInWithEmailAndPassword(auth, userEmail, password)
              .then(async (userCredential) => {
                const user = userCredential.user

                Cookies.set('userId', user.uid);

                setAppState({userData: await UserData.init(user.uid)})
                setLoginState({userId: user.uid});
              })
              .catch((err) => {
                console.log(err);
                setDialogOpen(true);
              })
          }}
          children={"ログイン"}
          sx={{width: "50%"}}
        />

        <Button onClick={props.handleClick}>
          アカウント登録はこちら
        </Button>

      </Stack>
      <Typography children={"もしくは"} />
      <Button
        variant='contained'
        children="GitHubでログイン"
        size="medium"
        onClick={() => { signInWithRedirect(auth, provider); }}
        sx={{
          bgcolor: "black",
          width: "50%",
          textTransform: "none",
          alignSelf: "center",
          my: "20px",
        }}
      />
      <ErrorDialog
        open={dialogOpen}
        handleClose={handleClose}
        title={"ログインに失敗しました"}
      />
    </>
	);
}