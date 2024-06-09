import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth0-provider-with-history';

const Auth0ProviderWithRouter = ({ children }) => {
  return (
    <Router>
      <Auth0ProviderWithHistory>
        {children}
      </Auth0ProviderWithHistory>
    </Router>
  );
};

export default Auth0ProviderWithRouter;