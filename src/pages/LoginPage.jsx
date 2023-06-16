import { useState } from 'react';
import { TheHeader } from '../components/TheHeader';
import { SignIn } from '../components/Login/SignIn';
import { SignUp } from '../components/Login/SignUp';

export function LoginPage(props){

  const [hasAccount, setValue] = useState(true);

  if(hasAccount){
    // サインインページ
    return (
      <div>
        <TheHeader/>
        <h1>ログイン</h1>
        <SignIn setLoginState={props.setLoginState} setUserID={props.setUserID}  />
        <a href='/' onClick={(e)=>{
          e.preventDefault();
          setValue(false);
        }}>アカウントをお持ちではありませんか？</a>
      </div>
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