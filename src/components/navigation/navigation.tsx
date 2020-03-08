import React, { useEffect } from "react";
import "./navigation.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addUser } from "../../actions";
import { IState } from "../../reducers";
import ApiService from "../../services/api-service";

//!Реализовать раскрывающиеся пункты, с подгрузкой данных с сервера.
interface NavigationProps {
  userName: string;
  id: string;
  addUser: any;
  email: string;
}
const Navigation = (props: NavigationProps) => {
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
    <nav className="menu">
      <Link to="/profile">
        <div className="menu__user">
          <div className="menu__user__name">{props.userName}</div>
          <div className="menu__user__email">{props.email}</div>
        </div>
      </Link>
      <div className="menu__item">
        <Link to="/create">
          <ion-icon name="add-circle"></ion-icon>Создать
        </Link>
      </div>
      <div className="menu__item  ">
        <Link to="/">
          <ion-icon name="bar-chart"></ion-icon>Акуальные задачи
        </Link>
      </div>
      <div className="menu__item">
        <Link to="/projects">
          <ion-icon name="folder"></ion-icon>Проекты
        </Link>
      </div>
    </nav>
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
  return { userName: state.auth.username, id: state.auth.id, email: state.auth.email };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
