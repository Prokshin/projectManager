import axios from "axios";
import Cookies from "js-cookie";
import { IProject } from "../components/projects/projects";
import { IProjectMin } from "../components/forms/form-select/select-project";
import { ICategoryMin } from "../components/forms/form-select/select-category";
import { IGroupMin } from "../components/forms/form-select/select-group";

interface ICreator {
  id: string;
  email: string;
}
export interface IProjectExtend {
  id: string;
  title: string;
  description: string;
  creator: ICreator;
  categories: ICategory[];
}

interface ICategory {
  id: string;
  title: string;
  description: string;
}

export interface ICategoryExtend {
  id: string;
  title: string;
  description: string;
  groups: IGroup[];
  project: IProject;
}

interface IGroup {
  id: string;
  title: string;
  description: string;
}

export interface IGroupExtend {
  id: string;
  title: string;
  description: string;
  tasks: ITask[];
}

interface ITask {
  id: string;
  title: string;
  description: string;
}

export interface ITaskExtend {
  id: string;
  title: string;
  description: string;
  taskContent: {
    id: string;
    text: string;
  };
  comments: IComment[];
}

interface IComment {
  id: string;
  text: string;
  author: ICreator;
}

export default class ApiService {
  private GetRequest = async (url: string) => {
    return axios
      .get(`http://127.0.0.1:8080/api/user/${Cookies.get("userId")}/project${url}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      })
      .then((res) => {
        return res.data;
      })
      .catch((e) => console.error(e + "какая-то херня"));
  };
  private PostRequest = async (url: string, data: object) => {
    return axios.post(
      `http://localhost:8080/api/user/${Cookies.get("userId")}/project${url}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("jwt")}`,
          "Content-type": "application/json",
        },
      },
    );
  };

  //*Получение всех проектов пользователя
  getAllProjects = async (): Promise<IProject[]> => {
    const results: IProject[] = await this.GetRequest(``);
    return results;
  };

  //*Получение данных преокта  и списка категорий по id проекта
  getProject = async (projectId: string): Promise<IProjectExtend> => {
    const result: IProjectExtend = await this.GetRequest(`/${projectId}`);
    return result;
  };

  //*Получение данных категории и списка групп по id категории
  getCategory = async (projectId: string, categoryId: string): Promise<ICategoryExtend> => {
    const result: ICategoryExtend = await this.GetRequest(`/${projectId}/category/${categoryId}`);
    return result;
  };

  //*Получение данных группы и списка задач по id группы
  getGroup = async (
    projectId: string,
    categoryId: string,
    groupId: string,
  ): Promise<IGroupExtend> => {
    const result: IGroupExtend = await this.GetRequest(
      `/${projectId}/category/${categoryId}/group/${groupId}`,
    );
    return result;
  };

  //*Получение данных задачи и списка коментариев
  getTask = async (
    projectId: string,
    categoryId: string,
    groupId: string,
    taskId: string,
  ): Promise<ITaskExtend> => {
    const result: ITaskExtend = await this.GetRequest(
      `/${projectId}/category/${categoryId}/group/${groupId}/task/${taskId}`,
    );
    return result;
  };

  //*Получение массива всех проектов в виде [{id, title}]
  getAllProjectsMin = async (): Promise<IProjectMin[]> => {
    const fullProjects: IProject[] = await this.getAllProjects();
    const result: IProjectMin[] = fullProjects.map((res) => {
      return { id: res.id, title: res.title };
    });
    return result;
  };

  //*Получение массива всех категорий в виде [{id, title}]
  getCategoriesMin = async (id: string): Promise<ICategoryMin[]> => {
    const fullProject: IProjectExtend = await this.getProject(id);
    const result: ICategoryMin[] = fullProject.categories;
    return result;
  };

  //*Получение массива всех групп в виде [{id, title}]
  getGroupMin = async (projectId: string, categoryId: string) => {
    const fullCategory: ICategoryExtend = await this.getCategory(projectId, categoryId);
    const result: IGroupMin[] = fullCategory.groups;
    console.log(result);
    return result;
  };

  //*Создание нового проекта
  saveProject = async (title: string, description: string) => {
    const result = await this.PostRequest("", {
      title,
      description,
    });
    return result;
  };

  //*Создание новой категории
  saveCategory = async (title: string, description: string, projectId: string) => {
    const result = await this.PostRequest(`/${projectId}/category`, {
      title,
      description,
    });
    return result;
  };

  //*Создание новой группы
  saveGroup = async (title: string, description: string, projectId: string, categoryId: string) => {
    const result = await this.PostRequest(`/${projectId}/category/${categoryId}/group`, {
      title,
      description,
    });
    return result;
  };

  //*Создание новой задачи
  saveTask = async (
    title: string,
    description: string,
    content: string,
    projectId: string,
    categoryId: string,
    groupId: string,
  ) => {
    const result = await this.PostRequest(
      `/${projectId}/category/${categoryId}/group/${groupId}/task`,
      {
        title,
        description,
        content,
      },
    );
    return result;
  };
  getUser = async (id?: string) => {
    return this._userMin;
  };

  _userMin = {
    id: "00",
    name: "Иванов Иван",
    email: "ivanov.ivan@mail.ey",
  };
}
