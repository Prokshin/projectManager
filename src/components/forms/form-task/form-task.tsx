import React, { Component } from 'react';

import './form-task.css';
import TaskInputs from './task-inputs';
import { SelectCategory, SelectGroup, SelectProject } from '../form-select';
import moment from 'moment';
import 'moment/locale/ru';
import ApiTaskService from '../../../services/api-task-service';

interface IFromTaskState {
  title: string;
  description: string;
  content: string;
  expiredDate: string | null;
  projectId: string;
  categoryId: string;
  groupId: string;

}

const initionalState: IFromTaskState = {
  title: '',
  description: '',
  content: '',
  expiredDate: null,
  projectId: '',
  categoryId: '',
  groupId: '',
};

export default class FormTask extends Component<{}, IFromTaskState> {
  constructor (props: never) {
    super(props);
    this.state = initionalState;
  }

  handleChangeName = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ title: event.currentTarget.value });
  };
  handleChangeDescription = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ description: event.currentTarget.value });
  };
  handleChangeText = (event: React.FormEvent<HTMLTextAreaElement>): void => {
    this.setState({ content: event.currentTarget.value });
  };

  handleChangeExpiredDate = (date: any): void => {
    this.setState({ expiredDate: moment(date).format('L') });
    console.log(moment(date).format('L'));
  };
  handleChangeProject = (selected: React.FormEvent<HTMLSelectElement>): void => {
    this.setState({ projectId: selected.currentTarget.value, categoryId: '' });
  };
  handleChangeCategory = (selected: React.FormEvent<HTMLSelectElement>): void => {
    this.setState({ categoryId: selected.currentTarget.value });
  };
  handleChangeGroup = (selected: React.FormEvent<HTMLSelectElement>): void => {
    this.setState({ groupId: selected.currentTarget.value });
  };
  apiService = new ApiTaskService();
  SendForm = async () => {
    const { title, description, content, projectId, categoryId, groupId, expiredDate } = this.state;
    await this.apiService.saveTask({ title, description, content, projectId, categoryId, groupId, expiredDate });

  };

  render () {
    const { title, description, content, projectId, categoryId, groupId } = this.state;
    return (
      <div className="wrap">
        <div className="form-project">
          <div className="form-project__description">
            <h2>
              <ion-icon name="document-text"/>
              Задача
            </h2>
            <p>Введите название и описание задачи</p>
            <button className="button green-bg" onClick={this.SendForm}>
              <ion-icon name="add"/>
              Создать задачу
            </button>
          </div>
          <div className="form-project__inputs">
            <SelectProject
              projectIdValue={projectId}
              HandleChangeProject={this.handleChangeProject}
            />
            <SelectCategory
              categoryIdValue={categoryId}
              projectIdValue={projectId}
              HandleChangeCategory={this.handleChangeCategory}
            />
            <SelectGroup
              categoryIdValue={categoryId}
              projectIdValue={projectId}
              groupIdValue={groupId}
              HandleChangeGroup={this.handleChangeGroup}
            />
            <TaskInputs
              nameValue={title}
              descriptionValue={description}
              textValue={content}
              HandleChangeName={this.handleChangeName}
              HandleChangeDescription={this.handleChangeDescription}
              HandleChangeText={this.handleChangeText}
              HandleChangeDate={this.handleChangeExpiredDate}
            />
          </div>
        </div>
      </div>
    );
  }
}
