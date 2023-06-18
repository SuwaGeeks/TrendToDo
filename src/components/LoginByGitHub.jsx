import { useEffect } from "react";
import { getAuth, getRedirectResult, GithubAuthProvider, onAuthStateChanged, signInWithRedirect } from "firebase/auth";
import "../FirebaseConfig"

import { LoginStateAtom } from "../models/LoginStateAtom";
import { useRecoilState } from "recoil"; 

export const LoginByGitHub = () => {
  const [loginState, setLoginState] = useRecoilState(LoginStateAtom)

  const provider = new GithubAuthProvider();
  const auth = new getAuth();

  const clickLogin = () => {
    signInWithRedirect(auth, provider)
  }

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        console.log(result);
        if(result !== null) {
          const credential = GithubAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          console.log(token);

          const user = result.user;
          console.log(user);
          console.log(user.uid);

          setLoginState({userId: user.uid});
          console.log(loginState)
        }
      })
      .catch((err) => {
        console.log(err);

        const errorCode = err.code;
        const errorMessage = err.message;
        const email = err.email;
        console.log(errorCode);
        console.log(errorMessage);
        console.log(email);
      })
  })

  const checkLogin = () => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        const uid = user.uid;
        const email = user.email;
        console.log(uid);
        console.log(email);
      } else {
        console.log("signed out");
      }
    })
  }
  checkLogin();

  return (
    <div>
      <p>ログイン画面</p>
      <div>
        <button onClick={() => clickLogin()}>Login</button>
      </div>
    </div>
  )
}
