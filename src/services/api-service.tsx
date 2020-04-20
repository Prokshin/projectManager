import axios from "axios";
import Cookies from "js-cookie";
import { IProject } from "../components/projects/projects";
import { IProjectMin } from "../components/forms/form-select/select-project";
import { ICategoryMin } from "../components/forms/form-select/select-category";
import { IGroupMin } from "../components/forms/form-select/select-group";
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
  getProject = async (projectId: string) => {
    const result = await this.GetRequest(`/${projectId}`);
    return result;
  };

  //*Получение данных категории и списка групп по id категории
  getCategory = async (projectId: string, categoryId: string) => {
    const result = await this.GetRequest(`/${projectId}/category/${categoryId}`);
    return result;
  };

  //*Получение данных группы и списка задач по id группы
  getGroup = async (projectId: string, categoryId: string, groupId: string) => {
    const result = await this.GetRequest(`/${projectId}/category/${categoryId}/group/${groupId}`);
    return result;
  };

  //*Получение данных задачи и списка коментариев
  getTask = async (projectId: string, categoryId: string, groupId: string, taskId: string) => {
    const result = await this.GetRequest(
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

  getCategoriesMin = async (id: string): Promise<ICategoryMin[]> => {
    const fullProject = await this.getProject(id);
    const result: ICategoryMin[] = fullProject.categories;
    return result;
  };

  getGroupMin = async (projectId: string, categoryId: string) => {
    const fullCategory = await this.getCategory(projectId, categoryId);
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

  // Registration = async () => {
  //   try {
  //     const response = await fetch("http://localhost:8080/api/user/login", {
  //       method: "POST", // или 'PUT'
  //       body: JSON.stringify({
  //         email: "rail@mail.ru",
  //         password: "123",
  //       }), // данные могут быть 'строкой' или {объектом}!
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const json = await response.json();
  //     console.log("Успех:", JSON.stringify(json));
  //   } catch (error) {
  //     console.error("Ошибка:", error);
  //   }
  // };
  _pojects = [
    {
      id: 0,
      title: "projectManager",
      description:
        "Разработка системы управления проектами, с использованием иерархического структурирования бизнес задач",
      creator: "Иванов Иван",
      category: [
        {
          id: "0_0",
          title: "Дизайн",
          description: "gg",
        },
        {
          id: "0_1",
          title: "Frontend",
          description: "gg",
        },
        {
          id: "0_2",
          title: "Backend",
          description: "gg",
        },
        {
          id: "0_3",
          title: "SMM",
          description: "gg",
        },
      ],
    },
    {
      id: 1,
      title: "Сайт web студии",
      description: "описание",
      category: [
        {
          id: "1_0",
          title: "Дизайн",
          description: "gg",
        },
        {
          id: "1_1",
          title: "Верстка",
          description: "gg",
        },
        {
          id: "1_2",
          title: "Backend",
          description: "gg",
        },
        {
          id: "1_3",
          title: "Базы данных",
          description: "gg",
        },
      ],
    },
  ];

  _category = {
    id: "01",
    title: "Дизайн",
    description:
      "Очень длинное описание категории, в которой будет разрабатываться внешний вид инетерфейсв приложения",
    groups: [
      {
        id: "main",
        title: "основная категория",
      },
      {
        id: "001",
        title: "UI",
        description: "описание UI",
      },
      {
        id: "002",
        title: "Рекламные банеры",
        description: "описание UI",
      },
      {
        id: "003",
        title: "Айдентика",
        description: "описание UI",
      },
    ],
  };

  _group = {
    id: "001",
    title: "UI",
    description: "Дизайн пользовательского интерфейса приложения. Используется adobe xd.",
    tasks: [
      {
        id: "0001",
        title: "Заголовок 1 задачи",
        description: "Описание 1 задачи",
      },
      {
        id: "0002",
        title: "Заголовок 2 задачи",
        description: "Описание 3 задачи",
      },
      {
        id: "0003",
        title: "Заголовок 3 задачи",
        description: "Описание 3 задачи",
      },
      {
        id: "0004",
        title: "Заголовок 4 задачи",
        description: "Описание 4 задачи",
      },
    ],
  };

  _task = {
    id: "00000",
    title: "Дизайн главной страницы",
    description: "Создания внешнего вида и структуры главной страницы сайта",
    text: "nnnnnnnnn",
    status: "available",
    comments: [
      {
        text: "текст",
        author: "Иванов Иван",
        link: {
          url: "",
          text: "Текст ссылки",
        },
      },
      {
        text: "текст",
        author: "Иванов Иван",
        link: {
          url: "",
          text: "Текст ссылки",
        },
      },
      {
        text: "текст 2",
        author: "Иванов Иван",
        link: {
          url: "",
          text: "Текст ссылки",
        },
      },
      {
        text: "текст 3",
        author: "Иванов Иван",
        link: {
          url: "",
          text: "Текст ссылки",
        },
      },
    ],
  };

  _projectsMin = [
    {
      id: "0",
      name: "projectManager",
    },
    {
      id: "1",
      name: "Сайт web студии",
    },
  ];

  _categoryMin = [
    {
      id: "0_0",
      name: "Дизайн",
    },
    {
      id: "0_1",
      name: "Frontend",
    },
  ];

  _groupMin = [
    {
      id: "0_0",
      name: "UI",
    },
    {
      id: "0_1",
      name: "Айдентика",
    },
  ];

  _userMin = {
    id: "00",
    name: "Иванов Иван",
    email: "ivanov.ivan@mail.ey",
  };
}
