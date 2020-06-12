import React, { useEffect, useState } from 'react';
import DashboardService from '../../services/dashboard-service';
import { List } from 'antd';
import { ITask } from '../../types/model-types';
import Status from '../status';
import { relative } from 'path';

const WeekTasks = () => {

  const [tasks, setTasks] = useState<ITask[]>();

  useEffect(() => {
    const fetchData = async () => {
      const Api = new DashboardService();
      const result = await Api.getWeekTasks();
      setTasks(result);
    };
    fetchData();
  }, []);
  return <List
    size="large"
    bordered
    dataSource={tasks}
    renderItem={item => <List.Item style={{position: "relative"}}><h2>{item.title}<Status status={item.status}/></h2> <p>{item.description}</p> <p>{item.expiredDate}</p>
    </List.Item>}
  />
};

export default WeekTasks;