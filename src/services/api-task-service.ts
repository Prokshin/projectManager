import RequestService, { IRequestService } from './request';
import { ITaskFull, ITask, ITaskCreate } from '../types/model-types';

export default class ApiTaskService {
  private readonly requestService: IRequestService;

  constructor () {
    this.requestService = new RequestService();
  }

  getTask = async({projectId, categoryId, groupId, taskId}:ITaskInput) =>{
    return await this.requestService.getRequest(`project/${projectId}/category/${categoryId}/group/${groupId}/task/${taskId}`)
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
  deleteTask = async ({projectId, categoryId, groupId, taskId}:ITaskInput) =>{
    await this.requestService.deleteRequest(`project/${projectId}/category/${categoryId}/group/${groupId}/task/${taskId}`)
  }

  updateStatus = async({projectId, categoryId, groupId, taskId}:ITaskInput) =>{
    await this.requestService.putRequest<any>(`project/${projectId}/category/${categoryId}/group/${groupId}/task/${taskId}/status?status=COMPLETED`, {})
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

interface ITaskInput {
  projectId: string,
  categoryId: string,
  groupId: string,
  taskId: string
}