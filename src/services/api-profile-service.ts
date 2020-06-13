import RequestService, { IRequestService } from './request';
import { IUser, IStatistics } from '../types/model-types';

export default class ApiProfileService {
  private readonly requestService: IRequestService;
  constructor () {
    this.requestService = new RequestService();
  }

  getUser = async ()=>{
    return await this.requestService.getRequest<IUser>('');
  }
  getStatistics = async () => {
      return await this.requestService.getRequest<IStatistics>('project/statistic')
  }


}