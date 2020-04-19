import React, { Component } from "react";
import ApiService from "../../services/api-service";
import Card from "../card";

type project = {
  id: string;
  title: string;
  description: string;
};
interface IProjectsState {
  projects: project[];
}

export default class Projects extends Component<{}, IProjectsState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      projects: [
        {
          id: "",
          title: "",
          description: "",
        },
      ],
    };
  }
  //Запрос на сервер
  apiService = new ApiService();
  componentDidMount() {
    this.apiService.getAllProjects().then((res: project[] | null) => {
      if (res) {
        this.setState({ projects: res });
      } else console.error("Ошибка");
    });
  }

  render() {
    const { projects } = this.state;
    if (projects.length === 0) {
      return <p>gg</p>;
    }
    return (
      <div className="flex-wrapper">
        {projects.map((el: project) => {
          return <Card key={el.id} id={el.id} title={el.title} description={el.description} />;
        })}
      </div>
    );
  }
}
