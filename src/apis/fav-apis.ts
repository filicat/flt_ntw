import { plainToClass } from 'class-transformer';
import {AuthInfo} from '../types';
import { postFav } from './fav-axios';

export const favMLogin = async (serverhost: string, username: string, password: string): Promise<AuthInfo> => {
  return postFav<AuthInfo>({
    serverhost: serverhost,
    endpoint: '/sys/mLogin',
    body: {username, password},
  }).then(ret => {
    return plainToClass(AuthInfo, ret);
  });
};
