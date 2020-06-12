import RequestService, { IRequestService } from './request';
import { IParticipant } from '../types/model-types';

export default class ApiResponsibleService {
  private readonly requestService: IRequestService;

  constructor () {
    this.requestService = new RequestService();
  }

  getResponsible = async (projectId: string) => {
    return await this.requestService.getRequest<IParticipant[]>(`project/my`)
  };

  addResponsible = async ({projectId, categoryId, groupId, taskId, userId}:IResponsibleInput ) => {
    const result = await this.requestService.putRequest<any>(
      `project/${projectId}/category/${categoryId}/group/${groupId}/task/${taskId}/responsible?userId=${userId}`,
      {},
    );
    return result;
  };
}

interface IResponsibleInput{
    projectId: string,
    categoryId: string,
    groupId: string,
    taskId: string,
    userId: string
}