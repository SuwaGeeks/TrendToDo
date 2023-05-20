import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { login } from "../../utils/Users";

export class SignIn extends React.Component {

	constructor(props) {
		super(props);
		this.state = {id: '', passwd: '', isCorrect: false};
	}

	IDUpdate = (event) => {
		this.setState({id: event.target.value});
	}

	passwdUpdate = (event) => {
		this.setState({passwd: event.target.value});
	}

	render(){
		return (
			<div className='login'>
				<div>
					<TextField
						id="outlined-password-input"
						label="ユーザーネーム"
						type="name"
						autoComplete="current-password"
						helperText={(this.state.isCorrect)? "入力が不正確です。":""}
						onChange={this.IDUpdate}
						error={this.state.isCorrect}
					/>
				</div>
				<div>
					<TextField
						id="outlined-password-input"
						label="パスワード"
						type="password"
						autoComplete="current-password"
						helperText={(this.state.isCorrect)? "入力が不正確です。":""}
						onChange={this.passwdUpdate}
						error={this.state.isCorrect}
					/>
				</div>
				<div>
					<Button variant="contained" size="medium" onClick={() => {
						// ログイン処理
						// const res = login()
						if(this.state.id === 'aaa' && this.state.passwd === 'bbb'){
							console.log(`login with '${this.state.id}', '${this.state.passwd}'`);
							this.props.handleValueChange(true);
						}else{
							this.setState({isCorrect: true});
						}
					}}>
						ログイン
					</Button>
				</div>
				
			</div>
	)};
}