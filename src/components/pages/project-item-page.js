import React, { Component } from "react";
import Header from "../header";
import { withRouter } from "react-router";

class ProjectItemPagefff extends Component {
  render() {
    const { match, location, history } = this.props;
    console.log(match, location, history);
    return (
      <div>
        <Header text="Имя проекта" icon="folder"></Header>
      </div>
    );
  }
}
const ProjectItemPage = withRouter(ProjectItemPagefff);
export default ProjectItemPage;
