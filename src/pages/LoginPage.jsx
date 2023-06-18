import { useState } from 'react';
import { Header } from '../components/Header';
import { MainLayout } from '../components/layout/MainLayout';
import { SignIn } from '../components/Login/SignIn';
import { SignUp } from '../components/Login/SignUp';

export function LoginPage(props){

  const [hasAccount, setValue] = useState(true);

  if(hasAccount){
    // サインインページ
    return (
      <>
        <h1>ログイン</h1>
        <SignIn setLoginState={props.setLoginState} setUserID={props.setUserID}  />
        <a href='/' onClick={(e)=>{
          e.preventDefault();
          setValue(false);
        }}>アカウントをお持ちではありませんか？</a>
      </>
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