import React, { Component } from "react";
import ApiService from "../../services/api-service";
import Card from "../card";
import { withRouter } from "react-router-dom";
import Header from "../header";

class Group_ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      group: { tasks: [] }
    };
  }
  apiService = new ApiService();

  componentDidMount() {
    this.apiService.getGroup().then(res => {
      this.setState({
        group: res
      });
    });
  }

  renderItems() {
    let i = 0;
    return this.state.group.tasks.map(el => {
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

const Group = withRouter(Group_);
export default Group;
