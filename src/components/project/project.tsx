import React, { Component } from "react";
import ApiService, { IProjectExtend } from "../../services/api-service";
import Card from "../card";
import Header from "../header";
import AddParticipant from '../add-participant';
import ParticipantList from '../participant-list';
import { Button } from "antd";
import ApiProjectService from "../../services/api-project-service";

interface IProjectProps {
  projectId: string | undefined;
}

const initialState: IProjectExtend = {
  id: "",
  title: "",
  description: "",
  creator: {
    id: "",
    email: "",
  },
  categories: [
    {
      id: "",
      description: "",
      title: "Загрузка данных",
    },
  ],
};

export default class Project extends Component<IProjectProps, IProjectExtend> {
  constructor(props: IProjectProps) {
    super(props);
    this.state = initialState;
  }
  //Запрос на сервер
  apiService = new ApiService();
  componentDidMount() {
    if (this.props.projectId) {
      this.apiService.getProject(this.props.projectId).then((res: IProjectExtend) => {
        this.setState(res);
      });
    }
  }
  deleteProject = async () => {
    const { projectId } = this.props;
    if (projectId) {
      const api = new ApiProjectService();
      await api.deleteProject({ projectId })
      window.history.back();
    }
  }
  render() {
    const { title, description, categories: category } = this.state;
    return (
      <div>
        <Header text={title} icon="folder" description={description} />
        {this.props.projectId ? <><ParticipantList projectId={this.props.projectId} /><AddParticipant projectId={this.props.projectId} /></> : ''}
        <Button danger onClick={this.deleteProject}>Удалить проект</Button>
        <div className="flex-wrapper">
          {category.map((el, index) => {
            return <Card key={index} id={el.id} title={el.title} description={el.description} />;
          })}
        </div>

      </div>
    );
  }
}
