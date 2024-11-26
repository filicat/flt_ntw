import axios, { Axios } from "axios";
import { AuthInfo, JegResult } from "../types";

export const BASE_URL = 'http://172.16.5.142:8080/jeecg-boot';

export const LoginApi = async (username: string, password: string): Promise<JegResult<AuthInfo>> => {
    const response = await axios.post<JegResult<AuthInfo>>(BASE_URL + '/sys/mLogin', {
        username,
        password,
      });
    if (response.status !== 200) {
      throw new Error('Axios Fail, StatusText:' +  response.statusText);
    }
    if (!response.data.success) {
        throw new Error('Login Fail, Message:' +  response.data.message);
    }
    return response.data;
}