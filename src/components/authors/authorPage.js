/**
 * Created by Julieta on 26/03/2017.
 */

/**
 * Smart author component.
 */
"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');

var AuthorPage = React.createClass({

    //Using lifecycle method: initial state with empty array
    getInitialState : function () {
        return {
            authors: []
        };
    },

    //Using lifecycle method: modify the state
    componentDidMount: function () {
        if (this.isMounted) {
            this.setState({authors: AuthorApi.getAllAuthors()});
        }
    },

    render: function () {
        return(
            <div>
                <h1>Authors</h1>
                <AuthorList authors={this.state.authors}/>
            </div>
        )
    }
});

module.exports = AuthorPage;