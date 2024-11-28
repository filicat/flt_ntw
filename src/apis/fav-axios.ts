import axios, {AxiosHeaders, AxiosResponse, RawAxiosRequestHeaders} from 'axios';
import {JegResult} from '../types';

// 通用的 Axios 请求函数
const makeRequest = async <R>(
  method: 'get' | 'post',
  url: string,
  params?: any,
  data?: any,
  headers?: any,
): Promise<R> => {
  const config = {
    method,
    url,
    params,
    data,
    headers,
  };

  try {
    const response: AxiosResponse<JegResult<R>> = await axios(config);

    if (response.status !== 200) {
      throw new Error(response.statusText || '请求失败');
    }

    const ret: JegResult<R> = response.data;

    if (ret.code !== 200) {
      throw new Error(ret.message || '请求失败');
    }

    // 根据返回的数据类型进行转换
    return ret.result as R;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

// 通用的 GET 请求函数
const makeGetRequest = async <R>(
  url: string,
  params?: any,
  headers?: any,
): Promise<R> => {
  return makeRequest<R>('get', url, params, undefined, headers);
};

// 通用的 POST 请求函数
const makePostRequest = async <R>(
  url: string,
  data?: any,
  params?: any,
  headers?: any,
): Promise<R> => {
  return makeRequest<R>('post', url, params, data, headers);
};

export interface ComApiDef {
  method: 'GET' | 'POST';
  endpoint: string;
  query?: Record<string, string>[];
  body?: any;
  headers?: RawAxiosRequestHeaders | AxiosHeaders;
}

class FavApis {
  static readonly baseUrl = '/jeecg-boot';

  comApiDef: ComApiDef;

  constructor(comApiDef: ComApiDef) {
    this.comApiDef = comApiDef;
  }
}

function favFetch<R>(serverhost: string, comApiDef: ComApiDef): Promise<R> {

  // let {comApiDef: apiParam} = new FavApis(comApiDef);
  let url = `${
    serverhost.startsWith('http://') ? serverhost : 'http://' + serverhost
  }${FavApis.baseUrl}${comApiDef.endpoint}`;
  if (comApiDef.query?.length) {
    const queryparam = new URLSearchParams()
    comApiDef.query.forEach(item => {
      queryparam.append(item.key, item.value);
    });
    url += '?' + queryparam.toString();
  }
  if (comApiDef.method === 'GET') {
    return makeGetRequest<R>(url, comApiDef.query, comApiDef.headers);
  } else {
    return makePostRequest<R>(
      url,
      JSON.stringify(comApiDef.body),
      comApiDef.query,
      {
        ...comApiDef.headers,
        'Content-Type': 'application/json',
      },
    );
  }
}

type ComApiDefWithoutMethod = Omit<ComApiDef, 'method'>;
type GetApiDef = Omit<ComApiDefWithoutMethod, 'body'> & {serverhost: string};
type PostApiDef = ComApiDefWithoutMethod & {serverhost: string};

export function getFav<R>(apiDef: GetApiDef): Promise<R> {
  return favFetch<R>(apiDef.serverhost, {
    method: 'GET',
    endpoint: apiDef.endpoint,
    query: apiDef.query,
    headers: apiDef.headers,
  });
}

export function postFav<R>(apiDef: PostApiDef): Promise<R> {
  return favFetch<R>(apiDef.serverhost, {
    method: 'POST',
    endpoint: apiDef.endpoint,
    query: apiDef.query,
    headers: apiDef.headers,
    body: apiDef.body,
  });
}
