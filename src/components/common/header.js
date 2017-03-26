/**
 * Created by Julieta on 26/03/2017.
 */

"use strict";

var React = require('react');

var Header = React.createClass({
    render: function () {
        return (
            <nav classname="navbar navbar-default">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand">
                        <img src="images/logo.png" />
                    </a>
                    <ul className="nav navbar-nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="/#about">About</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;
