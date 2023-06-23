import { useState, useEffect } from 'react';
import { Stack } from '@mui/material';

import { Loading } from '../components/Loading';
import { SignIn } from '../components/SignIn';
import { SignUp } from '../components/SignUp';

import { getAuth, getRedirectResult, GithubAuthProvider, signInWithRedirect } from "firebase/auth";
import "../FirebaseConfig"

import { useRecoilState } from "recoil"; 
import { LoginStateAtom } from "../models/LoginStateAtom";
import { AppStateAtom } from "../models/AppStateAtom";

import { UserData } from "../utils/UserData";
import Cookies from 'js-cookie';

export function LoginPage(props){
  const [isLoading, setIsLoading] = useState(true);
  const [loginState, setLoginState] = useRecoilState(LoginStateAtom);
  const [AppState, setAppState] = useRecoilState(AppStateAtom);

  const auth = new getAuth();

  // ログイン後のリダイレクト結果を受け取る
  const getRedirectResultFunc = async () => {
    await getRedirectResult(auth)
      .then(async (result) => {
        if(result !== null) {
          const credential = GithubAuthProvider.credentialFromResult(result);

          const user = result.user;
          
          // cookieにログイン状況を保存
          Cookies.set('userId', user.uid);

          setAppState({userData: await UserData.init(user.uid)})
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
      setAppState({userData: await UserData.init(userId)})
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


  const [isSignUp, setSignUpFlag] = useState(false);

  function handleClick() {
    setSignUpFlag(!isSignUp);
  }

  return (
    <Stack sx={{py: "50px", px: "30px"}}>
      <Loading open={isLoading} />
      
      {
        isSignUp ? 
          <SignUp handleClick={handleClick} /> :
          <SignIn handleClick={handleClick} />
      }
    </Stack>
  )
}