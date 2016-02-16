require('normalize.css');
require('styles/App.css');


import React from 'react';

var ChatInput = React.createClass({

  onSubmit: function (event) {
    event.preventDefault();
    var body = this.refs.value;
    this.props.onSubmit(body);
  },

  render: function () {

    return (
      <div className='chat-input'>
        <form onSubmit={this.onSubmit}>
          <input ref='message' placeholder='type here...'/>
          <input type='submit'/>
        </form>
      </div>
    );
  }
});

export default ChatInput;
