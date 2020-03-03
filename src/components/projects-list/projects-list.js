import React, { Component } from "react";
import ApiService from "../../services/api-service";
import Card from "../card";

export default class projectsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }
  //Запрос на сервер
  apiService = new ApiService();
  componentDidMount() {
    this.apiService.getAllProjects().then(res => {
      this.setState({ projects: res });
    });
  }
  //Создание массива карточек проектов
  renderItems() {
    return this.state.projects.map(el => {
      return (
        <Card
          key={el.id}
          path={`/projects/${el.id}`}
          title={el.title}
          description={el.description}
        />
      );
    });
  }
  render() {
    const items = this.renderItems();
    return <div className="flex-wrapper">{items}</div>;
  }
}
