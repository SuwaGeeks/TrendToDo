// // 個人タスクの一覧を追加
export function getPersonalTasks(userId){
    const req = {'userId': userId};
    const res = {
        "userTasks": [
          {
            "taskId": 0,
            "hostUserId": "user1",
            "taskName": "Create TrendToDo App",
            "taskContent": "Create TrendToDo app by GeekCamp.",
            "taskLimit": "date record"
          }
        ]
      };
    return res;
}

// 新しい個人タスクの追加
export function addPersonalTask(userId){
    const res = {
        "tasikName": "string",
        "taskContent": "string",
        "taskLimit": "string"
      };
    return res;
}

// タスクIDで指定したタスクの情報を取得
export function getTask(userID, taskID){
    const req = {
        'userId': userID,
        'taskId': taskID
    }
    const res = {
        "tasikName": "string",
        "taskContent": "string",
        "taskLimit": "string"
      };
    return res;
}

// タスクIDで指定したタスクの内容を変更
export function changeTask(taskName, taskContent, taskLimit){
    const req ={
        "taskName": taskName,
        "taskContent": taskContent,
        "taskLimit": taskLimit
      };
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

// タスクIDで指定したタスクを削除
export function deleteTask(userToken, userID, taskID){
    const req = {
        'userToken': userToken,
        'userId': userID,
        'taskId': taskID
    };
    const res = {};
    return res;
}
