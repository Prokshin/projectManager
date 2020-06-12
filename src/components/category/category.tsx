import React, { Component } from "react";
import ApiService, { ICategoryExtend } from "../../services/api-service";
import Card from "../card";
import Header from "../header";
import { Button } from "antd";
import ApiCategoryService from "../../services/api-category-service";

interface ICategoryProps {
  categoryId: string | undefined;
  projectId: string | undefined;
}

const initialState: ICategoryExtend = {
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
  project: {
    id: "",
    title: "",
    description: "",
  },
};

export default class Category extends Component<ICategoryProps, ICategoryExtend> {
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
        .then((res: ICategoryExtend) => {
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
          status = {null}
          title={el.title}
          description={el.description}
        />
      );
    });
  }


  deleteCategory = async () =>{
    const{projectId, categoryId} = this.props;
    if(projectId && categoryId){
      const api = new ApiCategoryService();
      await api.deleteCategory({projectId, categoryId})
      window.history.back();
    }
  }

  render() {
    const items = this.renderItems();
    const { title, description } = this.state;
    return (
      <div>
        <Header text={title} icon="shapes" description={description} />
        <Button danger onClick={this.deleteCategory}>Удалить категорию</Button>
        <div className="flex-wrapper">{items}</div>
      </div>
    );
  }
}
