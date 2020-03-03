export default class ApiService {
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
          description: "gg"
        },
        {
          id: "0_1",
          title: "Frontend",
          description: "gg"
        },
        {
          id: "0_2",
          title: "Backend",
          description: "gg"
        },
        {
          id: "0_3",
          title: "SMM",
          description: "gg"
        }
      ]
    },
    {
      id: 1,
      title: "Сайт web студии",
      description: "описание",
      category: [
        {
          id: "1_0",
          title: "Дизайн",
          description: "gg"
        },
        {
          id: "1_1",
          title: "Верстка",
          description: "gg"
        },
        {
          id: "1_2",
          title: "Backend",
          description: "gg"
        },
        {
          id: "1_3",
          title: "Базы данных",
          description: "gg"
        }
      ]
    }
  ];

  _category = {
    id: "01",
    title: "Дизайн",
    description:
      "Очень длинное описание категории, в которой будет разрабатываться внешний вид инетерфейсв приложения",
    groups: [
      {
        id: "main",
        title: "основная категория"
      },
      {
        id: "001",
        title: "UI",
        description: "описание UI"
      },
      {
        id: "002",
        title: "Рекламные банеры",
        description: "описание UI"
      },
      {
        id: "003",
        title: "Айдентика",
        description: "описание UI"
      }
    ]
  };

  _group = {
    id: "001",
    title: "UI",
    description:
      "Дизайн пользовательского интерфейса приложения. Используется adobe xd.",
    tasks: [
      {
        id: "0001",
        title: "Заголовок 1 задачи",
        description: "Описание 1 задачи"
      },
      {
        id: "0002",
        title: "Заголовок 2 задачи",
        description: "Описание 3 задачи"
      },
      {
        id: "0003",
        title: "Заголовок 3 задачи",
        description: "Описание 3 задачи"
      },
      {
        id: "0004",
        title: "Заголовок 4 задачи",
        description: "Описание 4 задачи"
      }
    ]
  };

  getAllProjects = async () => {
    return this._pojects;
  };
  getProject = async id => {
    return this._pojects[id];
  };
  getCategory = async id => {
    return this._category;
  };
  getGroup = async id => {
    return this._group;
  };
}
