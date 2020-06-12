import React, { useState } from 'react'
import ApiResponsibleService from '../../services/api-responsible-service'
import { Button, Drawer } from 'antd';
import UserList from './user-list';
import Cookies from 'js-cookie';

interface IAddResponsibleProps {
    projectId: string,
    categoryId: string,
    groupId: string,
    taskId: string,

}

const AddResponsible: React.FC<IAddResponsibleProps> = ({ projectId, categoryId, groupId, taskId }) => {


    const [userId, setUserId] = useState<string>()

    const add = async () => {
        if (userId) {
            const api = new ApiResponsibleService();
            api.addResponsible({ projectId, categoryId, groupId, taskId, userId: userId })
        }
    }
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    const SelectUser = (i: string) => {
        setUserId(i)
    }
    return <>
        <Button type="primary" onClick={showDrawer}>
            Назначение ответственного
      </Button>
        <Drawer
            title="Назначение ответственног"
            placement="right"
            width="600px"
            closable={false}
            onClose={onClose}
            visible={visible}
        >
            <UserList projectId={projectId} selectUser={SelectUser} />
            <h2>Идентификатор выбранного пользователя: {userId}</h2>
            <Button onClick={add}>Назначить ответственным</Button>
        </Drawer>

    </>
}

export default AddResponsible;