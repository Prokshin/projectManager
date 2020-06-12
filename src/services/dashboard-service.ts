import RequestService, { IRequestService } from './request';
import { ITask } from '../types/model-types';

export default class DashboardService {
  private readonly requestService: IRequestService;

  constructor () {
    this.requestService = new RequestService();
  }

  getAllTasks = async () => {
    return await this.requestService.getRequest<any>('project/all');
  }

  getTodayTasks = async () => {
    return await this.requestService.getRequest<ITask[]>('project/today')
  }

  getWeekTasks = async () => {
    return await this.requestService.getRequest<ITask[]>('project/week')
  }

  getOutDateTasks = async () => {
      return await this.requestService.getRequest<any>('project/outdate')
  }

  getStatistic = async ()=>{
    return await this.requestService.getRequest<any>('project/')
  }
}