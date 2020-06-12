import RequestService, { IRequestService } from './request';
import { IParticipant } from '../types/model-types';
import task from '../components/task/task';

export default class ApiCategoryService {
  private readonly requestService: IRequestService;
  constructor () {
    this.requestService = new RequestService();
  }

 deleteCategory = async (
    {  projectId,categoryId}: IDeleteGroupInput
  ) => {
    const result = await this.requestService.deleteRequest<any>(
      `project/${projectId}/category/${categoryId}`
     
    );
    return result;
  };
}

interface IDeleteGroupInput {
  projectId: string,
  categoryId: string,
}