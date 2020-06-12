import RequestService, { IRequestService } from './request';
import { IParticipant } from '../types/model-types';
import task from '../components/task/task';

export default class ApiGroupService {
  private readonly requestService: IRequestService;
  constructor () {
    this.requestService = new RequestService();
  }

 deleteGroup = async (
    {  projectId,categoryId, groupId}: IDeleteGroupInput
  ) => {
    const result = await this.requestService.deleteRequest<any>(
      `project/${projectId}/category/${categoryId}/group/${groupId}`
     
    );
    return result;
  };
}

interface IDeleteGroupInput {
  projectId: string,
  categoryId: string,
  groupId: string,
}