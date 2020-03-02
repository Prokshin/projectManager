import React, { Component } from "react";
import Header from "../header";
import { ProjectItemPage } from "../pages";

import { Link, Switch, Route } from "react-router-dom";
import Card from "../card";

export default class ProjectsPage extends Component {
  render() {
    return (
      <div>
        <Header text="Проекты" icon="folder"></Header>
        <div className="flex-wrapper">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    );
  }
}
