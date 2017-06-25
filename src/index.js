import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import registerServiceWorker from './utils/registerServiceWorker';

import App from './containers/App';
import JobListContainer from './containers/JobListContainer';
import CreateJobContainer from './containers/CreateJobContainer';
import JobDetail from './components/JobDetail';

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj4aqefvc2x6v0124hgdn0iwh'
});

const client = new ApolloClient({
  networkInterface
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <HashRouter>
      <App>
        <Route exact path='/' component={JobListContainer} />
        <Route exact path='/create' component={CreateJobContainer} />
        <Route exact path='/job/:job' component={JobDetail} />
      </App>
    </HashRouter>
  </ApolloProvider>, document.getElementById('root'));

registerServiceWorker();
