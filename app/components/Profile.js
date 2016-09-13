var React = require('react');
var Router = require('react-router');
var Repos = require('./Github/Repos');
var UserProfile = require('./Github/UserProfile');
var Notes = require('./Notes/Notes');
var ReactFireMixin = require('reactfire');

var Profile = React.createClass({
  mixin: [ReactFireMixin],
  getInitialState: function(){
    return {
      notes: [1, 2, 3],
      bio: {
        name: 'Casey Wight'
      },
      repos: ['a', 'b', 'c'],
    }
  },
  componenDidMount: function(){
    this.ref = new Firebase();
  },
  render: function() {
    console.log(this.props)
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes notes={this.state.notes} />
        </div>
      </div>
    )
  }
});

module.exports = Profile;
