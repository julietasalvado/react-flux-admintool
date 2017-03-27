/**
 * Created by Julieta on 26/03/2017.
 */

// "use strict"; Disabling check because we can't run strict mode. Need global vars.

var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery'); //bootstrap expects jquery to be defined globally

var App = React.createClass({
    render: function () {

        //the routeHandler will render the appropiate child component, based on the url
        return (
            <div>
                <Header/>
                <RouteHandler/>
            </div>
        );
    }
});

module.exports = App;
