import React, { useEffect } from 'react';
import DashboardService from '../../services/dashboard-service';

const AllTasks = () => {

  useEffect(() => {
    const fetchData = async () => {
      const Api = new DashboardService();
      const result = await Api.getAllTasks();
      console.log(result)
    };
    fetchData();
  }, []);
  return <>Все задачи</>;
};

export default AllTasks;