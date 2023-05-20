// 個人タスクを消化する
export function submitTask(userToken, taskId){
    const req = {'userToken': userToken};
    const res = {
        "task": {
          "taskId": 0,
          "hostUserId": "string",
          "taskName": "string",
          "taskContent": "string",
          "taskLimit": "string",
          "finished": true
        }
      };
    return res;
}

// 消化を受け付ける
export function submitTask(userToken, taskId){
    const req = {
        "finishedAt": "string",
        "taskWeght": 0,
        "taskTime": 0
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