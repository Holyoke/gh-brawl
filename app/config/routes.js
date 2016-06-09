var React = require('react'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    Main = require('../components/main.js'),
    Home = require('../components/home.js');

var routes = (
  <Router>
    <Route path='/' component={Main}>
      <Route path='/home' component={Home} />
    </Route>
  </Router>
);

module.exports = routes;
