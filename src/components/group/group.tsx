import React, { Component } from "react";
import ApiService, { IGroupExtend } from "../../services/api-service";
import Card from "../card";
import Header from "../header";
import { Button } from "antd";
import ApiGroupService from "../../services/api-group-service";
interface IGroupProps {
  groupId: string | undefined;
  categoryId: string | undefined;
  projectId: string | undefined;
}

const initialState: IGroupExtend = {
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
};

export default class Group extends Component<IGroupProps, IGroupExtend> {
  constructor(props: IGroupProps) {
    super(props);
    this.state = initialState;
  }

  apiService = new ApiService();
  componentDidMount() {
    const { projectId, categoryId, groupId } = this.props;
    if (groupId && categoryId && projectId) {
      this.apiService.getGroup(projectId, categoryId, groupId).then((res: IGroupExtend) => {
        this.setState(res);
      });
    }
  }

  renderItems() {
    if (this.state.tasks) {
      return this.state.tasks.map((el, index) => {
        return (
          <Card
            key={el.id}
            id={el.id}
            title={el.title}
            description={el.description}
            status="unknown"
          />
        );
      });
    }
  }

  deleteGroup = async () => {
    const { projectId, categoryId, groupId } = this.props;
    console.log(this.props)
    if (projectId && categoryId && groupId) {
      const api = new ApiGroupService();
      await api.deleteGroup({ projectId, categoryId, groupId })
      window.history.back();
    }
  }

  render() {
    const items = this.renderItems();

    return (
      <div>
        <Header text={this.state.title} icon="albums" description={this.state.description} />
        <Button danger onClick={this.deleteGroup}>Удалить группу</Button>
        <div className="flex-wrapper">{items}</div>
      </div>
    );
  }
}
