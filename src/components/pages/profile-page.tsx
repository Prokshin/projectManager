import React, { Component } from "react";
import Header from "../header";
import Modal from "../modal";
import ApiService from "../../services/api-service";
import Profile from "../profile";

export default class ProfilePage extends Component {
  dd = new ApiService();
  render() {
    this.dd.getAllProjects();
    return (
      <div>
        <Header text="Профиль" icon="person"></Header>
        <Profile/>
      </div>
    );
  }
}
