/**
 * Created by Julieta on 26/03/2017.
 */

"use strict";

var React = require('react');

//the class which contains our component
var Home = React.createClass({
    //render function is mandatory in any React component
    //what it returns is what we are gonna display in the screen
    render: function () {
        return (
            <div className="jumbotron">
                <h1>Administration Tool</h1>
                <p>The best tool ever</p>
            </div>
        );
    }
});

//then it needs to be exported so it can be use outside
module.exports = Home;
