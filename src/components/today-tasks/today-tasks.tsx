import React, { useEffect, useState } from 'react';
import DashboardService from '../../services/dashboard-service';
import { ITask } from '../../types/model-types';
import { List } from 'antd';
import Status from '../status';

const TodayTasks = () => {
  const [tasks, setTasks] = useState<ITask[]>();
  useEffect(() => {
    const fetchData = async () => {
      const Api = new DashboardService();
      const result = await Api.getTodayTasks();
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
  />;
};

export default TodayTasks;