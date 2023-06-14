import axios from "axios";

const baseURL = process.env.REACT_APP_API_ENDPOINT;
const port = process.env.REACT_APP_API_PORT;
const origin = baseURL + ':' + port + '/api';

// ユーザの参加しているグループ一覧を取得
export function getJoinedGroups(userID) {
	const req = userID;
	return axios.post(`${origin}/user`, req);
}

// 新しいグループに参加する
export function joinGroup(userID, groupName) {
	const req = {
		"groupName": groupName
	};
	return axios.post(`${origin}/user/${userID}/group`, req);
}

// ユーザIDで指定してたユーザが所属しているグループの全てのタスクを取得
export function getJoinedGroupTasks(userToken, userID) {
	const req = {
		'userToken': userToken,
		'userId': userID
	};
	const res = {
		"groupTasks": [
			{
				"taskId": 0,
				"taskGroupId": "string",
				"taskName": "string",
				"taskContent": "string",
				"taskLimit": "string",
				"taskWeight": 0,
				"meanTime": 0
			}
		]
	};
	return res;
}

// 新しいグループを作成する
export function createGroup(groupName) {
	const req = {
		"groupName": groupName
	};
	return axios.post(`${origin}/group`, req);
}

// グループの情報を取得
export function getGroupInfo(groupID) {
	const req = {
		'groupId': groupID
	};
	const res = {
		"group": {
			"groupId": 0,
			"groupName": "string",
			"groupUsers": [
				{
					"userId": 0,
					"userName": "string"
				}
			],
			"groupTasks": [
				{
					"taskId": 0,
					"taskGroupId": "string",
					"taskName": "string",
					"taskContent": "string",
					"taskLimit": "string",
					"taskWeight": 0,
					"meanTime": 0,
					"finished": true
				}
			]
		}
	};
	return res;
}

// グループIDで指定したグループに新しいタスクを追加
export function addTasks(userToken, groupID) {
	const req = {
		'userToken': userToken,
		'groupId': groupID
	};
	const res = {
		"groupId": "string",
		"taskName": "string",
		"taskContent": "string",
		"taskLimit": "string"
	};
	return res;
}

// 指定したグループの指定したタスクの情報を取得
export function getGroupTasks(userToken, groupID, taskID) {
	const req = {
		'userToken': userToken
	};
	const res = {
		"task": {
			"taskId": 0,
			"taskGroupId": "string",
			"taskName": "string",
			"taskContent": "string",
			"taskLimit": "string",
			"taskWeight": 0,
			"meanTime": 0,
			"finished": true
		}
	};
	return res;
}

// 指定したグループの指定したタスクの内容を変更
export function updateGroupTasks(userToken, groupID, taskID) {
	const req = {
		"taskName": "string",
		"taskContent": "string",
		"taskLimit": "string"
	};
	const res = {
		"task": {
			"taskId": 0,
			"taskGroupId": "string",
			"taskName": "string",
			"taskContent": "string",
			"taskLimit": "string",
			"taskWeight": 0,
			"meanTime": 0,
			"finished": true
		}
	};
	return res;
}

// 指定したグループの指定したタスクを削除
export function deleteGroupTasks(userToken, groupID, taskID) {
	const req = {'userToken': userToken};
	const res = {};
	return res;
}