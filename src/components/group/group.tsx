import React, { Component } from "react";
import ApiService from "../../services/api-service";
import Card from "../card";
import Header from "../header";

interface IGroupProps {
  type?: string;
  groupId: string | undefined;
  categoryId: string | undefined;
  projectId: string | undefined;
}

type task = {
  id: string;
  title: string;
  description: string;
};

interface IGroupState {
  group: {
    id: string;
    title: string;
    description: string;
    tasks: task[];
  };
}

const initialState: IGroupState = {
  group: {
    id: "",
    title: "",
    description: "",
    tasks: [
      {
        id: "",
        title: "",
        description: "",
      },
    ],
  },
};

export default class Group extends Component<IGroupProps, IGroupState> {
  constructor(props: IGroupProps) {
    super(props);
    this.state = initialState;
  }

  apiService = new ApiService();
  componentDidMount() {
    const { projectId, categoryId, groupId } = this.props;
    if (groupId && categoryId && projectId) {
      this.apiService.getGroup(projectId, categoryId, groupId).then((res: any) => {
        this.setState({
          group: res,
        });
      });
    }
  }

  renderItems() {
    if (this.state.group) {
      return this.state.group.tasks.map((el, index) => {
        if (el.id === "main") {
          return "";
        }
        let id = el.id;
        if (this.props.type === "without_header") {
          id = `main/${el.id}`;
        }
        return (
          <Card
            key={index}
            id={id}
            title={el.title}
            description={el.description}
            status="unknown"
          />
        );
      });
    }
  }

  renderHeader() {
    if (this.props.type === "without_header") {
      return "";
    } else {
      return (
        <Header
          text={this.state.group.title}
          icon="albums"
          description={this.state.group.description}
        />
      );
    }
  }

  render() {
    const items = this.renderItems();
    const header = this.renderHeader();
    return (
      <div>
        {header}
        <div className="flex-wrapper">{items}</div>
      </div>
    );
  }
}
