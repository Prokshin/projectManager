import RequestService, { IRequestService } from './request';
import {IUser } from '../types/model-types';

export default class ApiUserService {
  private readonly requestService: IRequestService;
  constructor () {
    this.requestService = new RequestService();
  }

 getUser = async () =>{
    return await this.requestService.getRequest<IUser>('')
 }
}

interface IDeleteGroupInput {
  projectId: string,
  categoryId: string,
}