/**
 * Created by Julieta on 26/03/2017.
 */

"use strict";

var React = require('react');

var About = React.createClass({
    render: function () {
        return (
            <div>
                <h1>About</h1>
                <p> This is an application made by
                    <ul>
                        <li>me</li>
                    </ul>
                </p>
            </div>
        );
    }
});

module.exports = About;
