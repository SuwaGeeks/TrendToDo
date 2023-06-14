import { useState } from "react";
import Button from '@mui/material/Button';
import GroupAdd from '@mui/icons-material/GroupAdd';
import TextField from '@mui/material/TextField';
import { joinGroup, createGroup } from "../utils/GroupTask";

export function AddGroup(props) {
	const [state, setState] = useState(0);
	const [groupName, setGroupName] = useState('');
	const [isCorrect, setIsCorrect] = useState(false);
	const [eMsg, setErrMsg] = useState('');

	return (
		<div>
			{
				// 追加ボタン状態
				state === 0 &&
				<div>
					<Button variant="outlined" startIcon={<GroupAdd />} onClick={()=>{setState(1)}}>
						グループ参加
					</Button>
					<Button variant="outlined" startIcon={<GroupAdd />} onClick={()=>{setState(3)}}>
						グループ追加
					</Button>
				</div>
			}
			{
				// 状態
				state === 1 &&
				<div>
					<div>
						<TextField
							id="outlined-password-input"
							label="グループ名"
							type="name"
							autoComplete="current-password"
							helperText={(isCorrect) ? eMsg : ""}
							onChange={(e)=>{setGroupName(e.target.value)}}
							error={isCorrect}
						/>
					</div>
					<div>
						<Button variant="outlined" endIcon={<GroupAdd />} onClick={()=>{
								setState(0);
							}}>
							戻る
						</Button>
						<Button variant="contained" endIcon={<GroupAdd />} onClick={()=>{
							joinGroup(props.userID, groupName).then(res => {
								console.log(res.data);
								if(res.data.message){
									setIsCorrect(true);
									setErrMsg(res.data.message);
								}else{
									setState(2);
									setIsCorrect(false);
								}

							})
						}}>
							参加
						</Button>					
					</div>
				</div>

			}
			{
				// 確認状態
				state === 2 &&
				<div>
					<Button variant="contained" onClick={()=>{
						setState(0);
						setIsCorrect(false);
					}}>
						完了
					</Button>
				</div>
			}{
				state === 3 &&
				<div>
					<div>
						<TextField
							id="outlined-password-input"
							label="グループ名"
							type="name"
							autoComplete="current-password"
							helperText={(isCorrect) ? eMsg : ""}
							onChange={(e)=>{setGroupName(e.target.value)}}
							error={isCorrect}
						/>
					</div>
					<div>
						<Button variant="outlined" endIcon={<GroupAdd />} onClick={()=>{
								setState(0);
								setIsCorrect(false);
							}}>
							戻る
						</Button>
						<Button variant="contained" endIcon={<GroupAdd />} onClick={()=>{
							createGroup(groupName).then(res => {
								console.log(res);
								setState(2);
								setIsCorrect(false);
							});
						}}>
							追加
						</Button>
					</div>
				</div>
			}
		</div>
	);
}