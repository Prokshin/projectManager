import RequestService, { IRequestService } from './request';

export default class ApiProjectService {
  private readonly requestService: IRequestService;
  constructor () {
    this.requestService = new RequestService();
  }

 deleteProject = async (
    {  projectId,}: IDeleteProjectInput
  ) => {
    const result = await this.requestService.deleteRequest<any>(
      `project/${projectId}`
     
    );
    return result;
  };
}

interface IDeleteProjectInput {
  projectId: string
}