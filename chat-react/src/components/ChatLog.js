require('normalize.css');
require('styles/App.css');


import React from 'react';

var ChatLog = React.createClass({
  render: function () {
    return (
      <div className="chat-log">
        {this.props.children}
      </div>
    );
  }
});

export default ChatLog;
