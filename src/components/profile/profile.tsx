import React, { useState, useEffect } from 'react'
import { Row, Col, Statistic, Card } from 'antd'
import ProfileStatisctics from './profile-statistics'
import ProfileUser from './profile-user'
import { IUser, IStatistics } from '../../types/model-types'
import ApiProfileService from '../../services/api-profile-service'

const Profile = () => {

    const [user, setUser] = useState<IUser>()
    const [statistics, setStatistics] = useState<IStatistics>()

    useEffect(() => {
        const fetchData = async () => {
            const Api = new ApiProfileService();
            const resUser = await Api.getUser();
            setUser(resUser);
        };
        fetchData();
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const Api = new ApiProfileService();
            const resStatistics = await Api.getStatistics();
            setStatistics(resStatistics);
        };
        fetchData();
    }, [])
    return <>
        {user
            ? <ProfileUser userName={user.username} email={user.email} date={user.registrationDate} />
            : ''
        }
        {statistics
            ? <ProfileStatisctics outdate={statistics.outdate} completed={statistics.completed} total={statistics.total} />
            : ''
        }

    </>
}

export default Profile