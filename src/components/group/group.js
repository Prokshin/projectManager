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
    console.log(this.props.projectId);
    this.apiService.getGroup(0).then(res => {
      console.log(res);
      this.setState({
        group: res
      });
    });
  }

  renderItems() {
    let i = 0;
    console.log(this.state.group.tasks);
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

  render() {
    const items = this.renderItems();
    const { group } = this.state;
    console.log(this.props);
    return (
      <div>
        <Header
          text={group.title}
          icon="library"
          description={group.description}
        />
        <div className="flex-wrapper">{items}</div>
      </div>
    );
  }
}

const Group = withRouter(Group_);
export default Group;
