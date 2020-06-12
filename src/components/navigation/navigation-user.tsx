import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IUser } from "../../types/model-types";
import ApiUserService from "../../services/api-user-service";
interface NavigationUserProps {
  userName: string;
  id: string;
  email: string;
}

const NavigationUser = (props: NavigationUserProps) => {
  const [user, setUser] = useState<IUser>()

  useEffect(()=>{
    const fetchData = async () => {
      const Api = new ApiUserService();
      const result = await Api.getUser();
      console.log(result)
      setUser(result)
    };
    fetchData();
  },[])

  return (
    <Link to="/profile">
      <div className="menu__user">
        <div className="menu__user__name">{user?.username}</div>
        <div className="menu__user__email">{user?.email}</div>
      </div>
    </Link>
  );
};

export default NavigationUser;
