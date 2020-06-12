import RequestService, { IRequestService } from './request';
import { IParticipant } from '../types/model-types';

export default class ApiParticipantService {
  private readonly requestService: IRequestService;

  constructor () {
    this.requestService = new RequestService();
  }

  getParticipant = async (projectId: string) => {
    return await this.requestService.getRequest<IParticipant[]>(`project/${projectId}/participant`)
  };

  addParticipant = async (
    email: string, projectId: string,
  ) => {
    const result = await this.requestService.postRequest<any>(
      `project/${projectId}/participant/?email=${email}`,
      {},
    );
    return result;
  };
}