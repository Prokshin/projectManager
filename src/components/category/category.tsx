import React, { Component } from "react";
import ApiService from "../../services/api-service";
import Card from "../card";
import Header from "../header";
// import Group from "../group/group";

type Groups = {
  id: string;
  description?: string;
  title: string;
};
interface ICategoryProps {
  categoryId?: string;
  projectId?: string;
}
interface ICategoryState {
  id: string;
  title: string;
  description?: string;
  creator?: string;
  groups: Groups[];
}

const initialState: ICategoryState = {
  id: "",
  title: "",
  description: "",
  groups: [
    {
      id: "",
      title: "",
      description: "",
    },
  ],
};

export default class Category extends Component<ICategoryProps, ICategoryState> {
  constructor(props: ICategoryProps) {
    super(props);
    this.state = initialState;
  }
  //Запрос на сервер
  apiService = new ApiService();
  componentDidMount() {
    if (this.props.categoryId && this.props.projectId) {
      this.apiService
        .getCategory(this.props.categoryId, this.props.projectId)
        .then((res: ICategoryState | any) => {
          this.setState(res);
        });
    } else console.error("Ошибка, нет идентификатора категории или проекта");
  }
  //Создание массива карточек групп
  renderItems() {
    return this.state.groups.map((el, index) => {
      if (el.id === "main") {
        return "";
      }
      return (
        <Card
          key={index}
          id={el.id}
          status="unknown"
          title={el.title}
          description={el.description}
        />
      );
    });
  }

  render() {
    const items = this.renderItems();
    const { title, description } = this.state;
    return (
      <div>
        <Header text={title} icon="shapes" description={description} />
        <div className="flex-wrapper">{items}</div>
        {/* <Header text="Задачи основной группы" icon="albums" size="middle" /> */
        /* //!Костыль с groupId, UPDATE: ВСЁ КОТСЫЛЬ, ПЕРЕДЕЛАТЬ!!!!
        <Group type="without_header" groupId="main" /> */}
      </div>
    );
  }
}
