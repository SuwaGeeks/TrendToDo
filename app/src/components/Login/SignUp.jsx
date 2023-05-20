import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function SignUp(props) {

	const [name, setName] = useState('');
	const [passwd, setPasswd] = useState('');
	const [isCorrect, setIsCorrect] = useState(false);

	return (
		<div className='login'>
			<div>
				<TextField
					id="outlined-password-input"
					label="ユーザーネーム"
					type="name"
					autoComplete="current-password"
					helperText={(isCorrect) ? "入力が不正確です。" : ""}
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
					helperText={(isCorrect) ? "入力が不正確です。" : ""}
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
					alert('登録しました。');
					/* TODO: 通信 */
					// waring 消し
					console.log(name);
					console.log(passwd);
					console.log(isCorrect);
					setIsCorrect(isCorrect);

					props.handleValueChange(true);
				}}>
					登録
				</Button>
			</div>

		</div>
	)
}