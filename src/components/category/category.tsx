import React, { Component } from "react";
import ApiService from "../../services/api-service";
import Card from "../card";
import Header from "../header";
import Group from "../group/group";

interface ICategoryProps {
  categoryId?: string;
}
interface ICategoryState {
  category: {
    id: string;
    title: string;
    description?: string;
    creator?: string;
    groups: [
      {
        id?: string;
        description?: string;
        title?: string;
      },
    ];
  };
}

export default class Category extends Component<ICategoryProps, ICategoryState> {
  constructor(props: ICategoryProps) {
    super(props);
    this.state = {
      category: {
        id: "",
        title: "",
        description: "",
        groups: [{}],
      },
    };
  }
  //Запрос на сервер
  apiService = new ApiService();
  componentDidMount() {
    this.apiService.getCategory(this.props.categoryId).then((res: any) => {
      this.setState({
        category: res,
      });
    });
  }
  //Создание массива карточек групп
  renderItems() {
    let i = 0;
    return this.state.category.groups.map(el => {
      if (el.id === "main") {
        return "";
      }
      return <Card key={i++} id={el.id} status="unknown" title={el.title} description={el.description} />;
    });
  }

  render() {
    const items = this.renderItems();
    const { category } = this.state;
    return (
      <div>
        <Header text={category.title} icon="shapes" description={category.description} />
        <div className="flex-wrapper">{items}</div>
        <Header text="Задачи основной группы" icon="albums" size="middle" />
        <Group type="without_header" />
      </div>
    );
  }
}
