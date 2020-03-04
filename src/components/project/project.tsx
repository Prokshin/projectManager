import React, { Component } from "react";
import ApiService from "../../services/api-service";
import Card from "../card";
import { RouteComponentProps, useParams } from "react-router-dom";
import Header from "../header";

interface IProjectProps extends RouteComponentProps<any> {
  projectId: string;
  match: any;
}

interface IProjectState {
  project: {
    id: string;
    title: string;
    description?: string;
    creator?: string;
    category: [
      {
        id?: string;
        description?: string;
        title?: string;
      }
    ];
  };
}

export default class Project extends Component<IProjectProps, IProjectState> {
  constructor(props: IProjectProps) {
    super(props);
    this.state = {
      project: {
        id: "",
        title: "",
        description: "",
        creator: "",
        category: [{}]
      }
    };
  }
  //Запрос на сервер
  apiService = new ApiService();
  componentDidMount() {
    console.log(this.props.projectId);
    this.apiService.getProject(this.props.projectId).then((res: any) => {
      this.setState({
        project: res
      });
    });
  }
  //Создание массива карточек категорий
  renderItems() {
    let i = 0;
    return this.state.project.category.map(el => {
      return (
        <Card
          key={i++}
          id={el.id}
          path={`/${el.id}`}
          title={el.title}
          description={el.description}
        />
      );
    });
  }

  render() {
    const items = this.renderItems();
    const { project } = this.state;
    return (
      <div>
        {/* <Bredcrumbs
          links={[
            { url: "/projects", name: "Проекты" },
            { url: `${match.url}`, name: `${project.title}` }
          ]}
        /> */}
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
