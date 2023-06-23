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
import axios from 'axios';

export function LoginPage(props){
  const [isLoading, setIsLoading] = useState(true);
  const [loginState, setLoginState] = useRecoilState(LoginStateAtom)

  const provider = new GithubAuthProvider();
  const auth = new getAuth();

  const clickGitHubLoginButton = () => {
    signInWithRedirect(auth, provider)
  }

  // ログイン後のリダイレクト結果を受け取る
  const getRedirectResultFunc = async () => {
    console.log("getRedirectResultFunc called.");
    getRedirectResult(auth)
      .then((result) => {
        if(result !== null) {
          const credential = GithubAuthProvider.credentialFromResult(result);

          const user = result.user;

          user.getIdToken().then(async idToken => {
            console.log(idToken)

            const sendData = {idToken: idToken};
            
            await axios.post(
              'https://us-central1-trend-to-do.cloudfunctions.net/sessionLogin',
              sendData,
              {headers: {'Content-Type': 'application/json',}},
            );
          })

          setLoginState({userId: user.uid});
          console.log(user.uid)
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  // ログインCookieの確認
  const checkLoginState = async () => {
    console.log("checkLoginState called.");
    await axios.post('https://us-central1-trend-to-do.cloudfunctions.net/checkLogin')
      .then(res => {
        if(res.status == 200) setLoginState({userId: res.data.userId})
      })
  }

  // ログインCookieの確認
  useEffect( () => {
    console.log("effect called.");
    if(loginState.userId == null)
      getRedirectResultFunc()
        .then(() => {
          if(loginState.userId == null) checkLoginState().then(() => {
            setIsLoading(false);
          })
        })
  }, []);


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