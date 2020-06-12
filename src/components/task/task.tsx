import React, { Component } from 'react';
import './task.css';
import ApiService from '../../services/api-service';
import { statusType } from '../status/status';
import Comment from '../comment';
import { comment } from '../comment/comment';
import TaskCard from './task-card';
import ApiTaskService from '../../services/api-task-service';
import CommentCreate from '../comment-create';

interface ITaskProps {
  taskId: string | undefined;
  projectId: string | undefined;
  categoryId: string | undefined;
  groupId: string | undefined;
}

interface ITaskState {
  id: string;
  title: string;
  description?: string;
  text: string;
  status: statusType;
  creator?: string;
  deadline?: Date;
  comments?: comment[];
}

const initionalState: ITaskState = {
  id: '',
  title: '',
  description: '',
  text: '',
  status: 'IN_PROGRESS',
  comments: [
    {
      text: '',
      author: {
        email: '',
        id: '',
      },
      link: {
        url: '',
        text: '',
      },
    },
  ],
};

export default class Task extends Component<ITaskProps, ITaskState> {
  constructor(props: ITaskProps) {
    super(props);
    this.state = initionalState;
  }

  apiService = new ApiTaskService();

  componentDidMount() {
    const { projectId, categoryId, groupId, taskId } = this.props;
    if (projectId && categoryId && groupId && taskId) {
      this.apiService.getTask({ projectId, categoryId, groupId, taskId }).then((res: any) => {
        this.setState({
          title: res.title,
          description: res.description,
          text: res.content.text,
          status: res.status,
          comments: res.comments,
        });
      });
    }
  }

  handleClick = () => {
    window.alert('Вы начали выполнение задачи');
    const { projectId, categoryId, groupId, taskId } = this.props;
    if (projectId && categoryId && groupId && taskId) {
      this.apiService.updateStatus({ projectId, categoryId, groupId, taskId }).then(() => {
        window.location.reload();
      })
    }
  };

  deleteTask = async () => {
    const { projectId, categoryId, groupId, taskId } = this.props;
    if (projectId && categoryId && groupId && taskId) {
      const api = new ApiTaskService();
      await api.deleteTask({ projectId, categoryId, groupId, taskId });
      window.history.back();
    }
  };

  render() {
    console.log(this.state);
    const { title, description, text } = this.state;
    const { projectId, categoryId, groupId, taskId } = this.props;
    return (
      <div>
        <TaskCard
          title={title}
          text={text}
          description={description}
          status={this.state.status}
          handleClick={this.handleClick}
          deleteTask={this.deleteTask}
        />
        <div style={{ margin: 50 }}>
          <h2>Написать комментаий</h2>
          {projectId && categoryId && groupId && taskId
            ? <CommentCreate projectId={projectId} categoryId={categoryId}
              groupId={groupId} taskId={taskId} />
            : ''
          }
        </div>
        <Comment taskId={this.props.taskId} comments={this.state.comments} />
      </div>
    );
  }
}
