import React from 'react';
import { Tabs } from 'antd';
import AllTasks from '../all-tasks';
import TodayTasks from '../today-tasks';
import WeekTasks from '../week-tasks';
import OutDateTasks from '../outdate-tasks';
import MyResponsibilityTasks from '../my-responsibility-tasks';

const Dashboard = ()=>{
  return  <Tabs defaultActiveKey="1">

    <Tabs.TabPane tab="Задачи на сегодня" key="1">
      <TodayTasks/>
    </Tabs.TabPane>
    <Tabs.TabPane tab=" Задачи на неделю" key="2">
      <WeekTasks/>
    </Tabs.TabPane>
    <Tabs.TabPane tab=" Просроченные задачи" key="3">
      <OutDateTasks/>
    </Tabs.TabPane>
    <Tabs.TabPane tab="Задачи под моей ответственностью" key="4">
      <MyResponsibilityTasks/>
    </Tabs.TabPane>
  </Tabs>
}

export default Dashboard