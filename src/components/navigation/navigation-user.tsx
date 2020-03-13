import React from "react";
import { Link } from "react-router-dom";
interface NavigationUserProps {
  userName: string;
  id: string;
  email: string;
}

const NavigationUser = (props: NavigationUserProps) => {
  return (
    <Link to="/profile">
      <div className="menu__user">
        <div className="menu__user__name">{props.userName}</div>
        <div className="menu__user__email">{props.email}</div>
      </div>
    </Link>
  );
};

export default NavigationUser;
