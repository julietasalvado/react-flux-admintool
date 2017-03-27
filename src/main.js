
var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

//for the handler that's currently in the scope based on the URL
Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById('app'));
});


