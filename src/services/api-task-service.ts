import RequestService, { IRequestService } from './request';

export default class ApiTaskService {
  private readonly requestService: IRequestService;

  constructor () {
    this.requestService = new RequestService();
  }
  saveTask = async (
    title: string,
    description: string,
    content: string,
    projectId: string,
    categoryId: string,
    groupId: string,
    expiredDate: string | null
  ) => {
    const result = await this.requestService.postRequest<any>(
      `project/1/category/1/group/1/task`,
      {
        title,
        description,
        content,
        expiredDate
      },
    );
    return result;
  };
}