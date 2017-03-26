$ = jQuery = require('jquery'); //bootstrap expects jquery to be defined globally

var React = require('react');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');

var App = React.createClass({
    render: function () {
        var Child;

        switch (this.props.route) {
            case 'about': Child = About; break;
            default: Child = Home;
        }

        return (
            <div>
                <Child/>
            </div>
        );
    }
});

function render() {
    var route = window.location.hash.substr(1);
    React.render(/*what I want to render*/ <App route={route}/>, /*DOM element that I'd like to attach my app to*/ document.getElementById('app'));
}

//the event that occurs when there is a hash change in the URL
window.addEventListener('hashchange', render);
render();

