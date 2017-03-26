/**
 * Created by Julieta on 26/03/2017.
 */

/**
 * Created by Julieta on 26/03/2017.
 */


/**
 * Dumb author component.
 */

"use strict";

var React = require('react');

var AuthorList = React.createClass({

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
                <table className="table">
                    <thead>
                    <th>ID</th>
                    <th>Name</th>
                    </thead>
                    <tbody>
                    {this.props.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        )
    }
});

module.exports = AuthorList;