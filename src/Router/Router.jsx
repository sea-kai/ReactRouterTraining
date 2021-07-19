import { Route, Switch } from "react-router-dom";
import { Home } from "../Home";
import { Page2 } from "../Page2";
import { page1routes } from "./Page1Routes";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/Page1"
        render={({ match: { url } }) => (
          <Switch>
            {page1routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="/Page2">
        <Page2 />
      </Route>
    </Switch>
  );
};
