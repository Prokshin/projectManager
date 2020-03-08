import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addUser } from "../../actions";
import { IState } from "../../reducers";
import ApiService from "../../services/api-service";
interface NavigationUserProps {
  userName: string;
  id: string;
  addUser: any;
  email: string;
}

const NavigationUser = (props: NavigationUserProps) => {
  const apiService = new ApiService();
  useEffect(() => {
    const loadUser = async () => {
      apiService.getUser().then(res => {
        props.addUser(res);
      });
    };
    loadUser();
  });
  return (
    <Link to="/profile">
      <div className="menu__user">
        <div className="menu__user__name">{props.userName}</div>
        <div className="menu__user__email">{props.email}</div>
      </div>
    </Link>
  );
};

const mapDispatchToProps = (dispatch: (arg0: { type: string; payload: any }) => void) => {
  return {
    addUser: (user: any) => {
      dispatch(addUser(user));
    },
  };
};

const mapStateToProps = (state: IState) => {
  return { userName: state.user.name, id: state.user.id, email: state.user.email };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationUser);
