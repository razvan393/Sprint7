require('normalize.css');
require('styles/App.css');


import React from 'react';

var User = React.createClass({

  render: function () {
    return (
      <span className='active-user'>
        <span className='green-dot'/>
        <span>{this.props.firstName}</span> <span>{this.props.lastName}</span>
      </span>
    );
  }
});

export default User;
