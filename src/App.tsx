import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./style.css";
import { routesConfig } from "@pages/routes/routes-config";

const App = () => (
  <Router basename="/">
    <Switch>
      {routesConfig.map((page) => (
        <Route
          key={page.path}
          exact={page.exact}
          component={page.component}
          path={page.path}
        />
      ))}
    </Switch>
  </Router>
);

export default App;
