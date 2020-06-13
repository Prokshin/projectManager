import React, { useState, useEffect } from "react"
import { List } from "antd";
import { IUser, IParticipant } from "../../types/model-types";
import ApiResponsibleService from "../../services/api-responsible-service";
import ApiParticipantService from "../../services/api-participant-service";

interface IUserListProps{
    projectId: string
    selectUser: (id: string) => void
}

const UserList: React.FC<IUserListProps> = ({projectId,selectUser}) =>{

    const select = (i:number | string)=>{
        selectUser(i.toString())
    }
    const [users, setUsers] = useState<IParticipant[]>();
    useEffect(()=>{
        const fetchData = async () => {
          const Api = new ApiParticipantService();
          const result = await Api.getParticipant(projectId);
          console.log(result)
          setUsers(result)
        };
        fetchData();
      },[])
    return <>
    <List
    size="large"
    bordered
    dataSource={users}
    renderItem={item => <List.Item onClick={select.bind(null, item.id)}><h3>{item.username}</h3> <p>{item.email}</p></List.Item>}
  /></>
}

export default UserList;