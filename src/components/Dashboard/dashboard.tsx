import React from 'react';
import { Tabs } from 'antd';
import AllTasks from '../all-tasks';
import TodayTasks from '../today-tasks';
import WeekTasks from '../week-tasks';

const Dashboard = ()=>{
  return  <Tabs defaultActiveKey="1">
    <Tabs.TabPane tab="Все задачи" key="1">
     <AllTasks/>
    </Tabs.TabPane>
    <Tabs.TabPane tab="Задачи на сегодня" key="2">
      <TodayTasks/>
    </Tabs.TabPane>
    <Tabs.TabPane tab=" Задачи на неделю" key="3">
      <WeekTasks/>
    </Tabs.TabPane>
    <Tabs.TabPane tab=" Просроченные задачи" key="4">
      Просроченные задачи
    </Tabs.TabPane>
    <Tabs.TabPane tab="Общая статистика" key="5">
      Общая статистика
    </Tabs.TabPane>
  </Tabs>
}

export default Dashboard