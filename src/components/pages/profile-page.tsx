import React, { Component } from "react";
import Header from "../header";
import Modal from "../modal";
import GroupPage from "./group-page";

export default class ProfilePage extends Component {
  render() {
    return (
      <div>
        <Header text="Профиль" icon="person"></Header>
        <Modal buttonText="Открыть">Рандомный текст</Modal>
      </div>
    );
  }
}
