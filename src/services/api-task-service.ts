import RequestService, { IRequestService } from './request';
import { ITaskFull, ITask, ITaskCreate } from '../types/model-types';

export default class ApiTaskService {
  private readonly requestService: IRequestService;

  constructor () {
    this.requestService = new RequestService();
  }

  saveTask = async (
    { title, description, content, expiredDate, projectId, categoryId ,groupId} :ITaskCreateInput
  ) => {
    return this.requestService.postRequest<ITaskCreate>(
      `project/${projectId}/category/${categoryId}/group/${groupId}/task`,
      {
        title,
        description,
        content,
        expiredDate
      },
    );
  };
  deleteTask = async ({projectId, categoryId, groupId, taskId}:ITaskDeleteInput) =>{
    await this.requestService.deleteRequest(`project/${projectId}/category/${categoryId}/group/${groupId}/task/${taskId}`)
  }
}

interface ITaskCreateInput {
  title: string,
  description: string,
  content: string,
  projectId: string,
  categoryId: string,
  groupId: string,
  expiredDate: string | null
}

interface ITaskDeleteInput {
  projectId: string,
  categoryId: string,
  groupId: string,
  taskId: string
}