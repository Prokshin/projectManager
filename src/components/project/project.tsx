import React, { Component } from "react";
import ApiService from "../../services/api-service";
import Card from "../card";
import Header from "../header";

interface IProjectProps {
  projectId: string | undefined;
}

interface IProjectState {
  id: string;
  title: string;
  description?: string;
  creator?: string;
  categories: [
    {
      id: string;
      description: string;
      title: string;
    },
  ];
}

const initialState: IProjectState = {
  id: "",
  title: "",
  description: "",
  creator: "",
  categories: [
    {
      id: "",
      description: "",
      title: "Загрузка данных",
    },
  ],
};

export default class Project extends Component<IProjectProps, IProjectState> {
  constructor(props: IProjectProps) {
    super(props);
    this.state = initialState;
  }
  //Запрос на сервер
  apiService = new ApiService();
  componentDidMount() {
    if (this.props.projectId) {
      this.apiService.getProject(this.props.projectId).then((res: IProjectState | any) => {
        this.setState(res);
      });
    }
  }

  render() {
    const { title, description, categories: category } = this.state;
    return (
      <div>
        <Header text={title} icon="folder" description={description} />
        <div className="flex-wrapper">
          {category.map((el, index) => {
            return <Card key={index} id={el.id} title={el.title} description={el.description} />;
          })}
        </div>
      </div>
    );
  }
}
