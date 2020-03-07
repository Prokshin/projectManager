import React, { Component } from "react";
import ApiService from "../../services/api-service";
import Card from "../card";
import Header from "../header";

interface IGroupProps {
  type?: string;
  groupId?: string;
}

interface IGroupState {
  group: {
    id?: string;
    title?: string;
    description?: string;
    tasks: [
      {
        id?: string;
        title?: string;
        description?: string;
      },
    ];
  };
}

export default class Group extends Component<IGroupProps, IGroupState> {
  constructor(props: IGroupProps) {
    super(props);
    this.state = {
      group: { tasks: [{}] },
    };
  }
  apiService = new ApiService();

  componentDidMount() {
    this.apiService.getGroup(this.props.groupId).then((res: any) => {
      this.setState({
        group: res,
      });
    });
  }

  renderItems() {
    let i = 0;
    return this.state.group.tasks.map(el => {
      if (el.id === "main") {
        return "";
      }
      let id = el.id;
      if (this.props.type === "without_header") {
        id = `main/${el.id}`;
      }
      return <Card key={i++} id={id} title={el.title} description={el.description} status="unknown" />;
    });
  }

  renderHeader() {
    if (this.props.type === "without_header") {
      return "";
    } else {
      return <Header text={this.state.group.title} icon="albums" description={this.state.group.description} />;
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
