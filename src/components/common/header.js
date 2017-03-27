/**
 * Created by Julieta on 26/03/2017.
 */

"use strict";

var React = require('react');
var Route = require('react-router');
var Link = Route.Link;

//Links go to names in routes.js
var Header = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <Link to="app" className="navbar-brand">
                        <img src="images/Logo.jpg" />
                    </Link>
                    <ul className="nav navbar-nav">
                        <li><Link to="app">Home</Link></li>
                        <li><Link to="authors">Authors</Link> </li>
                        <li><Link to="about">About</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;
