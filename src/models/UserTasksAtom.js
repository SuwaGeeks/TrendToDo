import { atom } from "recoil";

export const UserTasksAtom = atom({
  key: "UserTasks",
  default: {
    userTasks: []
  }
})