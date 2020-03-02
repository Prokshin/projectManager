export default class ApiService {
  _pojects = [
    {
      id: 0,
      title: "projectManager",
      description:
        "Разработка системы управления проектами, с использованием иерархического структурирования бизнес задач",
      creator: "Иванов Иван",
      categoкy: [
        {
          id: 0,
          title: "Дизайн",
          description: "gg"
        },
        {
          id: 0,
          title: "Frontend",
          description: "gg"
        },
        {
          id: 0,
          title: "Backend",
          description: "gg"
        }
      ]
    },
    {
      id: 1,
      title: "Сайт web студии",
      description: "описание"
    }
  ];
  getAllProjects = async () => {
    return this._pojects;
  };
  getProject = async id => {
    return this._pojects[0];
  };
}
