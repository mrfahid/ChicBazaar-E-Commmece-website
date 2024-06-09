
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Route } from "react-router-dom";

const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <div>Loading...</div>,
    })}
    {...args}
  />
);

export default ProtectedRoute;
