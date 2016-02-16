require('normalize.css');
require('styles/App.css');


import React from 'react';

var ChatInput = React.createClass({

  onSubmit: function (event) {
    event.preventDefault();
    var body = "HELLOOO!";
    this.props.onSubmit(body);
  },

  render: function () {

    return (
      <div className="chat-input">
        <form onSubmit={this.onSubmit}>
          <input placeholder="type here..."/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
});

export default ChatInput;
