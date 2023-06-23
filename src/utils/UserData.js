import axios from "axios";

async function getAppData(userID) {
    try {
      const response = await axios.post('/getAppData', { userId: userID });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

export class UserData {

    // APIサーバからのデータでインスタンス化
    constructor(appData, userID) {
        this.userID = userID;
        this.userData = appData;
    }

    // データの取得を同期的に行うために静的メソッドでインスタンス化
    static init = async (userID) => {
        return new UserData(await getAppData(userID), userID);
    }

    // グループリストを取得
    // e.g. -> [{className: "授業A", groupID:123}, {className: "授業B", groupID:456}]
    getGropuList() {
        var groupList = [];
        this.userData.userGroups.forEach(elem => {
            groupList.push({
                className: elem.groupInfo.groupName,
                groupID: elem.groupInfo.groupId
            })
        });
        return groupList;
    }

    // 残っている個人タスクの数を取得
    // e.g. -> 2
    getNumOfPersonalTasks() {
        return this.userData.userTasks.length;
    }

    // 残っているグループタスクの数を取得
    // e.g. -> 4
    getNumOfGroupTasks() {
        // 個人タスク
        var ret = 0;
        this.userData.userGroups.forEach(group => {
            ret += group.groupTask.length
        });
        return ret;
    }

    // グループのタスク一覧を取得
    // e.g. -> [
    // {title: "タスク１", limit: "yyyy/mm/dd", eva: 1.25, meanTime: "dd日hh時間mm分"},
    // {title: "タスク２", limit: "yyyy/mm/dd", eva: 1.25, meanTime: "dd日hh時間mm分"},
    // ]
    getGropuTasksFromName(groupName) {
        const groups = this.userData.userGroups;
        const group = groups.find(group => group.groupInfo.groupName === groupName);

        if (group) {
            const groupTasks = group.groupTask.map(elem => ({
                title: elem.taskName,
                limit: elem.taskLimit,
                eva: elem.taskWeight,
                meanTime: elem.meanTime,
                isFinished: elem.finished,
                id: elem.taskId,
                gid: elem.taskGroupID
            }));

            return groupTasks;
        }

        return [];
    }

    // グループタスクのIDからグループタスクの情報を取得
    getGropuTaskFromId(groupTaskId) {
        const groups = this.userData.userGroups;
        var ret = {};

        groups.forEach(group => {
            const tasks = group.groupTask;
            tasks.forEach(task => {
                if(task.taskId == groupTaskId){
                    ret = task;
                }
            })
        });
        return ret;
    }

    // 個人のタスク一覧を取得
    // e.g. -> [
    // {title: "タスク１", limit: "yyyy/mm/dd"},
    // {title: "タスク２", limit: "yyyy/mm/dd"},
    // ]
    getPersonalTasks() {
        const userTasks = this.userData.userTasks
        const personalTasks = userTasks.map(elem => ({
            title: elem.taskName,
            limit: elem.taskLimit
        }));

        return personalTasks;
    }

    // グループタスクをfinishedにする
    finishGroupTask(taskId, groupId){
        for (let i = 0; i < this.userData.userGroups.length; i++) {
            for (let j = 0; j < this.userData.userGroups[i].groupTask.length; j++) {
                const elem = this.userData.userGroups[i].groupTask[j];
                if(elem.taskId == taskId && elem.taskGroupId == groupId){
                    this.userData.userGroups[i].groupTask[j].finished = true;
                }
            }
        }
    }

}