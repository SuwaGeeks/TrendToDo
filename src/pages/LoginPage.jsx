import { Button, Stack, Typography,  } from '@mui/material';

import { useState } from 'react';
import { Loading } from '../components/Loading';
import { SignIn } from '../components/Login/SignIn';
import { SignUp } from '../components/Login/SignUp';

import { useEffect } from "react";
import { getAuth, getRedirectResult, GithubAuthProvider, signInWithRedirect } from "firebase/auth";
import "../FirebaseConfig"

import { LoginStateAtom } from "../models/LoginStateAtom";
import { useRecoilState } from "recoil"; 

export function LoginPage(props){
  const [isLoading, setIsLoading] = useState(true);
  const [loginState, setLoginState] = useRecoilState(LoginStateAtom)

  const provider = new GithubAuthProvider();
  const auth = new getAuth();

  const clickGitHubLoginButton = () => {
    signInWithRedirect(auth, provider)
  }

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if(result !== null) {
          const credential = GithubAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;

          const user = result.user;

          setLoginState({userId: user.uid});
          console.log(user.uid)
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);

        const errorCode = err.code;
        const errorMessage = err.message;
        const email = err.email;
      })
  })


  const [hasAccount, setValue] = useState(true);

  if(hasAccount){
    // サインインページ
    return (
      <Stack sx={{py: "30px", px: "20px"}}>
        <Loading open={isLoading} />
        <Typography children={"ログイン"} variant='h4' />


        <SignIn setLoginState={props.setLoginState} setUserID={props.setUserID} />
        <Button
          variant='contained'
          children="GitHubでログイン"
          size="medium"
          onClick={() => { clickGitHubLoginButton(); }}
          sx={{
            bgcolor: "black",
            width: "50%",
            textTransform: "none",
            alignSelf: "center",
            my: "10px",
          }}
          
        />
        <a href='/' onClick={(e)=>{
          e.preventDefault();
          setValue(false);
        }}>アカウントをお持ちではありませんか？</a>
      </Stack>
    )
  }else{
    // サインアップページ
    return (
      <div>
        <h1>アカウント登録</h1>
        <SignUp handleValueChange={setValue}/>
      </div>
    );

  }
}