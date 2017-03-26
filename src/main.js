$ = jQuery = require('jquery'); //bootstrap expects jquery to be defined globally

var React = require('react');
var Home = require('./components/homePage')


React.render(/*what I want to render*/ <Home/>, /*DOM element that I'd like to attach my app to*/ document.getElementById('app'));