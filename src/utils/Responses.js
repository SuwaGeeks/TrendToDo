import { v4 as uuidv4 } from 'uuid';

export const getAppData = {
	"userTasks": [
		{
			"taskId": uuidv4(),
			"hostUserId": uuidv4(),
			"taskName": "ごはんつくる",
			"taskContent": "string",
			"taskLimit": "2022/06/21",
			"finishedAt": "string"
		},
		{
			"taskId": uuidv4(),
			"hostUserId": uuidv4(),
			"taskName": "ねる",
			"taskContent": "string",
			"taskLimit": "2022/06/21",
			"finishedAt": "string"
		}
	],
	"userGroups": [
		{
			"groupInfo": {
				"groupId": uuidv4(),
				"groupName": "グループA"
			},
			"groupTask": [
				{
					"taskId": uuidv4(),
					"taskGroupId": uuidv4(),
					"taskName": "あああ",
					"taskContent": "string",
					"taskLimit": "2022/06/21",
					"taskWeight": 0,
					"meanTime": 0,
					"finished": true
				},
				{
					"taskId": uuidv4(),
					"taskGroupId": uuidv4(),
					"taskName": "いいいい",
					"taskContent": "string",
					"taskLimit": "2022/06/21",
					"taskWeight": 0,
					"meanTime": 0,
					"finished": true
				},
				{
					"taskId": uuidv4(),
					"taskGroupId": uuidv4(),
					"taskName": "ううううう",
					"taskContent": "string",
					"taskLimit": "2022/06/21",
					"taskWeight": 0,
					"meanTime": 0,
					"finished": true
				}
			]
		},
		{
			"groupInfo": {
				"groupId": uuidv4(),
				"groupName": "グループB"
			},
			"groupTask": [
				{
					"taskId": uuidv4(),
					"taskGroupId": uuidv4(),
					"taskName": "えええ",
					"taskContent": "string",
					"taskLimit": "2022/06/21",
					"taskWeight": 0,
					"meanTime": 0,
					"finished": true
				},
				{
					"taskId": uuidv4(),
					"taskGroupId": uuidv4(),
					"taskName": "おおおお",
					"taskContent": "string",
					"taskLimit": "2022/06/21",
					"taskWeight": 0,
					"meanTime": 0,
					"finished": true
				}
			]
		}
	]
}