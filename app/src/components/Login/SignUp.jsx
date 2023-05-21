import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { createUser } from "../../utils/Users";

export function SignUp(props) {

	const [name, setName] = useState('');
	const [passwd, setPasswd] = useState('');
	const [isCorrect, setIsCorrect] = useState(false);
	const [eMsg, setErrMsg] = useState('');

	return (
		<div className='login'>
			<div>
				<TextField
					id="outlined-password-input"
					label="ユーザーネーム"
					type="name"
					autoComplete="current-password"
					helperText={(isCorrect) ? eMsg : ""}
					onChange={(e)=>{setName(e.target.value)}}
					error={isCorrect}
				/>
			</div>
			<div>
				<TextField
					id="outlined-password-input"
					label="パスワード"
					type="password"
					autoComplete="current-password"
					helperText={(isCorrect) ? eMsg : ""}
					onChange={(e)=>{setPasswd(e.target.value)}}
					error={isCorrect}
				/>
			</div>
			<div>
			<Button variant="contained" size="medium" onClick={()=>{
				props.handleValueChange(true);
			}}>
				戻る
			</Button>
				<Button variant="contained" size="medium" onClick={()=>{
					createUser(name, passwd).then(res => {
						// console.log(res);
						if(res.message){
							setErrMsg(res.message);
							setIsCorrect(true);
						}else{
							alert('登録しました。');
							props.handleValueChange(true);
						}
					});
					
				}}>
					登録
				</Button>
			</div>

		</div>
	)
}