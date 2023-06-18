import { atom } from "recoil";

export const LoginStateAtom = atom({
  key: "LoginState",
  default: {
    userId: null
  }
})