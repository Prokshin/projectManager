import React, { useState } from 'react';
import { Button, Drawer, Form, Input } from 'antd';
import ApiParticipantService from '../../services/api-participant-service';

interface AddParticipantProps {
  projectId: string
}

const AddParticipant:React.FC<AddParticipantProps> = ({projectId}) => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const onFinish = async (values:any) => {
    console.log('Success:', values);
    const apiService =  new ApiParticipantService();
    await apiService.addParticipant(values.email, projectId)
  };

  const onFinishFailed = (errorInfo:any) => {
    console.log('Failed:', errorInfo);
  };
  return <>
    <button className={"button"}  onClick={showDrawer}>
      Добавить участника в проект
    </button>
    <Drawer
      title="Добавление участника"
      placement="right"
      closable={false}
      onClose={onClose}
      visible={visible}
    >
      <Form
        name="basic"
        layout={"vertical"}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Введите email участника проекта' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit">
            Добавить участника
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  </>;
};

export default AddParticipant;