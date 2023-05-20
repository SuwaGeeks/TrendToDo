import axios from "axios";

const baseURL = process.env.REACT_APP_API_ENDPOINT;
const port = process.env.REACT_APP_API_PORT;
const origin = baseURL + ':' + port;

// Test
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export function test() {
    axios.get(`${origin}`).then((response) => {
    console.log(response.data);
})};


// 新しいユーザの作成
export function createUser(name, passwd) {
    const req = {
        "userName": name,
        "password": passwd
      };
      
    const res = {
        "newUser": {
          "userId": 0,
          "userName": "string"
        }
      };
    return res;
}

// ユーザデータの更新
export function updateUser(userID, userName) {
    const req = {
        "usreName": userName
      };

    const res = {
        "user": {
          "userId": 0,
          "userName": "string"
        }
      };
    return res;
}

// ログイン
export function login(name, passwd) {
    const req = {
        "userName": name,
        "userPassword": passwd
      };

    const res = {
        "user": {
          "userId": 0,
          "userName": "string"
        },
        "userToken": "string"
      }
	return res;
}