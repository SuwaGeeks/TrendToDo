import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export class Login extends React.Component {

	constructor(props) {
    super(props);
    this.state = {id: '', passwd: ''};
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
					/>
				</div>
				<div>
					<TextField
						id="outlined-password-input"
						label="パスワード"
						type="password"
						autoComplete="current-password"
					/>
				</div>
				<div>
					<Button variant="contained" size="medium">
						ログイン
					</Button>
				</div>
				
			</div>
	)};
}