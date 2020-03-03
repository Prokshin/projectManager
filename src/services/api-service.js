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
  getAllProjects = async () => {
    return this._pojects;
  };
  getProject = async id => {
    return this._pojects[id];
  };
  getCategory = async id => {
    return this._category;
  };
}
