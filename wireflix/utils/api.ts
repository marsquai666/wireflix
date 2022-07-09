import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

/**
 * APIにリクエストを送り情報を取得する
 * @param url 
 * @param params 
 * @param headers 
 * @returns 
 */
export const apiGet = async <REQ, RES>(url: string, params: REQ, headers?: { [key: string]: string }): Promise<RES> => {
  const config: AxiosRequestConfig<REQ> = {
    params: params,
    headers: {
      'Content-Type': 'application/json',
      ...headers
    }
  }

  const response = await axios.get<RES, AxiosResponse<RES>, REQ>(url, config);

  if (response.status >= 200 && response.status < 300) {
    return response.data;
  }
  else {
    console.error(response);
    alert('APIに問題あり');
    throw new Error('APIに問題あり');
  }
}