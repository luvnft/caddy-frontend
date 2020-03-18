import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import LoginForm from "./components/LoginForm";
import ProtectedRoute from "./components/ProtectedRoute";
import RegistrationForm from "./components/RegistrationForm";
import { TokenProvider } from "./contexts/token";

const App = () => {
  return (
    <TokenProvider>
      <Router>
        <Switch>
          <ProtectedRoute exact path="/" component={Dashboard} />
          <Route path="/register" component={RegistrationForm} />
          <Route path="/login" component={LoginForm} />
        </Switch>
      </Router>
    </TokenProvider>
  );
};

export default App;
