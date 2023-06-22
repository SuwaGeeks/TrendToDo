import { atom } from "recoil";

export const AppStateAtom = atom({
  key: "AppState",
  default: {
    userData: null
  }
})