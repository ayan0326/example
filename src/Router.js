import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuditPage from "./auditPage/AuditPage";
import OrderManagePage from "./orderManagePage/OrderManagePage";
import SystemPage from "./systemPage/SystemPage";

const BasicRoute = () => (
  <Switch>
    <Route exact path="/" component={SystemPage} />
    <Route exact path="/OrderManagePage" component={OrderManagePage} />
    <Route exact path="/AuditPage" component={AuditPage} />
  </Switch>
);

export default BasicRoute;
