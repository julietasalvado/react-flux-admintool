/**
 * Created by Julieta on 26/03/2017.
 */

"use strict";

var React = require('react');

var About = React.createClass({
    statics: {
        //when this page can be transition to?
        willTransitionTo: function (transition, params, query, callback) {
            if (!confirm('Are you sure you want to read a page that\'s this boring?')) {
                transition.about(); //abort
            } else {
                callback(); //go on
            }
        },

        //if the user wants to leave
        willTransitionFrom: function (transition, component) {
            if (!confirm('Are you sure you want to leave a page that\'s this exciting?')) {
                transition.about();//abort
            }
        }
    },

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
