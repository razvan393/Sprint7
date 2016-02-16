require('normalize.css');
require('styles/App.css');


import React from 'react';
import User from './User';

var ActiveUsers = React.createClass({
  getDefaultProps: function () {
    return {
      list: []
    }
  },

  render: function () {

    var activeUsers = this.props.list.map(function (user) {
      return (<User key={user.fb_id} firstName={user.first_name} lastName={user.last_name} />);
    })

    return (
      <div className="active-users">
        {activeUsers}
      </div>
    );
  }
});

export default ActiveUsers;
