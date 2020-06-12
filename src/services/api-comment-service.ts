import RequestService, { IRequestService } from './request';
import { IParticipant } from '../types/model-types';
import task from '../components/task/task';

export default class ApiCommentService {
  private readonly requestService: IRequestService;

  constructor () {
    this.requestService = new RequestService();
  }

  getParticipant = async (projectId: string) => {
    return await this.requestService.getRequest<IParticipant[]>(`project/${projectId}/participant`)
  };

  createComment = async (
    { text, projectId,categoryId, groupId, taskId }: ICreateCommentInput
  ) => {
    const result = await this.requestService.postRequest<any>(
      `project/${projectId}/category/${categoryId}/group/${groupId}/task/${taskId}/comment`,
      {
        text
      },
    );
    return result;
  };
}

interface ICreateCommentInput {
  text: string,
  projectId: string,
  categoryId: string,
  groupId: string,
  taskId: string
}