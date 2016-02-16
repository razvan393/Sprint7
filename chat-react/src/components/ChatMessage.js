require('normalize.css');
require('styles/App.css');


import React from 'react';
import User from './User';

var ChatMessage = React.createClass({
  getDefaultProps: function () {
    return {
      alignRight: false,
      delivered: true,
      body: '',
      user: {},
      date: '',
      id: ''
    }
  },

  render: function () {
    var align = this.props.alignRight ? 'right' : 'left';
    var delivered = this.props.delivered ? '' : 'not-delivered';
    var user = this.props.user;
    return (
      <div className="chat-message">
        <div className={"align-" + align + ' ' + delivered}>
          <User firstName={user.first_name} lastName={user.last_name} />
          <div className="body">{this.props.body}</div>
          <div className="date">{this.props.date}</div>
        </div>
      </div>
    );
  }
});

export default ChatMessage;
