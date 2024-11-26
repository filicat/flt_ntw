export interface JegResult<T> {
    success: boolean;
    message: string,
    code: number;
    result: T;
}

export interface AuthInfo {
    userInfo: UserInfo | null;
    token: string | null;
}

export const initAuthInfo: AuthInfo = {
    userInfo: null,
    token: null
}

export interface UserInfo {
    id: string;
    username: string;
    realname: string;
    avatar: string;
}
