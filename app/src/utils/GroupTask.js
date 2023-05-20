// ユーザの参加しているグループ一覧を取得
export function getGroups(userID){
    const req = userID;

    const res = {
        "groups": [
          {
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
        ]
      }
	return res;
}

// 新しいグループに参加する
export function joinGroup(groupID){
    const req = {
        "groupId": groupID
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
      }
	return res;
}