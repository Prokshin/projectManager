import React from "react";
import Header from "../header";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import FormProject from "../forms/form-project";
import FormCategory from "../forms/form-category";
import FormGroup from "../forms/form-group";
import FormTask from "../forms/form-task";
import CreateNav from "../create-nav";

const CreatePage = () => {
  const match = useRouteMatch();
  console.log(`${match.url}/category`);
  return (
    <>
      <Header text="Создать" icon="add-circle" />
      <CreateNav />
      <Switch>
        <Route exact path={`${match.url}`}>
          <FormProject />
        </Route>
        <Route path={`${match.url}/category`}>
          <FormCategory />
        </Route>
        <Route path={`${match.url}/group`}>
          <FormGroup />
        </Route>
        <Route path={`${match.url}/task`}>
          <FormTask />
        </Route>
      </Switch>
    </>
  );
};

export default CreatePage;
