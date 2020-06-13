import React from "react";
import { Row, Col, Card, Statistic } from "antd";

interface IProfileStatisticsProps {
    userName: string,
    email: string,
    date?: string
}

const ProfileUser: React.FC<IProfileStatisticsProps> = ({ userName, email, date }) => {
    return <>     <Card style={{ margin: 10 }}>
        <h2>{userName}</h2>
        <h2>{email}</h2>
        <h3>Дата регистрации: {date}</h3>
    </Card></>
}

export default ProfileUser