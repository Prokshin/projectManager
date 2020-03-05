import React from "react";
import Header from "../header";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import FormProject from "../form-project";

const CreatePage = () => {
  const match = useRouteMatch();
  console.log(`${match.url}/category`);
  return (
    <>
      <Header text="Создать" icon="add-circle" />
      <div className="wrap">
        <Link className="button" to={`${match.url}`}>
          Создать проект
        </Link>
        <Link className="button" to={`${match.url}/category`}>
          Создать категорию
        </Link>
        <Link className="button" to={`${match.url}/group`}>
          Создать группу
        </Link>
        <Link className="button" to={`${match.url}/task`}>
          Создать задачу
        </Link>
      </div>
      <Switch>
        <Route exact path={`${match.url}`}>
          <FormProject />
        </Route>
        <Route path={`${match.url}/category`}>
          <h2>Создание категории</h2>
        </Route>
        <Route path={`${match.url}/group`}>
          <h2>Создание группы</h2>
        </Route>
        <Route path={`${match.url}/task`}>
          <h2>Создание задачи</h2>
        </Route>
      </Switch>
    </>
  );
};

export default CreatePage;
