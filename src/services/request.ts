import { Method } from '../types/service-types';
import Cookies from 'js-cookie';

export interface IRequestService {
  getRequest: <T>(url: string) => Promise<T>,
  postRequest: <T>(url: string, data: T) => void
  putRequest: <T>(url: string, data: T) => void
  patchRequest: <T>(url: string, data: T) => void
  deleteRequest: <T>(url: string) => void
}

export default class RequestService implements IRequestService {

  private readonly requestHeaders: HeadersInit = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${Cookies.get("jwt")}`,
  };

  private Request = async <T> (url: string, method: Method, data?: T): Promise<Response> => {
    const response = await fetch(`http://localhost:8080/api/user/${Cookies.get("userId")}/${url}`, {
      method,
      headers: this.requestHeaders,
      body: JSON.stringify(data),
    });
    console.log("========", response)
    if (!response.ok) throw new Error('Ошибка');

    return response;
  };

  private Unauthorized = () => {
    localStorage.removeItem('jwt');
    window.location.href = 'login';
  };

  getRequest = async <T> (url: string): Promise<T> => {
    return await this.Request(url, Method.Get).then(res => res.json());
  };

  postRequest = async <T> (url: string, data: T) => {
    await this.Request<T>(url, Method.Post, data);
  };

  putRequest = async <T> (url: string, data: T) => {
    await this.Request<T>(url, Method.Put, data);
  };
  patchRequest = async <T> (url: string, data: T) => {
    await this.Request<T>(url, Method.Patch, data);
  };
  deleteRequest = async <T> (url: string) => {
    await this.Request<T>(url, Method.Delete);
  };
}
