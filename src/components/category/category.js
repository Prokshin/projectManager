import React, { Component } from "react";
import ApiService from "../../services/api-service";
import Card from "../card";
import { withRouter } from "react-router-dom";
import Bredcrumbs from "../breadcrumbs";
import Header from "../header";

class Category_ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: { groups: [] }
    };
  }
  apiService = new ApiService();

  componentDidMount() {
    console.log(this.props.projectId);
    this.apiService.getCategory(0).then(res => {
      console.log(res);
      this.setState({
        category: res
      });
    });
  }

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
    console.log(this.props);
    return (
      <div>
        <Header
          text={category.title}
          icon="library"
          description={category.description}
        />
        <div className="flex-wrapper">{items}</div>
        <Header text="Задачи основной группы" icon="albums" size="middle" />
        Задачи
      </div>
    );
  }
}

const Category = withRouter(Category_);
export default Category;
