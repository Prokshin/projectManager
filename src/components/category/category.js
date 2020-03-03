import React, { Component } from "react";
import ApiService from "../../services/api-service";
import Card from "../card";
import { withRouter } from "react-router-dom";
import Header from "../header";
import Group from "../group/group";

class Category_ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: { groups: [] }
    };
  }
  //Запрос на сервер
  apiService = new ApiService();
  componentDidMount() {
    this.apiService.getCategory(0).then(res => {
      this.setState({
        category: res
      });
    });
  }
  //Создание массива карточек групп
  renderItems() {
    let i = 0;
    console.log(this.state.category.groups);
    return this.state.category.groups.map(el => {
      if (el.id === "main") {
        return "";
      }
      return (
        <Card
          key={i++}
          path={`${this.props.match.url}/${el.id}`}
          title={el.title}
          description={el.description}
        />
      );
    });
  }

  render() {
    const items = this.renderItems();
    const { category } = this.state;
    return (
      <div>
        <Header
          text={category.title}
          icon="library"
          description={category.description}
        />
        <div className="flex-wrapper">{items}</div>
        <Header text="Задачи основной группы" icon="albums" size="middle" />
        <Group type="without_header" />
      </div>
    );
  }
}

const Category = withRouter(Category_);
export default Category;
