import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export class Login extends React.Component {

	constructor(props) {
    super(props);
    this.state = {id: '', passwd: ''};
  }

	IDUpdate = (event) => {
		this.setState({id: event.target.value});
	}

	passwdUpdate = (event) => {
		this.setState({passwd: event.target.value});
	}

	// ログイン処理
	login = () => {
		console.log(`login with '${this.state.id}', '${this.state.passwd}'`);
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
						onChange={this.IDUpdate}
					/>
				</div>
				<div>
					<TextField
						id="outlined-password-input"
						label="パスワード"
						type="password"
						autoComplete="current-password"
						onChange={this.passwdUpdate}
					/>
				</div>
				<div>
					<Button variant="contained" size="medium" onClick={this.login}>
						ログイン
					</Button>
				</div>
				
			</div>
	)};
}