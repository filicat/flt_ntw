import { Transform, Type } from "class-transformer";
import 'reflect-metadata'; 

export class JegResult<T> {
    success: boolean;
    message: string;
    code: number;

    result: T;

    constructor(success: boolean, message: string, code: number, result: T) {
        this.success = success;
        this.message = message;
        this.code = code;
        this.result = result;
    }
}

export class AuthInfo {
    @Type(() => UserInfo)
    userInfo: UserInfo | null;
    token: string | null;

    constructor(userInfo: UserInfo | null, token: string | null) {
        this.userInfo = userInfo;
        this.token = token;
    }

}

export const initAuthInfo: AuthInfo = {
    userInfo: null,
    token: null
}

export class UserInfo {
    id: string;
    username: string;
    realname: string;
    avatar: string;
    status: number;
    @Transform(({ value }) => value ? new Date(value) : null)
    createTime: Date;

    constructor(id: string, username: string, realname: string, avatar: string, status: number, createTime: Date) {
        this.id = id;
        this.username = username;
        this.realname = realname;
        this.avatar = avatar;
        this.status = status;
        this.createTime = createTime;
    }
}
