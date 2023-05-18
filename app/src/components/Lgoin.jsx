import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export class Login extends React.Component {

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

	// ログイン処理
	login = () => {
		if(this.state.id === 'aaa' && this.state.passwd === 'bbb'){
			console.log(`login with '${this.state.id}', '${this.state.passwd}'`);
			this.props.handleValueChange(true);
		}else{
			this.setState({isCorrect: true});
		}
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
					<Button variant="contained" size="medium" onClick={this.login}>
						ログイン
					</Button>
				</div>
				
			</div>
	)};
}