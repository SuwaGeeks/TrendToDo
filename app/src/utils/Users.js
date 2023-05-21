import axios from "axios";

const baseURL = process.env.REACT_APP_API_ENDPOINT;
const port = process.env.REACT_APP_API_PORT;
const origin = baseURL + ':' + port + '/api';

export function test() {
	return axios.get(`${origin}`);
};


// 新しいユーザの作成
export function createUser(name, passwd) {
    const req = {
        "userName": name,
        "password": passwd
      };

    return axios.post(`${origin}/user`, req);
}

// ログイン
export function login(name, passwd) {
    const req = {
        "userName": name,
        "userPassword": passwd
      };
	return axios.post(`${origin}/login`, req);
}