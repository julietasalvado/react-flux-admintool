/**
 * Created by Julieta on 26/03/2017.
 */

"use strict";

var React = require('react');
var Route = require('react-router');
var Link = Route.Link;

//the class which contains our component
var Home = React.createClass({
    //render function is mandatory in any React component
    //what it returns is what we are gonna display in the screen
    render: function () {
        return (
            <div className="jumbotron">
                <h1>Administration Tool</h1>
                <p>The best tool ever</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
            </div>
        );
    }
});

//then it needs to be exported so it can be use outside
module.exports = Home;
