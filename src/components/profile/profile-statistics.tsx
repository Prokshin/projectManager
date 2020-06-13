import React from "react";
import { Row, Col, Card, Statistic } from "antd";

interface IProfileStatisticsProps{
    outdate: number,
    total: number,
    completed: number
}

const ProfileStatisctics: React.FC<IProfileStatisticsProps>  = ({completed, outdate, total}) =>{
    return <> <Row>
    <Col span={12}>
        <Card style={{margin: 10}}>
            <Statistic title="Завершённые задачи" value={completed} valueStyle={{ color: '#3f8600' }}/>
        </Card>
    </Col>
    <Col span={12}>
        <Card style={{margin: 10}}>
            <Statistic title="Просроченные задачи" value={outdate} valueStyle={{ color: '#cf1322'}} />
        </Card>
    </Col>
    <Col span={24}>
        <Card style={{margin: 10}}>
            <Statistic title="Всего задач" value={total} />
        </Card>
    </Col>
</Row></>
}

export default ProfileStatisctics