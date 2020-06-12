import RequestService, { IRequestService } from './request';

export default class ApiParticipantService {
  private readonly requestService: IRequestService;

  constructor () {
    this.requestService = new RequestService();
  }
  addParticipant = async (
  email: string, projectId: string
  ) => {
    const result = await this.requestService.postRequest<any>(
      `project/${projectId}/participant/?email=${email}`,
      {},
    );
    return result;
  };
}