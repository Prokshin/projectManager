import React, { useEffect, useState } from 'react';
import { Drawer, List } from 'antd';
import { IParticipant } from '../../types/model-types';
import ApiParticipantService from '../../services/api-participant-service';

interface ParticipantListProps {
  projectId: string
}

const ParticipantList: React.FC<ParticipantListProps> = ({ projectId }) => {
  const [visible, setVisible] = useState(false);
  const [participants, setParticipants] = useState<IParticipant[]>();
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const Api = new ApiParticipantService();
      const result = await Api.getParticipant(projectId);
      setParticipants(result);
    };
    fetchData();
  }, []);

  return <>
    <button className={'button'} onClick={showDrawer}>
      Показать всех участников проекта
    </button>
    <Drawer
      title="Список участников"
      placement="right"
      width={"600"}
      closable={false}
      onClose={onClose}
      visible={visible}
    >
      <List
        size="large"
        bordered
        dataSource={participants}
        renderItem={item => <List.Item><h2>{item.username}</h2> <p>{item.email}</p> <p>{item.role}</p></List.Item>}>
      </List>
    </Drawer>
  </>;
};

export default ParticipantList;