import React, { Component } from "react";
import Header from "../header";
import Dashboard from '../Dashboard';

export default class DashboardPage extends Component {
  render() {
    return (
      <div>
        <Header text="Актуальные задачи" icon="bar-chart"></Header>
        <Dashboard/>
      </div>
    );
  }
}
