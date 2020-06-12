import RequestService, { IRequestService } from './request';
import { IParticipant, ICategory } from '../types/model-types';
import task from '../components/task/task';

export default class ApiCategoryService {
  private readonly requestService: IRequestService;
  constructor () {
    this.requestService = new RequestService();
  }

getCategory =async (projectId: string, categoryId: string) => {
    return await this.requestService.getRequest<ICategory>(`project/${projectId}/category/${categoryId}`);
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