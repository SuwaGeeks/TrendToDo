import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { login } from "../../utils/Users";

export class SignIn extends React.Component {

	constructor(props) {
		super(props);
		this.state = {id: '', passwd: '', isCorrect: false, eMsg: ''};
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
						// helperText={(this.state.isCorrect)? this.state.eMsg:""}
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
						helperText={(this.state.isCorrect)? this.state.eMsg:""}
						onChange={this.passwdUpdate}
						error={this.state.isCorrect}
					/>
				</div>
				<div>
					<Button variant="contained" size="medium" onClick={() => {
						// ログイン処理
						login(this.state.id, this.state.passwd).then(res => {
							console.log(res.data)
							if(res.data.message){
								// ログイン成功
								this.setState({eMsg: res.data.message});
								this.setState({isCorrect: true});
							}else{
								// ログイン失敗
								console.log(`login with '${this.state.id}', '${this.state.passwd}'`);
								this.props.setUserID(res.data.user.userId);
								this.props.setLoginState(true);
							}
						})
						
					}}>
						ログイン
					</Button>
				</div>
				
			</div>
	)};
}