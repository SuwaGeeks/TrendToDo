import { useState } from 'react';
import { SignIn } from "./SignIn";
import { SignUp } from './SignUp';

export function Login(props){

	const [hasAccount, setValue] = useState(true);

	if(hasAccount){
		// サインインページ
		return (
			<div>
				<h1>ログイン</h1>
				<SignIn handleValueChange={props.handleValueChange} />
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