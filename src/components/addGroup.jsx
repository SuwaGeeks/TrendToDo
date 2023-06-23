import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import GroupAdd from '@mui/icons-material/GroupAdd';
import TextField from '@mui/material/TextField';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { AppStateAtom } from "../models/AppStateAtom";
import { useRecoilState } from "recoil"; 

import { UserData } from "../utils/UserData";


import axios from "axios";
import { Group } from "@mui/icons-material";

export function AddGroup(props) {

	const [AppState, setAppState] = useRecoilState(AppStateAtom);

	const [groupList, setGroupList] = useState([]);

	const [state, setState] = useState(0);
	const [groupId, setGroupId] = useState('');
	const [groupName, setGroupName] = useState('');
	const [isCorrect, setIsCorrect] = useState(false);
	const [eMsg, setErrMsg] = useState('');

	// グループリストの取得
	useEffect(() => {
		axios.post('/getGroupList') // Replace with your API endpoint
		  .then(response => {
			setGroupList(response.data.groups);
		  })
		  .catch(error => {
			console.log(error);
		  });
	  }, []);

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
						グループ作成
					</Button>
				</div>
			}
			{
				// 状態
				state === 1 &&
				<div>
					<div>
					<FormControl>
						<InputLabel id="select-autowidth">グループ名</InputLabel>
						<Select
						labelId="demo-simple-select-autowidth-label"
						id="demo-simple-select-autowidth"
						value={groupId}
						onChange={(e)=>{setGroupId(e.target.value)}}
						sx={{
							width: '200px',
							height: '55px',
						  }}
						label="groupName"
						>
						{groupList.map(item => (
							<MenuItem value={item.groupId} key={item.groupId}>{item.groupName}</MenuItem>
							))}
						</Select>
					</FormControl>
					</div>
					<div>
						<Button variant="outlined" endIcon={<GroupAdd />} onClick={()=>{
								setState(0);
							}}>
							戻る
						</Button>
						<Button variant="contained" endIcon={<GroupAdd />} onClick={()=>{
							axios.post('/joinGroup', {
								groupId: groupId,
								userId: AppState.userData.userID
							}).then(async res => {
								console.log(res.data);
								if(res.data.message){
									setAppState({userData: await UserData.init(AppState.userData.userID)});
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
							axios.post('/createGroup',{
								groupName: groupName
							  }).then(async res => {
								// 再読み込み
								setAppState({userData: await UserData.init(AppState.userData.userID)});
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