import { Exclude, Transform, Type } from "class-transformer";
export class JegResult<T> {

    @Exclude()
    private type: Function;
  
    @Type(options => {
      return (options?.newObject as JegResult<T>).type;
    })
    result?: T;

    success: boolean = false;
    message: string = '';
    code: number = 0;

    // constructor(type: Function) {
    //     this.type = type;
    // }

    constructor(type: Function, success: boolean = false, message: string = '', code: number = 0) {
        this.success = success;
        this.message = message;
        this.code = code;
        this.type = type;
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
    // @Transform(({ value }) => value ? new Date(value) : null)
    @Type(() =>Date)
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
