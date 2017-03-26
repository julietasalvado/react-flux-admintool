/**
 * Created by Julieta on 26/03/2017.
 */

"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');

var Authors = React.createClass({

    //Using lifecycle method: initial state with empty array
    getInitialState : function () {
        return {
            authors: []
        };
    },

    //Using lifecycle method: modify the state
    componentWillMount: function () {
        this.setState({authors: AuthorApi.getAllAuthors()});
    },

    render: function () {
        //it returns a table row
        var createAuthorRow = function (author) {
            return (
                <tr key={author.id}>
                    <td><a href={"/#authors/" + author.id}>{author.id} </a></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>

            );
        };
        return(
            //we need a wrap to the component, usually in a div
            //iterate over the list in tbody
            <div>
                <h1>Authors</h1>

                <table className="table">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        {this.state.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        )
    }
});

module.exports = Authors;