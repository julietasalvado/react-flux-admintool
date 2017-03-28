/**
 * Created by Julieta on 26/03/2017.
 */
"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;

//when path is undefined, the Route name is used as path
var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homePage')}/>
        <Route name='authors' handler={require('./components/authors/authorPage')}/>
        <Route name='about' handler={require('./components/about/aboutPage')}/>
        <NotFoundRoute handler={require('./components/notFoundPage')}/>
    </Route>
);

module.exports = routes;
