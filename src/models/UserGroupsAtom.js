import { atom } from "recoil";

export const UserGroupsAtom = atom({
  key: "UserGroups",
  default: {
    userGroups: []
  }
})