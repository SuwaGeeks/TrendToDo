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

import Cookies from 'js-cookie';

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
    await getRedirectResult(auth)
      .then((result) => {
        if(result !== null) {
          const credential = GithubAuthProvider.credentialFromResult(result);

          const user = result.user;
          
          // cookieにログイン状況を保存
          Cookies.set('userId', user.uid);

          setLoginState({userId: user.uid});
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  // ログインCookieの確認
  const checkLoginState = async () => {
    const userId = Cookies.get('userId');
    if(typeof userId == 'string') {
      setLoginState({userId: userId});
    }
  }

  // ログインCookieの確認
  useEffect( () => {
    if(loginState.userId == null)
      getRedirectResultFunc()
        .then(() => {
          if(loginState.userId == null) checkLoginState().then(() => {
            if(loginState.userId == null) setIsLoading(false);
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