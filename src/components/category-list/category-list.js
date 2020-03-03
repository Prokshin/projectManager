import React, { Component } from "react";
import ApiService from "../../services/api-service";
import Card from "../card";
import { withRouter } from "react-router-dom";
import Bredcrumbs from "../breadcrumbs";
import Header from "../header";

class CategoryList_ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: { category: [{}] }
    };
  }
  apiService = new ApiService();

  componentDidMount() {
    console.log(this.props.projectId);
    this.apiService.getProject(this.props.projectId).then(res => {
      this.setState({
        project: res
      });
    });
  }

  renderItems() {
    let i = 0;
    return this.state.project.category.map(el => {
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
    const { match } = this.props;
    const { project } = this.state;
    return (
      <div>
        <Bredcrumbs
          links={[
            { url: "/projects", name: "Проекты" },
            { url: `${match.url}`, name: `${project.title}` }
          ]}
        />
        <Header
          text={project.title}
          icon="folder"
          description={project.description}
        />
        <div className="flex-wrapper">{items}</div>
      </div>
    );
  }
}

const CategoryList = withRouter(CategoryList_);
export default CategoryList;
