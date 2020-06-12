import React from 'react';
import { Button, Form, Input } from 'antd';
import ApiCommentService from '../../services/api-comment-service';

interface ICommentCreateProps {
  projectId: string,
  categoryId: string,
  groupId: string,
  taskId: string
}

const CommentCreate: React.FC<ICommentCreateProps> = ({projectId, categoryId, groupId, taskId}) => {
  const onFinish = async (values: any) => {
    console.log('Success:', values);
    const api = new ApiCommentService();
    await api.createComment({ text: values.text, projectId, categoryId, groupId, taskId })
    window.location.reload();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >

      <Form.Item
        name="text"
        rules={[{ required: true, message: 'Введите текст комментария' }]}
      >
        <Input/>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Отправить
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CommentCreate;